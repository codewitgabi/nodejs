const crypto = require("crypto");
const {
  createReadStream
} = require("fs");

console.info("CIPHERS =>");
for (let cipher of crypto.getCiphers()) {
  console.log(cipher);
}

console.info("\n\nHASHERS =>");
for (let hash of crypto.getHashes()) {
  console.log(hash);
}

const sha = crypto.createHash("sha256");
const filename = process.argv[2];
const rs = createReadStream(filename);

rs.on("data", (chunk) => {
  sha.update(chunk);
})

rs.on("end", () => {
  let d = sha.digest("binary");
  console.log(d + " " + filename);
})

const s = crypto.createHash("sha512");

console.log(s.update("@Ksjsj82737&jshs").digest("base64"))