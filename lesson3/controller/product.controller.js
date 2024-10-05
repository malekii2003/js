const productmodel = require("../model/product.model");
async function get(req, res) {
  try {
    const product = await productmodel.find();
    res.writeHead(200, "Content-Type", "application/Json");
    res.write(JSON.stringify(product));
    res.end();
  } catch (error) {}
}
const productcontroler = {
  get,
};
module.exports = productcontroler;
