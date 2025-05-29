const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://chandrikavedula:waydukaan@cluster0.jekbbmp.mongodb.net/waydukaan")
  .then(() => {
    console.log("✅ MongoDB connected");
    return mongoose.connection.collection("products").deleteMany({});
  })
  .then(() => {
    console.log("🗑️ All products deleted");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Error:", err);
    mongoose.disconnect();
  });
