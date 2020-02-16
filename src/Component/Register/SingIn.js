import React from "react";
import "./SignIn.css";
const SignIn = () => {
  return (
    <form>
      <div id="signinDisplay">
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="pwrd" id="pwrd" placeholder="Password" />
      </div>
    </form>
  );
};
export default SignIn;
