import React from "react";
import SignInStyles from "./Register_css/SignIn.module.css";
import Input from "../Reuseable.component/Input.component/Input";
import { withRouter } from "react-router-dom";
// import { InputRefs } from "../Reuseable.component/Input.component/Input";
import Button from "../Reuseable.component/Button.component/Button";

class SignIn extends React.Component {
  //declare a function SignIn
  state = {
    //setting input values to the state
    email: "",
    pwrd: "",
    datas: this.props.userData
  };
  handleChange = ({ target }) => {
    //function to handle input values onchange
    this.setState(prevState => ({ ...prevState, [target.name]: target.value })); //setting the input values to the state
  };
  handleLogInForm = e => {
    //function to handle user authentications
    e.preventDefault();
    let { history } = this.props; //destructured history object from this.props
    let refsEmailInput = this.refs.inputs.childNodes["0"]; //targeting email input element from this.refs
    let refsPasswordInput = this.refs.inputs.childNodes["2"]; //targeting password input element from this.refs
    //getting input values
    let email = this.state.email;
    let password = this.state.pwrd;
    let userInformation = this.state.datas; //getting the sign up members array
    let userNames;
    //conditionion the input values
    if (email === "") {
      alert("email must not be left empty");
      refsEmailInput.focus();
      return;
    } else if (!email.includes("@" && ".")) {
      alert(`@ or . missing`);
      // this.state.email.focus();
      return;
    } else if (password === "") {
      alert("password must not be left empty");
      refsPasswordInput.focus();
      return;
    } else if (password.length < 8) {
      alert(`password must be less than eight`);
      // this.state.pwrd.focus();
      return;
    }
    let userObjects = userInformation.filter(
      ({ email, pwrd }) => email.includes(email) && pwrd.includes(password) //getting object of the user that logged in
    );

    // console.log(userObjects);
    let userEmail = userObjects.map(({ email }) => email); //getting the email of the logged in user
    let userPassword = userObjects.map(({ pwrd }) => pwrd); //getting the password of the logged in user

    //comparing the user input values user authentication
    if (userEmail.includes(email) && userPassword.includes(password)) {
      alert("log in successful"); //alert if user is registered and getting the first name and last name
      for (let fullName of userObjects) {
        if (fullName) {
          userNames = `${fullName.sname} ${fullName.oname}`;
        }
      }
      sessionStorage.setItem("loggerName", JSON.stringify(userNames)); //setting the log in user name values to the session storage
      history.replace("/home"); //routing the logged in user to the home page
      // location.href = "link.html?userNames=" + userNames;
    } else {
      alert("Email or Password incorrect"); // alert if user input values data does not match any registered users data
      return;
    }
  };
  render() {
    const { signup, button, input_wrapper } = SignInStyles;
    return (
      <form onSubmit={this.handleLogInForm}>
        <div className={input_wrapper}>
          <div className={signup} ref="inputs">
            {/* has an id of signinDisplay */}
            <Input
              type={"email"}
              name={"email"}
              placeholder={"Email"}
              onChange={this.handleChange}
              value={this.state.email}
              // isRefs={"email"}
            />
            <br />
            <Input
              type={"password"}
              name={"pwrd"}
              placeholder={"Password"}
              // ref={"pwrd"}
              onChange={this.handleChange}
              value={this.state.pwrd}
            />
          </div>
        </div>
        <div>
          <Button name={"Login"} text={"Log in"} className={button} />
        </div>
      </form>
    );
  }
}

export default withRouter(SignIn); //wraped the SignIn function with the withRouter api to enable us use the router api;
