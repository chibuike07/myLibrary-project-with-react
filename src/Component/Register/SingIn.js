import React from "react";
import "./Register_css/SignIn.css";

class SignIn extends React.Component {
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
          <button name="Login">log in</button>
        </div>
      </form>
    );
  }
}

export default SignIn;
