const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productname: String,
    mainimage:String,
    images:[String],
    Brand:String,
    price:Number,
    description:String

  });
  const Product = mongoose.model('Product', productSchema);

  module.exports= Product