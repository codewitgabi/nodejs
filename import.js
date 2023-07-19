const http = require("http");

const server = http.createServer((request, response) => {
  // write response headers

  response.writeHead(200, {
    "Content-Type": "text/plain"
  })

  // send content
  response.end(`Hello world from Node JS`);
})

server.listen(8000, () => {
  console.log("Listening on :8000");
})