// const appCliPath = require("../node-fnc/get-source-path")();
const path = require("path");
const _ = require("lodash");
const fs = require("fs-extra");

const getValidCssName = require("../node-fnc/get-valid-css-name");
const readFile = require("../node-fnc/read-file");
const writeFile = require("../node-fnc/write-file");

// const getNowId = require("../node-fnc/get-now-id");
// const getRelativePath = require("../node-fnc/get-relative-path");

const toCamel = async (filePath, cmd) => {
  try {
    const destPath = getDestPath(filePath);
    console.log(`request css file path at '${destPath}'`.cyan);

    const data = await readFile(destPath);
    const cssCamelData = await getCssCamelData(data);
    await writeFile(destPath, cssCamelData, `updated to camel style at '${destPath}'`);
  } catch (error) {
    throw error;
  }
};

function getDestPath(filePath) {
  return path.join(`./src/${filePath}`);
}

function getCssCamelData(data) {
  return new Promise((resolve, reject) => {
    const reg = /(\..+\{)/g;

    const newData = data.replace(reg, (match, content) => {
      const css = getValidCssName(content);
      return css ? `.${css} {` : match;
    });
    // console.log("new data from simple class", newData);
    resolve(newData);
  });
}

module.exports = toCamel;
