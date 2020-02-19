import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterPage from "./Register/SigInSignUp";
import HomePage from "./HomePage/HomePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={RegisterPage} exact />
        <Route path="/home" component={HomePage} exact />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
