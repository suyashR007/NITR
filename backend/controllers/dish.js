require("dotenv").config();
const Dish = require("../models/dish");
const formidable = require("formidable");
var cloudinary = require("../utils/cloudinary_config");

const cloudStorage = require("../utils/cloudinary_service");

//add product
exports.createDish = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.multiples = true;

  const listOfImages = [];

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.json(400).json({
        error: err,
      });
    }
    //populate dish based on fields from form-data
    const dish = new Dish(fields);

    console.log(fields);
    console.log(process.env.API_KEY, process.env.API_SECRET);

    if (files.image) {
      if (files.image.size > 2097152) {
        //2mb
        return res.status(400).json({
          error: "File size too Big",
        });
      }
      // for some reason if single image is passed, it is being sent as object
      // and array if multiple images
      // this connverts if its not an array
      let imageArray = files.image;

      if (!Array.isArray(files.image)) {
        imageArray = [files.image];
      }

      for (var i = 0; i < imageArray.length; i++) {
        const result = await cloudStorage(imageArray[i].path);

        listOfImages.push({
          id: result.id,
          url: result.url,
        });
      }
      dish.image = listOfImages;
    }
    console.log(dish);

    //save to the DB
    dish.save((err, dish) => {
      if (err) {
        res.status(400).json({
          error: "Saving dish in DB failed",
        });
      }
      res.json(dish);
    });
  });
};

//delete dish
exports.deleteDish = (req, res) => {
  Dish.findOneAndDelete(req.body.id).exec((err, dish) => {
    if (err) {
      return res.status(400).json({ error: "Dish not found" });
    }
    res.json(dish);
  });
};

//update dish
exports.updateDish = (req, res) => {
  const id = req.body.id;
  const newDish = req.body.newDish;

  Dish.findOneAndUpdate(id, newDish, {
    new: true,
  })
    .then((dish) => {
      res.send(dish);
    })
    .catch((err) => {
      res.status(400).json({ error: "dish not found" });
    });
};

exports.getAllDishes = (req, res) => {
  Dish.find({})
    .select("-photo")
    .exec((err, dishes) => {
      if (err) {
        return res.status(400).json({
          error: `NO Dish FOUND ${err}`,
        });
      }
      res.json(dishes);
    });
};

exports.getDishById = (req, res, next, id) => {
  Dish.findById(id).exec((err, dish) => {
    if (err) {
      return res.status(400).json({
        error: "Dish not found",
      });
    }
    req.dish = dish;
    next();
  });
};

exports.getDish = (req, res) => {
  return res.json(req.dish);
};
