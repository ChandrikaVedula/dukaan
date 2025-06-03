const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://chandrikavedula:waydukaan@cluster0.jekbbmp.mongodb.net/waydukaan", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Product Schema and Model
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

// Routes
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("🌐 Waydukaan backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
