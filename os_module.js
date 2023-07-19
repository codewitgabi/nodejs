const os = require("os");
const assert = require("assert");


console.log("TEMP DIR => ", os.tmpdir());
console.log("ENDIAN => ", os.endianness());
console.log("HOSTNAME => ", os.hostname());
console.log("TYPE => ", os.type());
console.log("PLATFORM => ", os.platform());
console.log("ARCHITECTURE => ", os.arch());
console.log("RELEASE => ", os.release());
console.log("UPTIME => ", os.uptime());
console.log("LOAD AVERAGE => ", os.loadavg());
console.log("TOTAL MEMORY => ", os.totalmem());
console.log("FREE MEMORY => ", os.freemem());
console.log("CPUS => ", os.cpus());
console.log("NETWORK => ", os.networkInterfaces());
console.log("EOL => ", os.EOL);
console.log(os.EOL === "\n");