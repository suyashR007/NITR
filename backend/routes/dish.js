var express = require("express");
var router = express.Router();
const {
  createDish,
  deleteDish,
  updateDish,
  getAllDishes,
  getDish,
  getDishById,
} = require("../controllers/dish");

//add dish
router.post("/dish/create", createDish);
//delete dish
router.delete("/dish/delete", deleteDish);
//update dish
router.post("/update", updateDish);
router.get("/dish/getAll", getAllDishes);
//all of params
router.param("dishId", getDishById);
//find product by id
router.get("/dish/:dishId", getDish);

module.exports = router;
