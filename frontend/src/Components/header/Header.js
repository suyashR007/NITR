import React from "react";

import { isAutheticated, signout } from "../../Pages/helper/authhelper";
import "./header.css";
import headCom from "../../Images/headcomponent.png";

const Header = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="header">
        <nav className="navbar">
          <div className="brand">
            <a href="/">
              <img src={headCom} className="headcom" alt="#" />
            </a>
          </div>
          <div className="navigation">
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="/explore">Explore</a>
            </div>
            <div>
              <a href="/about-us">About Us</a>
            </div>
          </div>
          <div className="account">
            {!isAutheticated() && (
              <>
                <div>
                  <a href="/signin">Signin</a>
                </div>
                <div>
                  <a href="/signup">Signup</a>
                </div>
              </>
            )}
            {isAutheticated() && (
              <div>
                <span
                  onClick={() => {
                    signout(() => {
                      refreshPage();
                    });
                  }}
                >
                  Signout
                </span>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
