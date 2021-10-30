require("dotenv").config();
var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "hacknitr",
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;
