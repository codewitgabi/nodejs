const http = require("http");
const fs = require("fs");


http.createServer((req, res) => {
  if (req.url === "/") {
    const template = fs.readFileSync("index.html");

    res.writeHead(200, {
      "Content-Type": "text/html"
    });

    res.end(template);;
  }
}).listen(8000)