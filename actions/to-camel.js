// const appCliPath = require("../node-fnc/get-source-path")();
const path = require("path");
const _ = require("lodash");
const fs = require("fs-extra");

const getValidCssName = require("../node-fnc/get-valid-css-name");

// const getNowId = require("../node-fnc/get-now-id");
// const getRelativePath = require("../node-fnc/get-relative-path");

async function toCamel(filePath) {
  const destPath = getDestPath(filePath);
  console.log(`request css file path ${destPath}`.cyan);

  await updateStyleCamelCase(destPath);
  console.log("updated to camel style!".cyan);
}

function getDestPath(filePath) {
  return path.join(`./src/${filePath}`);
}

function updateStyleCamelCase(filePath) {
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
      const destPath = filePath; // + getNowId();
      fs.outputFile(destPath, result, err => {
        if (err) throw err;
      });
      resolve();
    });
  });
}

function replaceStringClass(data) {
  const reg = /(\..+\{)/g;

  const newData = data.replace(reg, (match, content) => {
    const css = getValidCssName(content);
    return css ? `.${css} {` : match;
  });
  // console.log("new data from simple class", newData);
  return newData;
}

module.exports = toCamel;
