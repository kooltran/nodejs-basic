const axios = require("axios");
const mongoose = require("mongoose");
const CategoryModel = require("./database/models/Category");

mongoose.connect("mongodb://127.0.0.1:27017/get-data-shopee", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

axios.get("https://shopee.vn/api/v2/category_list/get").then(res => {
  const shopeeData = res.data.data.category_list.map(item => ({
    catid: item.catid,
    display_name: item.display_name,
    image: item.image
  }));
  CategoryModel.insertMany(shopeeData, (err, data) => {
    console.log(err, data);
  });
});
