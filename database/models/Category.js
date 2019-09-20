const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  catid: Number,
  display_name: String,
  image: String
});

const CategoryModel = mongoose.model("DataShopee", CategorySchema);

module.exports = CategoryModel;
