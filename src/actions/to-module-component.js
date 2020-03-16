// const appCliPath = require("../node-fnc/get-source-path")();
const path = require("path");
const _ = require("lodash");
const fs = require("fs-extra");

const toCamel = require("./to-camel");
// const getNowId = require("../node-fnc/get-now-id");

const getRelativePath = require("../node-fnc/get-relative-path");
const readFile = require("../node-fnc/read-file");
const writeFile = require("../node-fnc/write-file");
const getAllValidCssName = require("../node-fnc/get-all-valid-css-name");
const isValidCssName = require("../node-fnc/is-valid-css-name");
let cssPath = "";
let cssModulePath = "";
let srcName = "src";
let isAbsolute = false;
let styleName = "uvStyle";
const toModuleStyle = async (requestPath, cmd) => {
  try {
    isAbsolute = cmd.absolute;
    srcName = cmd.src ? cmd.src : "src";
    styleName = cmd.styleName ? cmd.styleName : "uvStyle";

    const notIncludeStyle = cmd.notIncludeStyle ? true : false;
    const isReverse = cmd.reverse ? true : false;

    const filePath = getDestPath(requestPath);
    console.log(`original file path: ${filePath}`.cyan);
    const data = await readFile(filePath);

    // case reverse to normal style
    if (isReverse) {
      const reverseData = await getReverseData(data);
      await writeFile(filePath, reverseData);
      console.log(`reverse to normal style at ${filePath}`.cyan);
    } else {
      // case not reverse
      const cssImportPathData = await getCssPathDataAndSetCssPath(data);
      const cssData = cssPath ? await readFile(_getCssPath(filePath, cssPath)) : "";
      const blackList = cssData ? getAllValidCssName(cssData) : [];
      const componentData = await getComponentData(cssImportPathData, blackList);

      // await writeFile(filePath, cssImportPathData);
      await writeFile(filePath, componentData);
      console.log(`updated to module style at ${filePath}`.cyan);
      if (notIncludeStyle) {
        console.log(`pls manually rename your style file to ${cssModulePath}`.red);
      } else {
        await toCamel(getRelativePath(filePath, cssPath), { absolute: isAbsolute });
      }
    }
  } catch (error) {
    throw error;
  }
};

function _getCssPath(relativePath, path) {
  let a = getDestPath(getRelativePath(relativePath, path));
  // console.log("arguments", relativePath, path);
  // console.log("css path from doc", a);
  return a;
}
function getDestPath(filePath) {
  const abs = path.join(filePath);
  const srcPath = path.join(`./${srcName}/${filePath}`);
  // console.log({ abs, srcPath });
  return isAbsolute ? abs : srcPath;
}

function getCssPathDataAndSetCssPath(data) {
  return new Promise((resolve, reject) => {
    const reg = /import.*?["'`]\s*(.+)(\.s?css)\s*["'`]/;
    const newData = data.replace(reg, (match, content, tailing) => {
      if (match) {
        // set cssPath global var;
        cssPath = `${content}${tailing}`;

        // set cssModule path global var
        if (content.match(/\.module$/g)) {
          cssModulePath = cssPath;
        } else {
          cssModulePath = `${content}.module${tailing}`;
        }
        return `import ${styleName} from "${cssModulePath}"`;
      }
    });

    resolve(newData);
  });
}

function _updateCssNameInsideString(content, blackList) {
  let newCls = [];
  let newClsStyle = [];
  // console.log("content:\n", content.split(" "));
  content.split(" ").forEach(item => {
    const cssName = isValidCssName(item);
    const validBlackList = blackList.map(css => _.camelCase(_.trim(css)));

    if (cssName && validBlackList.includes(_.camelCase(_.trim(item)))) {
      item ? newClsStyle.push(`$\{${styleName}.${_.trim(_.camelCase(item))}\}`) : null;
    } else {
      item ? newCls.push(_.trim(item)) : null;
    }
  });
  const result = `${newClsStyle.join(" ")} ${newCls.join(" ")}`;
  // console.log("result", [result]);
  return result;
}

function _updateCssNameJS(content, blackList) {
  // const contentNoQuote = content.replace("`", "");
  const regDollar = /\$\{[\w\W]+?\}/g;
  let newClsDollar = content.match(regDollar);
  newClsDollar = newClsDollar ? newClsDollar.join(" ") : "";
  const newContent = content.replace(regDollar, "");
  const newCls = _updateCssNameInsideString(newContent, blackList);
  const result = `${newClsDollar} ${newCls}`;

  return result;
}

function getReverseData(data) {
  return new Promise((resolve, reject) => {
    const reg = /className\s*=\s*(['"{])([\s\w\-+.\{\}`"\$\/]+)(['"}])/g;
    let newData = data.replace(reg, (match, openQuote, content, closeQuote) => {
      let regStyle = "(\\${\\s*" + styleName + "\\.)([\\w\\W]+?)(})";
      regStyle = new RegExp(regStyle, "g");
      // console.log("math style reverse", { styleName, reg: regStyle });

      const newContent = content.replace(regStyle, (match, style, body, closeBracket) => {
        return body;
      });
      return `className = ${openQuote} ${newContent} ${closeQuote}`;
    });

    const regImportStyle = /import.*?["']\s*(.+)(\.s?css)\s*["']/;
    newData = newData.replace(regImportStyle, (match, content, tail) => {
      return `import "${content}${tail}"`;
    });
    resolve(newData);
  });
}

function getComponentData(data, blackList = []) {
  return new Promise((resolve, reject) => {
    const reg = /className\s*=\s*(['"{])([\s\w\-+.\{\}`"\$\/]+)(['"}])/g;

    const newData = data.replace(reg, (match, openQuote, content, closeQuote) => {
      if (openQuote.match(/['"]/g)) {
        // case className=""
        let newCls = _updateCssNameInsideString(content, blackList);
        return `className = {\`${newCls}\`}`;
      } else {
        let newContent = content.replace(/`([\w\W]+?)`/g, (match, data) => {
          return "`" + _updateCssNameJS(data, blackList) + "`";
        });
        newContent = newContent.replace(/(['"])([\w\W]+?)(['"])/g, (match, openQuote, data, closeQuote) => {
          return `\`${_updateCssNameInsideString(data, blackList)}\``;
        });
        return `className = {${newContent}}`;
      }
    });
    // console.log("new data:\n", newData);
    resolve(newData);
    // console.log("new data from simple class", newData);
  });
}

module.exports = toModuleStyle;
