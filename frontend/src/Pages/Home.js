import React from "react";
import "./css/home.css";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import hero from "../Images/hero.png";

const Home = () => {
  const homePage = () => {
    return (
      <div className="home">
        <div className="herosection">
          <img src={hero} alt="hero" />
        </div>
        <div className="ourspecialty">
          <div className="whychooseus">
            <Zoom duration={1000}>
              <div className="headingborder">
                <h1>Why Choose Us?</h1>
              </div>
            </Zoom>
          </div>
          <div className="whychooseustext">
            <Zoom right duration={1500}>
              <p>
                Every week, our website is updated with new dishes, so our users
                doesn't need to repeat taste and they get new ideas along with
                ingredients and recipes to make their life
                <span>"TASTY LIFE"</span>
              </p>
            </Zoom>
          </div>
        </div>
        <div className="ourmotive">
          <div className="motiveexplain">
            <Zoom left duration={1500}>
              <p>
                Our main aim is to answer every house's question
                <span>
                  <b>"Aaj Khane Mein Kya Banaye"</b>
                </span>
                . We generate a weekly food plan for the user and the user will
                be notified through mail service regarding the day's cooking
                plan and the user can know the ingredients required for the dish
                and it's recipe.
              </p>
            </Zoom>
          </div>
          <div className="motiveheading">
            <Zoom duration={1000}>
              <div className="headingborder">
                <h1>Our Aim</h1>
              </div>
            </Zoom>
          </div>
        </div>
        <div className="joinus">
          <Flip bottom duration={2000}>
            <p>
              <a href="/signup">SIGNUP</a> today to make your weekly food plan
            </p>
          </Flip>
        </div>
      </div>
    );
  };

  return (
    <div>
      {Header()}
      {homePage()}
      {Footer()}
    </div>
  );
};

export default Home;
