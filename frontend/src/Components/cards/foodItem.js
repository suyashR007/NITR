import React from "react";
import { Link } from "react-router-dom";
import "./explore.css";

const FoodItem = (dish) => {
  console.log(dish);
  const url = `display/${dish.dish._id}`;
  return (
    <div className="main_card_body">
      {dish.dish.image.map((image, index) => {
        return (
          <div key={index} className="explorecardimg">
            <img src={image.url} alt="dishimage" />
          </div>
        );
      })}

      <div className="dishtitle">
        <p>{dish.dish.title}</p>
      </div>
      <div className="read_more_but">
        <Link to={url}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default FoodItem;
