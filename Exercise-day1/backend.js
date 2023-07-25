const http = require("http");
const fs = require("fs");


http.createServer((req, res) => {
  if (req.url === "/") {
    const template = fs.readFileSync("index.html");

    res.writeHead(200, {
      "Content-Type": "text/html"
    });

    res.end(template);

    if (req.method === "POST") {
      let data = "";

      req.on("data", (chunk) => {
        data += chunk;
      })

      req.on("end", () => {
        console.log(data.split("&"));
      })
    }
  }
}).listen(8000)