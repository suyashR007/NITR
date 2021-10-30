import React, { useState, useEffect } from "react";

import Header from "../header/Header";
import "./display.css";

import Footer from "../footer/Footer";
import { getDishById } from "../../Pages/helper/dishapicall";

const DisplayFood = ({ match }) => {
  const id = match.params.id;
  const [dish, setDish] = useState({});
  const [isBusy, setBusy] = useState(true);

  const categorycolor = (category) => {
    if (category == "veg") {
      return { color: "green" };
    } else {
      return { color: "red" };
    }
  };

  function fetchDish() {
    getDishById(id)
      .then((res) => {
        if (res.err) {
          console.log(res.err);
        } else {
          console.log(res.err);
          setDish(res);
          setBusy(false);
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setBusy(true);
    fetchDish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header />
      {isBusy ? (
        <div>Loading</div>
      ) : (
        <div className="hack_explore">
          {console.log("fodu")}
          <div className="main_ex_img">
            {dish.image.map((image, index) => {
              return (
                <div key={index} className="exp_img">
                  <img src={image.url} alt="#" className="expimg"></img>
                </div>
              );
            })}

            <div className="dish_name">
              <p>{dish.title}</p>
            </div>
            <div className="category">
              Category:
              <span style={categorycolor(dish.category)}>{dish.category}</span>
            </div>
          </div>
          <div className="dish_recipe_ingre">
            <div className="ingredients">
              <div className="ingre_title">
                <p>Ingredients</p>
              </div>
              <div className="ingre_content">
                {dish.ingredients.split("\n").map((c) => {
                  return <p> {c} </p>;
                })}
              </div>
            </div>
            <div className="recipe">
              <div className="recipe_title">
                <p>Recipe</p>
              </div>
              {dish.recipe.split("\n").map((c) => {
                return <p> {c} </p>;
              })}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DisplayFood;
