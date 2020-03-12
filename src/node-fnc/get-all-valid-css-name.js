function getAllValidCssName(data) {
  const classNames = data.match(/\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*/g);
  return classNames ? classNames.map(name => name.replace(".", "")) : [];
}

module.exports = getAllValidCssName;
