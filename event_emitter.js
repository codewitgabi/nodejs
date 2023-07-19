const http = require("http");
const events = require("events");

const emitter = new events.EventEmitter();

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html"
    })

    emitter.emit("connection");

    res.end(`<h1>Hello world from Node.</h1>`);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html"
    })

    res.end(`<h1 style="color: red;">Seems you are lost!!!</h1>`)
  }
})

server.listen(8000, () => {
  console.log("[INFO ] server listening at 127.0.0.1:8000")
})

const connectionHandler = () => {
  console.log("[INFO ] Connected");
}

/* Bind event to Event handler */
emitter.on("connection", connectionHandler); // fired everytime the event is triggered.
// emitter.once("connection", connectionHandler); // fired only once in the application lifetime.