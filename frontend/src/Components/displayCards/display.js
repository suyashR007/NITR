import React from "react";
// import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./display.css";
import expimg from "../../Images/foodimg.jpg";
import Footer from "../footer/Footer";

const displayFood = () => {
  return (
    <div>
      <Header />
      <div className="hack_explore">
        <div className="main_ex_img">
          <div className="exp_img">
            <img src={expimg} alt="#" className="expimg"></img>
          </div>
          <div className="dish_name">
            <p>Sladfeb hshnjhncscjknj cshzjbcdkbk</p>
          </div>
        </div>
        <div className="dish_recipe_ingre">
          <div className="ingredients">
            <div className="ingre_title">
              <p>Ingredients</p>
            </div>
            <div className="ingre_content">
              <p>1.cbsbchsbchsbchb</p>
              <p>2.scscdcdvfdvfvfv</p>
              <p>2.scscdcdvfdvfvfv</p>
              <p>2.scscdcdvfdvfvfv</p>
            </div>
          </div>
          <div className="recipe">
            <div className="recipe_title">
              <p>Recipe</p>
            </div>
            <p>
              scbsbcbsyhbcsbckschiushjjcjndujcnszujcnsiznjkxcnsuihnciudcs
              scsucnusnhkcjnskcnjksnc
              cscvvscvyhbschbnsjhcbshbncuhjsbchhbnshcbhisbcuhsbch
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default displayFood;
