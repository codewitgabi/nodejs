const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const PORT = process.argv[2] ? process.argv[2]: 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const template = fs.createReadStream("index.html");

    res.writeHead(200, {
      "Content-Type": "text/html"
    });

    template.pipe(res);

    if (req.method === "POST") {
      console.log("[INFO ] POST / OK")
      let data = "";

      req.on("data", (chunk) => {
        data += chunk;
      })

      req.on("end", () => {
        const formData = querystring.parse(data);
        console.log("user " + formData.name);
        console.log("message " + formData.message);
      })
    }
  }
})

server.listen(PORT, () => {
  console.log(`[INFO ] Server listening at http://localhost:${ PORT }`);
})