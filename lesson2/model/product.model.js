const product = require("../data/product.json");
async function find(){
return new Promise((resolve,reject)=>{
    resolve(product)
})
}
const productmode = {
  find,
};
module.exports = productmode;
