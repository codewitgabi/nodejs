const querystring = require("querystring");

const message = "Hello world";
const sender = "codewitgabi";

// stringify querystring

const str = querystring.stringify({
  sender, message
});

console.log(str);

const parsedString = querystring.parse(str);

console.log(`Sender => ${ parsedString.sender }`);
console.log(`Message => ${ parsedString.message }`);