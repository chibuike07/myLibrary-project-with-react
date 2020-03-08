import React from "react";
import "./Register_css/SignIn.css";
class SignIn extends React.Component {
  handleLogInForm = e => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.pwrd.value;
    let userInformation = JSON.parse(localStorage.getItem("userDatas"));
    let userNames;
    if (email === "") {
      alert("email must not be left empty");
      this.refs.email.focus();
      return;
    } else if (!email.includes("@" && ".")) {
      alert(`@ or . missing`);
      this.refs.email.focus();
      return;
    } else if (password === "") {
      alert("password must not be left empty");
      this.refs.pwrd.focus();
      return;
    } else if (password.length < 8) {
      alert(`password must be less than eight`);
      this.refs.pwrd.focus();
      return;
    }
    let userObjects = userInformation.filter(user => {
      return user.email.includes(email) && user.pwrd.includes(password);
    });
    // console.log(userObjects);

    if (userObjects === "" || userObjects == false) {
      alert("Email or Password incorrect");
      return;
    } else {
      // alert("true");
      for (let fullName of userObjects) {
        if (fullName) {
          userNames = `${fullName.fname} ${fullName.lname}`;
        }
      }
      console.log(userNames);
      localStorage.setItem("loggerName", JSON.stringify(userNames));
      window.location.replace("/home");
      //location.href = "link.html?userNames=" + userNames;
    }
  };
  render() {
    return (
      <form>
        <div>
          {/* has an id of signinDisplay */}
          <input type="email" name="email" placeholder="Email" ref="email" />
          <br />
          <input
            type="password"
            name="pwrd"
            placeholder="Password"
            ref="pwrd"
          />
        </div>
        <div>
          {/* the button have id of log */}
          <button onClick={this.handleLogInForm} name="Login">
            log in
          </button>
        </div>
      </form>
    );
  }
}

export default SignIn;
