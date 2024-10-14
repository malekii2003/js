const product = require("../data/product.json");
async function find() {
  return new Promise((resovle, reject) => {
    resovle(product);
  });
}

const productsmodel = {
  products,
};
module.exports.productsmodel;
