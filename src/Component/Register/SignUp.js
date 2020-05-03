import React from "react";
import SignUpStyles from "./Register_css/SignUp.module.css";
import Button from "../Reuseable.component/Button.component/Button";
import CustomInput from "../Reuseable.component/Input.component/Input";

//
class Signup extends React.Component {
  //function for SignUp users
  state = {
    //setting the initial values to the state
    img: [],
    borrowedBooks: [],
    reserveBook: [],
    id: [],
    fname: "",
    lname: "",
    gender: "",
    dsp: "",
    num: "",
    email: "",
    pwrd: "",
    datas: [] //inputs values wrapper
  };
  isNumeric = n => {
    //function that checks for numbers
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  handleChange = ({ target }) => {
    //function to handle input value onchange
    this.setState(prev => ({
      ...prev,
      [target.name]: target.value
    }));
  };
  handleUSerSigUp = e => {
    e.preventDefault();
    //declaring and assigning of variable
    let fname = this.state.fname;
    let lname = this.state.lname;
    let gender = this.state.gender;
    let dsp = this.state.dsp;
    let num = this.state.num;
    let email = this.state.email;
    let pwrd = this.state.pwrd;
    let img = this.state.img;
    let borrowedBooks = this.state.borrowedBooks;
    let reserveBook = this.state.reserveBook;
    let id = this.state.id;

    //conditionion the input value datas
    if (fname === "") {
      alert("First name must not be left empty");
      this.refs.inputs.firstChild.parentNode.children.fname.focus();
      // return false;
    } else if (this.isNumeric(fname)) {
      alert("Number is not an option");
      this.refs.inputs.firstChild.parentNode.children.fname.focus();
      return false;
    } else if (this.isNumeric(lname)) {
      alert("Number is not an option");
      this.refs.inputs.firstChild.parentNode.children.lname.focus();
      return false;
    } else if (lname === "") {
      alert("Last name must not be left empty");
      this.refs.inputs.firstChild.parentNode.children.lname.focus();
      return false;
    } else if (gender === "") {
      alert("Gender must not be left empty");
      this.refs.inputs.firstChild.parentNode.children.gender.focus();
      return false;
    } else if (this.isNumeric(gender)) {
      alert("Number is not an option");
      this.refs.inputs.firstChild.parentNode.children.gender.focus();
      return false;
    } else if (dsp === "") {
      alert("Displine  must not be left empty");
      this.refs.inputs.firstChild.parentNode.children.dsp.focus();
      return false;
    } else if (this.isNumeric(dsp)) {
      alert("Numbers is not an option");
      this.refs.inputs.firstChild.parentNode.children.dsp.focus();
      return false;
    } else if (num === "") {
      alert("Number must not be left empty");
      this.refs.inputs.firstChild.parentNode.children.num.focus();
      return false;
    } else if (email === "") {
      alert("Email must not be left empty");
      this.refs.inputs.firstChild.parentNode.children.email.focus();
      return false;
    } else if (!email.includes("@" && ".")) {
      alert(`@ or . missing`);
      this.refs.inputs.firstChild.parentNode.children.email.focus();
      return;
    } else if (pwrd === "") {
      alert("Password must not be left empty");
      this.refs.inputs.firstChild.parentNode.children.pwrd.focus();
      return false;
    } else if (pwrd.length < 8) {
      alert("Password must not be less 8 characters");
      this.refs.inputs.firstChild.parentNode.children.pwrd.focus();
      return false;
    }
    //adding the userInformations to an object
    let userObject = {
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
    };
    this.setState(prev => ({ datas: [...prev.datas, userObject] })); //setting the userInformation datas to the state
    this.refs.form.reset(); //reset form on submit
  };
  //setting the user datas to local storage on componentdidupdate and route to the sign in page
  componentDidUpdate(prevProps, prevState) {
    if (prevState.datas.length !== this.state.datas.length) {
      if (localStorage.getItem("userDatas") === null) {
        localStorage.setItem("userDatas", JSON.stringify(this.state.datas));
      } else {
        let storageData = JSON.parse(localStorage.getItem("userDatas"));
        for (let userObject of this.state.datas) {
          storageData.push(userObject);
        }
        localStorage.setItem("userDatas", JSON.stringify(storageData));
      }
      this.props.signin(); //routing to signin page on componentdid update
    }
  }
  render() {
    const { input, button, signUpForm } = SignUpStyles; //destructured styles from the style.module

    return (
      <form ref="form" onSubmit={this.handleUSerSigUp} className={signUpForm}>
        <div ref="inputs">
          <CustomInput
            type={"text"}
            name={"fname"}
            placeholder={"First name"}
            className={input}
            onChange={this.handleChange}
            value={this.state.fname}
            isRequired={true}
            color={"black"}
          />
          <br />
          <CustomInput
            type={"text"}
            name={"lname"}
            placeholder={"Last name"}
            className={input}
            value={this.state.lname}
            onChange={this.handleChange}
            isRequired={true}
          />
          <br />
          <CustomInput
            type={"text"}
            name={"gender"}
            placeholder={"Gender"}
            className={input}
            value={this.state.gender}
            onChange={this.handleChange}
            isRequired={true}
          />
          <br />
          <CustomInput
            type={"text"}
            name={"dsp"}
            placeholder={"Displine"}
            className={input}
            value={this.state.dsp}
            onChange={this.handleChange}
            isRequired={true}
          />
          <br />
          <CustomInput
            type={"number"}
            name={"num"}
            placeholder={"Number"}
            className={input}
            value={this.state.num}
            onChange={this.handleChange}
            isRequired={true}
          />
          <br />

          <CustomInput
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            className={input}
            value={this.state.email}
            onChange={this.handleChange}
            isRequired={true}
          />
          <br />
          <CustomInput
            type={"password"}
            name={"pwrd"}
            placeholder={"Password"}
            className={input}
            value={this.state.pwrd}
            onChange={this.handleChange}
            isRequired={true}
          />
        </div>
        <Button text={"Register"} name={"signup"} className={button} />
      </form>
    );
  }
}

export default Signup;
