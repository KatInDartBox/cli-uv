const isValidCssName = require("./node-fnc/is-valid-css-name");
const _ = require("lodash");
const readFile = require("./node-fnc/read-file");

function _updateCssNameInsideString(content, blackList) {
  let newCls = [];
  let newClsStyle = [];
  // console.log("content:\n", content.split(" "));
  content.split(" ").forEach(item => {
    const cssName = isValidCssName(item);
    const validBlackList = blackList.map(css => _.trim(css));

    if (cssName && validBlackList.includes(_.trim(item))) {
      newClsStyle.push(`$\{style.${_.camelCase(item)}\}`);
    } else {
      newCls.push(item);
    }
  });
  const result = newClsStyle.join(" ") + newCls.join(" ");
  // console.log("result", [result]);

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

async function _dollar() {
  const content = await readFile("src/mockdata.txt");
  const blackList = ["title", "txt-info"];

  let newContent = content.replace(/`([\w\W]+?)`/g, (match, data) => {
    return "` " + _updateCssNameJS(data, blackList) + " `";
  });
  console.log("c1:\n", newContent);
  newContent = newContent.replace(/(['"])([\w\W]+?)(['"])/g, (match, opend, data, close) => {
    return opend + _updateCssNameInsideString(data, blackList) + close;
  });
  console.log("c2:\n", [newContent]);
  return newContent;
}
_dollar();
