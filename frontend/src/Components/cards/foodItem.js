import React from "react";
import "./explore.css";

const FoodItem = (dish) => {
  console.log(dish);
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
        <a href="/display">
          <button>Read More</button>
        </a>
      </div>
    </div>
  );
};

export default FoodItem;
