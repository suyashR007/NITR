import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OtpVerification from "./Pages/OtpVerification";

import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

import Home from "./Pages/Home";

import explore from "./Components/cards/explore";
import DisplayFood from "./Components/displayCards/display";
import AboutUs from "./Pages/AboutUs";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route
          path="/otpverification/:email"
          exact
          component={OtpVerification}
        />
        <Route path="/explore" exact component={explore} />
        <Route path="/display/:id" exact component={DisplayFood} />
        <Route path="/about-us" exact component={AboutUs} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
