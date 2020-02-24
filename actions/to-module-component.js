// const appCliPath = require("../node-fnc/get-source-path")();
const path = require("path");
const _ = require("lodash");
const fs = require("fs-extra");

const toCamel = require("./to-camel");
// const getNowId = require("../node-fnc/get-now-id");
const getValidCssName = require("../node-fnc/get-valid-css-name");
const getRelativePath = require("../node-fnc/get-relative-path");
const readFile = require("../node-fnc/read-file");
const writeFile = require("../node-fnc/write-file");

let cssPath = "";

const toModuleStyle = async (requestPath, cmd) => {
  try {
    const filePath = getDestPath(requestPath);
    const notIncludeStyle = cmd.notIncludeStyle ? true : false;
    console.log("requested path".cyan, filePath);

    const data = await readFile(filePath);
    const componentData = await getComponentData(data);
    await writeFile(filePath, componentData);

    const cssData = await getCssPathDataAndSetCssPath(componentData);
    await writeFile(filePath, cssData, `updated file at '${filePath}'`);

    if (notIncludeStyle) {
    } else {
      await toCamel(getRelativePath(filePath, cssPath));
    }
  } catch (error) {
    throw error;
  }
};

function getDestPath(filePath) {
  return path.join(`./src/${filePath}`);
}

function getCssPathDataAndSetCssPath(data) {
  return new Promise((resolve, reject) => {
    const reg = /import.*?["']\s*(.+)(\.s?css)\s*["']/;
    const newData = data.replace(reg, (match, content, tailing) => {
      if (match) {
        cssPath = content + tailing;
        return `import style from '${cssPath}'`;
      }
    });
    resolve(newData);
  });
}

function getComponentData(data) {
  return new Promise((resolve, reject) => {
    const reg = /className\s*=\s*([`'"{])([\s\w\-+.\{\}`"\$\/]+)([`'"}])/g;

    const newData = data.replace(reg, (match, openQuote, content, closeQuote) => {
      if (openQuote.match(/['"]/g)) {
        let newCls = [];

        content.split(" ").forEach(item => {
          const cssName = getValidCssName(item);
          if (cssName) {
            newCls.push(`$\{style.${cssName}\}`);
          }
        });
        return `className = {\` ${newCls.join(" ")} \`}`;
      }
    });
    resolve(newData);
    // console.log("new data from simple class", newData);
  });
}

module.exports = toModuleStyle;