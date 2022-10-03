const Product = require("../models/productModel");

// create product (admin)
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
};

exports.getAllProducts = (req, res) => {
  res.status(200).json({ message: "Route is working fine." });
};
