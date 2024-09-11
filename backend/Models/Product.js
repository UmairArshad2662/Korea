const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  email: {
    type: String,  // Add this line
    required: true // Add this line
  },
  campaignName: {
    type: String,
    required: true
  },
  isVisitOrShip: {
    type: String,
    enum: ["Visit", "Ship"],
    required: true
  },
  
  location: {
    type: String,
    required: true
  },
  checkDay: {
    type: String,
    enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    required: true
  },
  availableTime: {
    type: String,
    required: true
  },
  numberOfPeople: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  textArea1: {
    type: String,
    required: true
  },
  textArea2: {
    type: String,
    required: true
  },
  textArea3: {
    type: String,
    required: true
  },
  textArea4: {
    type: String,
    required: true
  },
  textArea5: {
    type: String,
    required: true
  }
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;
