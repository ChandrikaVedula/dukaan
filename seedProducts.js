const mongoose = require("mongoose");
const fs = require("fs");
require("dotenv").config();

// Load product data
const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));

// Define MongoDB schema and model
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  subCategory: String,
  brand: String,
  price: Number,
  mrp: Number,
  marketPrice: Number,
  type: String,
  stockQty: Number,
  imageUrl: String,
  description: String
});

const Product = mongoose.model("Product", productSchema);

// Connect and seed
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://chandrikavedula:waydukaan@cluster0.jekbbmp.mongodb.net/waydukaan")
  .then(() => {
    console.log("✅ MongoDB connected");

    return Product.deleteMany({});
  })
  .then(() => {
    console.log("🗑️ Old products cleared");
    return Product.insertMany(products);
  })
  .then(() => {
    console.log("✅ Products seeded successfully");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Seeding error:", err);
    mongoose.disconnect();
  });
