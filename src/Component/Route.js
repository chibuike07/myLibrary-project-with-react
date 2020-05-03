import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterPage from "./Register/SigInSignUp";
import HomePage from "./HomePage/HomePage";
import BooksActivities from "./BookTrasction/Book_activities";
import MemberPage from "./Member/Member";
import Statistics from "./Statistics/Statistics";
import Community from "./Library_Community/community";
import NotFoundPage from "./NotFoundPage";
import Library from "./library/library";
// import DefaultHeader from "./DefaultHeader";
const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <DefaultHeader /> */}
        <Switch>
          <Route path="/" component={RegisterPage} exact />
          <Route path="/home" component={HomePage} exact />
          <Route path="/home/:members" component={MemberPage} exact />
          <Route path="/statistics" component={Statistics} exact />
          <Route
            path="/join the library community"
            component={Community}
            exact
          />
          <Route path="/library" component={Library} exact />
          <Route path="/book transaction" component={BooksActivities} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
