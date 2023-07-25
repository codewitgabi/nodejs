const http = require("http");

const PORT = 3000;
const HOSTNAME = "localhost";

console.log("HTTP METHODS => ", http.METHODS);
console.log("HTTP STATUS CODES => ", http.STATUS_CODES);

/*
const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "content-type": "text/html"
  });

  response.end("<h1>Hello world from Node.js</h1>");
})

server.listen(PORT, HOSTNAME, () => {
  console.log("[INFO ] Server listening at http://localhost:3000");
})
*/

/* Make API calls */

const e1 = "http://localhost:8000/api/student-list";

http.get(e1, (data) => {
  console.log(data.statusMessage);

  data.resume();
}).on("error", (e) => {
  console.log(e.message)
})

const options = {
  "hostname": "localhost",
  "port": 8000,
  "method": "GET",
  "path": "/api/student-list",
  "headers": {
    "Content-Type": "application/json"
  }
};

const req = http.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  })

  res.on("end", () => {
    console.log(JSON.parse(data));
  })
}).on("error", (err) => {
  console.log(err);
}).end()