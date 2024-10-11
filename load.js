const mongoose = require("mongoose");
const Product = require("./module/product.js");
mongoose
  .connect("mongodb://127.0.0.1:27017/Shopapp")
  .then(() => {
    console.log("The Connection Open Form Mongoose");
  })
  .catch((e) => {
    console.log(`The Error${e}`);
  });
// const p = new Product({
//   name: "Banana",
//   price: 100,
//   category: "fruit",
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const p = [
  { name: "Apple", price: 80, category: "fruit" },
  { name: "Banana", price: 30, category: "fruit" },
  { name: "Mango", price: 60, category: "fruit" },
  { name: "Orange", price: 40, category: "fruit" },
  { name: "Grapes", price: 100, category: "fruit" },
  { name: "Pineapple", price: 50, category: "fruit" },
  { name: "Watermelon", price: 40, category: "fruit" },
  { name: "Papaya", price: 30, category: "fruit" },
  { name: "Strawberry", price: 150, category: "fruit" },
  { name: "Pomegranate", price: 100, category: "fruit" },
  { name: "Tomato", price: 20, category: "vegatable" },
  { name: "Potato", price: 25, category: "vegatable" },
  { name: "Carrot", price: 35, category: "vegatable" },
  { name: "Broccoli", price: 60, category: "vegatable" },
  { name: "Spinach", price: 40, category: "vegatable" },
  { name: "Cauliflower", price: 50, category: "vegatable" },
  { name: "Lettuce", price: 30, category: "vegatable" },
  { name: "Cheese", price: 400, category: "dairy" },
  { name: "Milk", price: 50, category: "dairy" },
  { name: "Yogurt", price: 60, category: "dairy" },
  { name: "Butter", price: 100, category: "dairy" },
];
Product.insertMany(p)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
