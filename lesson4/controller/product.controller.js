const productmodel = require("../../lesson3/model/product.model");

async function get(res, req) {
  try {
    const products = await productmodel.find();
    res.writeHead(200, "Content-Type", "application/Json");
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {}
}
const productcontroler = {
  get,
};
module.exports.productcontroler;
