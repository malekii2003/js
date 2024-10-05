const http = require("http");
const product = require("./data/product.json");
const productcontroller = require("./controller/product.controller");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/product") {
    productcontroller.get(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`The server runs on port ${PORT}; http://localhost:${PORT}`);
});
