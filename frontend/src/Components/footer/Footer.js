import React from "react";
import "./footer.css";
import twitter from "../../Images/brands/twitter.svg";
import instagram from "../../Images/brands/instagram.svg";
import github from "../../Images/brands/github.svg";
import Logo from "../../Images/LOGO.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="brandname">
        <img src={Logo} alt="#" className="Logo"></img>
      </div>

      <div className="services">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/about-us">About Us</a>
        </div>
        <div>
          <a href="/signup">Join Us</a>
        </div>
      </div>
      <div className="social">
        <a href="/">
          <button>
            <img src={github} alt="github" />
          </button>
        </a>
        <a href="/">
          <button>
            <img src={instagram} alt="instagram" />
          </button>
        </a>
        <a href="/">
          <button>
            <img src={twitter} alt="twitter" />
          </button>
        </a>
      </div>
      <div className="copyrights">
        <p>
          <span>© 2021 All rights reserved.</span> Foodies Calender Technologies
          Ltd.
        </p>
      </div>
    </div>
  );
}
