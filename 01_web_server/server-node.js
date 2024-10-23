const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("Hello home page");
  } else if (req.url === "/sunny") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("Hello sunny");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is  running at http://${hostname}:${port}/`);
});
