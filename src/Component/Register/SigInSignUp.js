import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SingIn";
import UnichrisLogo from "../unichris logo.png";
import "./Register_css/SignInSignUp.css";
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
  state = {
    displayForm: false,
    displaySignUpBut: true,
    displaySignInBut: false,
    displaySignInBut_bt: true
  };

  handleSignUpClick = () => {
    this.setState({
      displayForm: !this.state.displayForm,
      displaySignUpBut: !this.state.displaySignUpBut,
      displaySignInBut_bt: !this.state.displaySignInBut_bt
    });
  };
  handleSignInClick = () => {
    this.setState({
      displaySignInBut: !this.state.displaySignInBut,
      displaySignInBut_bt: !this.state.displaySignInBut_bt,
      displaySignUpBut: !this.state.displaySignUpBut
    });
  };
  handleDisplaySignInOnSignUpClick = () => {
    this.setState({
      displayForm: !this.state.displayForm,
      displaySignInBut: !this.state.displaySignInBut,
      displaySignInBut_bt: this.state.displaySignInBut_bt,
      displaySignUpBut: this.state.displaySignUpBut
    });
  };
  render() {
    return (
      <>
        <div className="signup">
          <GetStarted />
          <div className="cont">
            {this.state.displayForm && (
              <SignUp signin={this.handleDisplaySignInOnSignUpClick} />
            )}
            {this.state.displaySignInBut && <SignIn />}
          </div>
        </div>

        {this.state.displaySignInBut_bt && (
          <div className="signin">
            {/* this button have a signin id */}
            <button onClick={this.handleSignInClick} name="signin">
              sign in
            </button>
          </div>
        )}
        {this.state.displaySignUpBut && (
          <div className="regBut">
            {/* have an id of reg */}
            <button onClick={this.handleSignUpClick} className="reg">
              sign up
            </button>
          </div>
        )}
      </>
    );
  }
}

export default SignInSignUp;
