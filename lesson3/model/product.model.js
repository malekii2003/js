const proudct = require("../data/product.json");
async function find() {
  return new Promise((resolve, reject) => {
    resolve(proudct);
  });
}
const productmodel = {
  find,
};
module.exports = productmodel;

