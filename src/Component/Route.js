import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterPage from "./Register/SigInSignUp";
import HomePage from "./HomePage/HomePage";
import MemberPage from "./Member/Member";
import Statistics from "./Statistics/Statistics";
import Community from "./Library_Community/community";
import NotFoundPage from "./NotFoundPage";
// import DefaultHeader from "./DefaultHeader";
const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <DefaultHeader /> */}
        <Switch>
          <Route path="/" component={RegisterPage} exact />
          <Route path="/home" component={HomePage} exact />
          <Route path="/home/member" component={MemberPage} exact />
          <Route path="/home/statistics" component={Statistics} exact />
          <Route path="/community" component={Community} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
