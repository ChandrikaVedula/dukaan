const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://chandrikavedula:waydukaan@cluster0.jekbbmp.mongodb.net/waydukaan")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Product Schema and Model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
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
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

// Routes
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("🌐 Waydukaan backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
