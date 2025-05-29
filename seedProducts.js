const mongoose = require("mongoose");
const fs = require("fs");

// 1. Connect to MongoDB
mongoose.connect("mongodb+srv://chandrikavedula:waydukaan@cluster0.jekbbmp.mongodb.net/waydukaan", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

// 2. Define Product Schema
const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  stockQty: Number,
  imageUrl: String
});

const Product = mongoose.model("Product", ProductSchema);

// 3. Read Products JSON
const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));

// 4. Insert Products
Product.insertMany(products)
  .then(() => {
    console.log("✅ Products inserted successfully");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Error inserting products:", err);
    mongoose.disconnect();
  });
