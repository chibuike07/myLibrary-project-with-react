import React from "react";
import "./Register_css/SignIn.css";
const SignIn = () => {
  return (
    <form>
      <div>
        {/* has an id of signinDisplay */}
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="password" name="pwrd" placeholder="Password" />
      </div>
      <div>
        {/* the button have id of log */}
        <button name="Login">log in</button>
      </div>
    </form>
  );
};
export default SignIn;
