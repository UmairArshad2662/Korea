const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const MerchantRouter = require("./Routes/MerchantRouter");
const ProductRouter = require("./Routes/ProductRouter");


require("dotenv").config();
require("./Models/db");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/auth", AuthRouter);
app.use("/merchant", MerchantRouter);
app.use("/products", ProductRouter); // New Product routes

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
