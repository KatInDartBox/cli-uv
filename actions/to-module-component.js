// const appCliPath = require("../node-fnc/get-source-path")();
const path = require("path");
const _ = require("lodash");
const fs = require("fs-extra");

const toCamel = require("./to-camel");
// const getNowId = require("../node-fnc/get-now-id");
const getValidCssName = require("../node-fnc/get-valid-css-name");
const getRelativePath = require("../node-fnc/get-relative-path");

let cssPath = "";

const toModuleStyle = async (filePath, cmd) => {
  const destPath = getDestPath(filePath);
  const notIncludeStyle = cmd.notIncludeStyle ? true : false;
  console.log("requested path".cyan, destPath);

  await updateReactComponentStyle(destPath);
  console.log("updated react component to module style".cyan);
  if (notIncludeStyle) {
  } else {
    await toCamel(getRelativePath(filePath, cssPath));
  }
};

function getDestPath(filePath) {
  return path.join(`./src/${filePath}`);
}

// function getCssPath(componentPath){
//   if (!fs.existsSync(componentPath)) {
//     console.log(`can't find ${componentPath}`.red);
//     process.exit(1);
//   }

//   return new Promise((resolve, reject) => {
//     fs.readFile(componentPath, "utf8", function(err, data) {
//       if (err) {
//         return console.log(err);
//       }
//       const reg = /^import.*?["']\s*(.+).(scss|css)\s*["']/;
//       const cssPath = data.match(reg)

//       resolve();
//     });
//   });
// }

function updateReactComponentStyle(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`can't find ${filePath}`.red);
    process.exit(1);
  }

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", function(err, data) {
      if (err) {
        return console.log(err);
      }

      const result = replaceStringClass(data);
      setCssPath(data);
      // result = data if nothing to be replace
      const destPath = filePath; // + getNowId();
      fs.outputFile(destPath, result, err => {
        if (err) throw err;

        resolve();
      });
    });
  });
}

function setCssPath(data) {
  // console.log("set css path data", data);
  const reg = /import.*?["']\s*(.+)(\.s?css)\s*["']/;
  const match = data.match(reg);
  // console.log("match", match, match.length);
  if (match) {
    if (match.length === 3) {
      cssPath = match[1] + match[2];
    }
  }
  // console.log("css path", cssPath);
}

function replaceStringClass(data) {
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
    } else {
      //case className={...} not yet support
      //case className=`` not yet support
      return match;
    }
  });
  // console.log("new data from simple class", newData);
  return newData;
}

module.exports = toModuleStyle;
