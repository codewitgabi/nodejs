const path = require("path");


console.log(path.normalize("/foo//bar/for//you"));
const PATH = path.join("~", "foo", "bar");
console.log(PATH);
console.log(path.isAbsolute("/foo"));
console.log(path.isAbsolute("foo"));
console.log(path.dirname("/foo/bar/hello.js"));
console.log(path.basename("/foo/bar/index.js"))
console.log(path.basename("/foo/bar/index/"))
console.log(path.basename("/foo/bar/index.js", ".js"))
console.log(path.sep);
console.log(path.delimiter)