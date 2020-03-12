const _ = require("lodash");
function getValidCssName(name) {
  const classNames = _.trim(name).match(/-?[_a-zA-Z]+[_a-zA-Z0-9-]*/g);
  const NewName = classNames ? classNames[0] : "";
  return NewName.length ? true : false;
}

module.exports = getValidCssName;
