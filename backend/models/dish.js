var mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const dishSchema = new Schema({
  title: {
    type: String,
    //required: true
  },
  recipe: {
    type: String,
  },
  image: [
    {
      id: String,
      url: String,
      //required:true
    },
  ],
  likes: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["veg", "nonveg"],
  },
  ingredients: { type: String },
  schedule:{
    type: String,
    enum: ["breakfast","lunch","snacks","dinner"],
  }
});

module.exports = mongoose.model("Dish", dishSchema);
