const path = require("path");
const readFile = require("../node-fnc/read-file");

const test = async (filePath, cmd) => {
  const whiteList = cmd.whiteList ? getList(cmd.whiteList) : [];
  console.log("file path", filePath);
  console.log("white list", whiteList);
};

function getList(listString) {
  return listString.replace(/[\[\]]/g, "").split(",");
}

function getDestPath(filePath) {
  return path.join(`./src/${filePath}`);
}

module.exports = test;
