const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    Categoryname: String,
    image:String,

  });
  const Category = mongoose.model('Category', categorySchema);

  module.exports= Category