const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text-html");
  res.write("<h2>Hello NodeJS</h2>");
  res.end();
});

server.listen(8080, "localhost", () => {
  console.log("server is running on port 8080");
});
