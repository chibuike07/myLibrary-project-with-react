import React, { Component } from "react";
import BoxOne from "./FirstInput";
import BoxTwo from "./SecondInput";
import SearchBar from "./SearchInput";
import ButtonBox from "./ButtonBox";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Book_activitiesStyles from "./booktransaction_styles/Book_Activities.module.css";
class BooksActivities extends Component {
  state = {
    name: "",
    user_number: "",
    user_department: "",
    date: new Date().toLocaleDateString(),
    weekday: "",
    author: "",
    title: "",
    isbn: "",
    accession_number: "",
    issue_date: "",
    return_day: "",
    total_days: "",
    added_days: "",
    fine: "",
    tableBodyData: []
  };
  Day = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  handleDay = () => {
    this.setState({ weekday: this.Day[new Date().getDay()] });
  };

  handleDayDifferent = () => {
    if (this.state.issue_date !== "") {
      let res =
        new Date(this.state.return_day).getDate() -
        new Date(this.state.issue_date).getDate();
      this.setState({ total_days: Math.abs(res) });
    } else if (this.state.return_day === "") {
      this.setState({ total_days: parseInt(0) });
    }
    return;
  };
  handleChange = ({ target }) => {
    this.setState(prev => ({ ...prev, [target.name]: target.value }));
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.refs);
    this.handleAddToTable();
  };
  // this.handleAddToTable();
  handleAddToTable = () => {
    if (this.state.name === "") {
      this.refs.form[0].focus();
      return false;
    } else if (this.state.user_number === "") {
      this.refs.form[1].focus();
      return false;
    } else if (this.state.user_department === "") {
      this.refs.form[2].focus();
      return false;
    } else if (this.state.date === "") {
      this.refs.form[3].focus();
      return false;
    } else if (this.state.weekday === "") {
      this.refs.form[4].focus();
      return false;
    } else if (this.state.author === "") {
      this.refs.form[5].focus();
      return false;
    } else if (this.state.title === "") {
      this.refs.form[6].focus();
      return false;
    } else if (this.state.isbn === "") {
      this.refs.form[7].focus();
      return false;
    } else if (this.state.accession_number === "") {
      this.refs.form[8].focus();
      return false;
    } else if (this.state.issue_date === "") {
      this.refs.form[9].focus();
      return false;
    }
    this.setState(prevState => ({
      tableBodyData: [
        ...prevState.tableBodyData,
        {
          name: this.state.name,
          user_number: this.state.user_number,
          user_department: this.state.user_department,
          date: this.state.date,
          weekday: this.state.weekday,
          author: this.state.author,
          title: this.state.title,
          isbn: this.state.isbn,
          accession_number: this.state.accession_number,
          issue_date: this.state.issue_date,
          return_day: this.state.return_day,
          total_days: this.state.total_days,
          added_days: this.state.added_days,
          fine: this.state.fine
        }
      ]
    }));
  };

  componentDidMount() {
    this.handleDay();
    // this.handleTotalDay();
  }
  render() {
    const {
      table_container,
      manual,
      container,
      myForm,
      boxWrapper,
      table_wrapper
    } = Book_activitiesStyles;
    return (
      <div className={table_container}>
        <div className={manual}>
          <cite id="cite">goin here</cite>
        </div>
        <h1> Keep Record Of Your Charging And Discharging Of Collections</h1>

        <div className={container}>
          <form
            className={myForm}
            id="f"
            method="POST"
            autoComplete="off"
            ref="form"
            onSubmit={this.handleSubmit}
          >
            <BoxOne handleChange={this.handleChange} values={this.state} />
            <BoxTwo handleChange={this.handleChange} values={this.state} />
            {/* <button></button> */}
          </form>
          <div className={boxWrapper}>
            <ButtonBox
              handleAddToTable={this.handleAddToTable}
              handleDayDifferent={this.handleDayDifferent}
            />

            <SearchBar />
          </div>
        </div>

        <div className={table_wrapper}>
          <table ref="table" border="3">
            <TableHead />
            <TableBody values={this.state.tableBodyData} />
          </table>
        </div>
      </div>
    );
  }
}
export default BooksActivities;
