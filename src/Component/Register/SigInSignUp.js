import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SingIn";
import UnichrisLogo from "../unichris logo.png";
import "./SignInSignUp.css";
const GetStarted = () => {
  return (
    <div className="get-started">
      <img src={UnichrisLogo} alt={UnichrisLogo} className="landin-log" />
      <br />
      <h2>welcome to christopher university</h2>
      <p>where excellence and education is at its peak</p>
    </div>
  );
};

class SignInSignUp extends Component {
  render() {
    return (
      <>
        <div className="signup">
          <GetStarted />
          <div className="cont">
            <form autoCapitalize="off" id="f">
              {/* <SignUp />
              <SignIn /> */}
            </form>
          </div>
        </div>

        <div className="regBut">
          <button onClick="loadSignUp()" className="reg" id="reg">
            sign up
          </button>
        </div>
        <div className="signin">
          <button onClick="sig()" name="signin" id="signin">
            Sign in
          </button>
        </div>
      </>
    );
  }
}

export default SignInSignUp;
