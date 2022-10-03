const Product = require("../models/productModel");

// Create product (admin)
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
};

// Get all products
exports.getAllProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
};

// Get product details
exports.getProductDetails = async (req, res, next) => {
  const { id } = req.params;

  let product = await Product.findById(id);

  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found!" });
  }

  res.status(200).json({ success: true, product });
};

// Product Update by id (admin)
exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;

  let product = await Product.findById(id);

  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found!" });
  }
  product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

// Delete product by id (admin)
exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  let product = await Product.findById(id);

  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found!" });
  }

  product.remove();

  res
    .status(200)
    .json({ success: true, message: "Product deleted successfully." });
};
