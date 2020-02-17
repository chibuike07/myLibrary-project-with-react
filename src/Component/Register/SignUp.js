import React from "react";
import "./Register_css/SignUp.css";

class Signup extends React.Component {
  render() {
    return (
      <>
        <div className="hidden">
          <input
            type="text"
            name="fname"
            ref="fname"
            placeholder="First name"
          />
          <br />
          <input type="text" name="lname" ref="lname" placeholder="Last name" />
          <br />
          <input type="text" name="gender" ref="gender" placeholder="Gender" />
          <br />
          <input type="text" name="dsp" ref="dsp" placeholder="Displine" />
          <br />
          <input type="number" name="num" ref="num" placeholder="Number" />
          <br />
          <input type="email" name="email" ref="email" placeholder="Email" />
          <br />
          <input
            type="password"
            name="pwrd"
            ref="pwrd"
            placeholder="Password"
          />
        </div>
        <button name="signup" ref="sub">
          Register
        </button>
      </>
    );
  }
}

export default Signup;
