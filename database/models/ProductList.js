const mongoose = require("mongoose");

const ProductListSchema = new mongoose.Schema({
  itemid: Number,
  name: String,
  image: String,
  catid: Number,
  price: Number
});

const ProductListModel = mongoose.model("DataShopee", ProductListSchema);

module.exports = ProductListModel;
