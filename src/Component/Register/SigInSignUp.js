import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SingIn";
import UnichrisLogo from "../unichris logo.png";
import Statistics from "../Statistics/Statistics";
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

class RegisterPage extends Component {
  state = {
    displayForm: false,
    displaySignUpBut: true,
    displaySignInBut: false,
    displaySignInBut_bt: true,
    stat: true,
    count: 0
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
    if (localStorage.getItem("userDatas").length + 1) {
      this.setState({
        displayForm: !this.state.displayForm,
        displaySignInBut: !this.state.displaySignInBut,
        displaySignInBut_bt: this.state.displaySignInBut_bt,
        displaySignUpBut: this.state.displaySignUpBut
      });
    }
  };
  VistedCount = () => {
    this.setState({ count: this.state.count + 1 });
    let seTime = setTimeout(this.VistedCount, 5000);
    clearTimeout(seTime);
  };
  componentDidMount() {
    this.VistedCount();
  }

  render() {
    console.log(this.state.count);
    return (
      <div className="contaner">
        <div className="signup">
          <GetStarted />
          <div className="formCont">
            {this.state.displayForm && (
              <SignUp signin={this.handleDisplaySignInOnSignUpClick} />
            )}
            {this.state.displaySignInBut && <SignIn />}
          </div>
        </div>

        {this.state.displaySignInBut_bt && (
          <div className="signin">
            {/* this button have a signin id */}
            <button onClick={this.handleSignInClick}>sign in</button>
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
        {this.state.stat && <Statistics count={this.state.count} />}
      </div>
    );
  }
}

export default RegisterPage;
