const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./module/product");
const methodOverride = require("method-override");
mongoose
  .connect("mongodb://127.0.0.1:27017/Shopapp")
  .then(() => {
    console.log("The Connection Open Form Mongoose");
  })
  .catch((e) => {
    console.log(`The Error${e}`);
  });
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.get("/product", async (req, res) => {
  const Products = await Product.find({});
  res.render("first", { Products });
});
app.get("/product/new", (req, res) => {
  res.render("new");
});

app.post("/product", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/product/${newProduct.id}`);
});
app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const foundproduct = await Product.findById(id);
  res.render("show", { foundproduct });
});
app.get("/product/:id/edit", async (req, res) => {
  const { id } = req.params;
  const foundproduct = await Product.findById(id);
  res.render("edit", { foundproduct });
});
app.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const update_product = await Product.findByIdAndUpdate(id, req.body, {
    runValdation: true,
    new: true,
  });

  res.redirect(`/product/${update_product.id}`);
});

app.listen(3000, () => {
  console.log("Listen to 3000 ports");
});
