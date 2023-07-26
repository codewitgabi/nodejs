const fs = require("fs");
const textToSearch = process.argv[2];
const filesToSearch = process.argv.slice(3, process.argv.length);

filesToSearch.forEach(file => {
let regex = RegExp(textToSearch, "ig");
  fs.readFile(file, "utf8", (error, data) => {
    if (!error) {
      if (regex.test(data)) {
        console.info(file);
      }
    } else {
      console.trace(error);
    }
  })
})