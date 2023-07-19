const fs = require("fs");

/* Asynchronous File Renaming */
fs.rename("new.txt", "new2.txt", (error) => {
  console.log("File was successfully renamed");
})

/* Synchronous File Renaming */
fs.renameSync("new2.txt", "new.txt");

/* Truncate file characters Asynchronously */
fs.truncate("new.txt", 400, (error) => {
  console.log("File was truncated");
})

/* Truncate file characters synchronously */
fs.truncateSync("new.txt", 350);

/* Get Absolute Path */

const cache = {
  "/storage": "/emulated"
};
fs.realpath("new.txt", (error, response) => {
  console.log(error ? error: `Async => ${response}`);
})

const realPath = fs.realpathSync("new.txt");
console.log(`Sync => ${realPath}`)

/* Create Directory */

fs.mkdir("created_dir", (error) => {
  console.log(error ? error: "File created successfully");
})

fs.mkdirSync("sync_created_dir");

/* Delete directory */

fs.rmdir("sync_created_dir", (error) => {
  console.log(error ? error: "sync_created_dir deleted successfully");
});

/*
fs.rmdirSync("filename");
*/

/* List content of directory */

fs.readdir(".", (error, files) => {
  console.log(error ? error: files);
})

const fileContents = fs.readdirSync(".");

for (let i in fileContents) {
  console.log(`${1 + Number(i)} => ${fileContents[i]}`);
}

/* Read a file */

fs.readFile("new.txt", "utf-8", (error, data) => {
  console.log(error ? error: data);
})
/*
fs.readFileSync("new.txt", "utf-8")
*/

/* Write to a file */
fs.writeFileSync("write.txt", "Written from Node.js", "utf-8", "w");

/* Check if a file exists */
fs.exists("callback.js", (value) => {
  console.log(value ? "file exists": "File does not exist");
})

// fs.writeFile(filename, data, [, options], callback)

/* Other file methods */
// fs.appendFile();
// fs.watchFile()
// fs.unwatchFile()