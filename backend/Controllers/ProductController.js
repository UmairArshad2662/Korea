const ProductModel = require("../Models/Product");
const MerchantModel = require("../Models/Merchant"); // Make sure to import UserModel

// Add a product
const addProduct = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("User:", req.user);

    const {
      campaignName,
      isVisitOrShip,
      location,
      checkDay,
      availableTime,
      numberOfPeople,
      image,
      textArea1,
      textArea2,
      textArea3,
      textArea4,
      textArea5,
    } = req.body;

    // Fetch the user to get the email
    const user = await MerchantModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const product = new ProductModel({
      userId: req.user._id,
      email: user.email,
      campaignName,
      isVisitOrShip,
      location,
      checkDay,
      availableTime,
      numberOfPeople,
      image,
      textArea1,
      textArea2,
      textArea3,
      textArea4,
      textArea5,
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    console.error("Error adding product:", err);
    res
      .status(500)
      .json({ message: "Error adding product", error: err.message });
  }
};

// Get all products (only the user's products)
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({ userId: req.user._id });
    res.status(200).json(products);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: err.message });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: err.message });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  try {
    const {
      campaignName,
      isVisitOrShip,
      channel,
      location,
      checkDay,
      availableTime,
      numberOfPeople,
      image,
      textArea1,
      textArea2,
      textArea3,
      textArea4,
      textArea5,
    } = req.body;

    const product = await ProductModel.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      {
        campaignName,
        isVisitOrShip,
        channel,
        location,
        checkDay,
        availableTime,
        numberOfPeople,
        image,
        textArea1,
        textArea2,
        textArea3,
        textArea4,
        textArea5,
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating product", error: err.message });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const product = await ProductModel.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: err.message });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
