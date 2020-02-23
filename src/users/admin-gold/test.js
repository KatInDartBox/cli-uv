const path = require("path");

console.log("path dir", path.join(__dirname, "name.test"));
console.log("path file", path.join(__filename, "name.test"));
