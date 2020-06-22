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
    sname: "",
    oname: "",
    gender: "",
    dsp: "",
    num: "",
    email: "",
    pwrd: "",
    datas: this.props.userData //inputs values wrapper
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
  handleUSerSigUp = async e => {
    e.preventDefault();
    //declaring and assigning of variable
    let sname = this.state.sname;
    let oname = this.state.oname;
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
    if (sname === "") {
      alert("First name must not be left empty");
      this.refs.inputs.firstChild.parentNode.children.sname.focus();
      // return false;
    } else if (this.isNumeric(sname)) {
      alert("Number is not an option");
      this.refs.inputs.firstChild.parentNode.children.sname.focus();
      return false;
    } else if (this.isNumeric(oname)) {
      alert("Number is not an option");
      this.refs.inputs.firstChild.parentNode.children.oname.focus();
      return false;
    } else if (oname === "") {
      alert("othername must not be left empty");
      this.refs.inputs.firstChild.parentNode.children.oname.focus();
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
      sname,
      oname,
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

    const fetchOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObject)
    };
    this.refs.form.reset(); //reset form on submit
    alert("sign up successfully");
    this.props.signin(); //routing to signin page on componentdid update
    await fetch("http://localhost:4000/", fetchOptions).catch(err =>
      console.error(err)
    );
  };

  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {
  //   //setting the user datas to local storage on componentdidupdate and route to the sign in page
  //   if (prevState.datas.length !== this.state.datas.length) {
  //     // if (localStorage.getItem("userDatas") === null) {
  //     //   localStorage.setItem("userDatas", JSON.stringify(this.state.datas));
  //     // } else {
  //     //   let storageData = JSON.parse(localStorage.getItem("userDatas"));
  //     //   for (let userObject of this.state.datas) {
  //     //     storageData.push(userObject);
  //     //   }
  //     //   localStorage.setItem("userDatas", JSON.stringify(storageData));
  //     // }
  //     // this.props.signin(); //routing to signin page on componentdid update
  //   }
  // }
  render() {
    const { input, button, signUpForm } = SignUpStyles; //destructured styles from the style.module

    return (
      <form ref="form" onSubmit={this.handleUSerSigUp} className={signUpForm}>
        <div ref="inputs">
          <CustomInput
            type={"text"}
            name={"sname"}
            placeholder={"surname"}
            className={input}
            onChange={this.handleChange}
            value={this.state.sname}
            isRequired={true}
            color={"black"}
          />
          <br />
          <CustomInput
            type={"text"}
            name={"oname"}
            placeholder={"other name"}
            className={input}
            value={this.state.oname}
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
