<<<<<<< HEAD
const fs = require("fs");
const csv = require("csvtojson");

const INPUT_CSV = "BigBasket Products.csv";
const OUTPUT_JSON = "products.json";

// Function to generate image URL using product name
function generateImageUrl(productName) {
  const query = encodeURIComponent(productName || "grocery");
  return `https://source.unsplash.com/featured/?${query}`;
}

csv()
  .fromFile(INPUT_CSV)
  .then((products) => {
    const enriched = products.map((p) => {
      return {
        name: p.product || "Unnamed Product",
        description: p.description || "No description available",
        price: parseFloat(p.price) || 0,
        category: p.category || "General",
        stockQty: Math.floor(Math.random() * 200),
        imageUrl: generateImageUrl(p.product)
      };
    });

    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(enriched, null, 2));
    console.log(`✅ Done! Saved to ${OUTPUT_JSON}`);
  })
  .catch((err) => {
    console.error("❌ Error reading CSV:", err);
  });
=======
const fs = require("fs");
const csv = require("csvtojson");

const INPUT_CSV = "BigBasket Products.csv";
const OUTPUT_JSON = "products.json";

// Function to generate image URL using product name
function generateImageUrl(productName) {
  const query = encodeURIComponent(productName || "grocery");
  return `https://source.unsplash.com/featured/?${query}`;
}

csv()
  .fromFile(INPUT_CSV)
  .then((products) => {
    const enriched = products.map((p) => {
      return {
        name: p.product || "Unnamed Product",
        description: p.description || "No description available",
        price: parseFloat(p.price) || 0,
        category: p.category || "General",
        stockQty: Math.floor(Math.random() * 200),
        imageUrl: generateImageUrl(p.product)
      };
    });

    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(enriched, null, 2));
    console.log(`✅ Done! Saved to ${OUTPUT_JSON}`);
  })
  .catch((err) => {
    console.error("❌ Error reading CSV:", err);
  });
>>>>>>> 38ca7b500b922434c2a4bcdfd5962604210c6d19
