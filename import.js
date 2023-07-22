const http = require("http"); // in-built module
const mod = require("./modules.js"); // custom module
const {
  username
} = require("./modules.js"); // import only the methods your need

console.log(mod);
console.log(mod.volume(2, 6, 5));
console.log(mod.passkey);
console.log(username);