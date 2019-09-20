const axios = require("axios");
const mongoose = require("mongoose");
const ProductListModel = require("./database/models/Category");

mongoose.connect("mongodb://127.0.0.1:27017/get-data-shopee", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// async function getData() {
//   const categories = await axios.get(
//     "https://shopee.vn/api/v2/category_list/get"
//   );

//   categories.data.data.category_list.map(async item => {
//     const prodList = await axios.get(
//       `https://shopee.vn/api/v2/search_items/?by=pop&limit=5&match_id=${item.catid}`,
//       {
//         headers: {
//           referer: "shopee.vn"
//         }
//       }
//     );
//     console.log(prodList.data);
//   });
// }

// getData();

axios
  .get("https://shopee.vn/api/v2/search_items/?by=pop&limit=3&match_id=78", {
    headers: {
      referer: "https://shopee.vn"
    }
  })
  .then(res => {
    console.log(res.data.items);
    // const shopeeData = res.data.data.map(item => ({
    //   catid: item.main.catid,
    //   display_name: item.main.display_name,
    //   name: item.main.name,
    //   image: item.main.image
    // }));
    // CategoryModel.insertMany(shopeeData, (err, data) => {
    //   console.log(err, data);
    // });
  });
