import React from "react";
import "./css/AboutUs.css";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import nilesh from "../Images/user/nilesh.jpeg";
import harsh from "../Images/user/harsh.jpeg";
import suyash from "../Images/user/suyash.jpeg";
import adi from "../Images/user/adi.jpeg";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="AboutUs">
        <div className="our_goal">
          <h1>About Us</h1>
        </div>
        <div className="our_goal_2">
          <div className="our_goal_2_text">
            <font size="7">
              Our Goal is to Answer every Indian household question that is{" "}
              <br />
              <font size="8" className="mainmoto">
                "Aaj Khane mein Kya Banaye"
              </font>
            </font>
            <br />
            <br />
            <font>Now Whats Our Approach to Solve this problem:</font>
            <br />
            <font>
              With our Website we give our user a wide variety of dishes ,with
              its ingredients and recipes .<br />
            </font>
          </div>
        </div>
        <div className="team">
          <h1>Team Behind Foodies Calender</h1>
          <div className="teampanel">
            <div className="panelmember">
              <div className="memberimg">
                <img src={nilesh} alt="member" />
              </div>
              <p>Nileshkumar Aggarwal</p>
              <span>Team Leader</span>
              <div className="developingrole">Full-Stack Developer</div>
            </div>
            <div className="panelmember">
              <div className="memberimg">
                <img src={harsh} alt="member" />
              </div>
              <p>Harsh Gawas</p>
              <span>Team Member</span>
              <div className="developingrole">Full-Stack Developer</div>
            </div>
            <div className="panelmember">
              <div className="memberimg">
                <img src={suyash} alt="member" />
              </div>
              <p>Suyash Rane</p>
              <span>Team Member</span>
              <div className="developingrole">Database Manager</div>
            </div>
            <div className="panelmember">
              <div className="memberimg">
                <img src={adi} alt="member" />
              </div>
              <p>Aditya Vernekar</p>
              <span>Team Member</span>
              <div className="developingrole">Tester</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutUs;
