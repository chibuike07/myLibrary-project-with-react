import React from "react";
import "./SignUp.css";
const Signup = () => {
  return (
    <>
      <form>
        <div className="hidden">
          <input type="text" name="fname" id="fname" placeholder="First name" />
          <br />
          <input type="text" name="lname" id="lname" placeholder="Last name" />
          <br />
          <input type="text" name="gender" id="gender" placeholder="Gender" />
          <br />
          <input type="text" name="dsp" id="dsp" placeholder="Displine" />
          <br />
          <input type="number" name="num" id="num" placeholder="Number" />
        </div>
      </form>
      <br />

      {/* <!-- <button>click</button> --> */}
    </>
  );
};
export default Signup;
