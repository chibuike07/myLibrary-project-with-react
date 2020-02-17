import React from "react";
import "./Register_css/SignUp.css";

class Signup extends React.Component {
  state = {
    userData: [],
    img: [],
    borrowedBooks: [],
    reserveBook: [],
    id: []
  };

  isNumeric = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  handleUSerSigUp = e => {
    e.preventDefault();
    let fname = this.refs.fname.value;
    let lname = this.refs.lname.value;
    let gender = this.refs.gender.value;
    let dsp = this.refs.dsp.value;
    let num = this.refs.num.value;
    let email = this.refs.email.value;
    let pwrd = this.refs.pwrd.value;
    let img = this.state.img;
    let borrowedBooks = this.state.borrowedBooks;
    let reserveBook = this.state.reserveBook;
    let id = this.state.id;
    if (fname === "") {
      alert("First name must not be left empty");
      this.refs.fname.focus();
      return false;
    } else if (this.isNumeric(fname)) {
      alert("Number is not an option");
      this.refs.fname.focus();
      return false;
    } else if (this.isNumeric(lname)) {
      alert("Number is not an option");
      this.refs.lname.focus();
      return false;
    } else if (lname === "") {
      alert("Last name must not be left empty");
      this.refs.lname.focus();
      return false;
    } else if (gender === "") {
      alert("Gender must not be left empty");
      this.refs.gender.focus();
      return false;
    } else if (this.isNumeric(gender)) {
      alert("Number is not an option");
      this.refs.gender.focus();
      return false;
    } else if (dsp === "") {
      alert("Displine  must not be left empty");
      this.refs.dsp.focus();
      return false;
    } else if (this.isNumeric(dsp)) {
      alert("Numbers is not an option");
      this.refs.dsp.focus();
      return false;
    } else if (num === "") {
      alert("Number must not be left empty");
      this.refs.num.focus();
      return false;
    } else if (email === "") {
      alert("Email must not be left empty");
      this.refs.email.focus();
      return false;
    } else if (!email.includes("@")) {
      alert("input a valid email");
      this.refs.email.focus();
      return false;
    } else if (pwrd === "") {
      alert("Password must not be left empty");
      this.refs.pwrd.focus();
      return false;
    } else if (pwrd.length < 8) {
      alert("Password must not be less 8 characters");
      this.refs.pwrd.focus();
      return false;
    }
    this.setState({
      userData: this.state.userData.concat({
        fname,
        lname,
        gender,
        dsp,
        num,
        email,
        pwrd,
        img,
        borrowedBooks,
        reserveBook,
        id
      })
    });
    this.refs.form.reset();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userData.length !== this.state.userData.length) {
      const storage = JSON.stringify(this.state.userData);
      localStorage.setItem("userDatas", storage);
      console.log(JSON.parse(localStorage.getItem("userDatas")));
      this.props.signin();
    }
  }

  render() {
    console.log(this.state.userData);
    return (
      <form ref="form">
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
        <button onClick={this.handleUSerSigUp} name="signup">
          Register
        </button>
      </form>
    );
  }
}

export default Signup;
