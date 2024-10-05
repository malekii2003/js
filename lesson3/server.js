const http = require("http");
const product = require("./data/product.json");
const productcontroler = require("./controller/product.controller");

const PORT = 5000;
const server = http.createServer((req, res) => {
  if (req.url == "/api/product") {
    productcontroler.get(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/Json" });
    res.write(JSON.stringify({ message: "Rout in nout found" }));
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`the server run on oprt ${PORT}; http://localhost:${PORT} `);
});
