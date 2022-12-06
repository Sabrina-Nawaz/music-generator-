// Import Models
const Track = require("./Track");
const Playlist = require("./Playlist");
const User = require("./User");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product, {
  through: "ProductTag",
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Tag, {
  through: "ProductTag",
  foreignKey: "product_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
