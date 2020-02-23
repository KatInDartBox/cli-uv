function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  console.log("replacer");
  console.log("match", match);
  console.log("p1", p1);
  console.log("p2", p2);
  console.log("p3", p3);
  console.log("offset", offset);
  console.log("string", string);

  return [p1, p2, p3].join(" - ");
}
var newString = "abc12345BCA".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
newString;
