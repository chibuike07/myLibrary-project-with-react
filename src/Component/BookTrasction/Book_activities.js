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
    fine: "0",
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
      this.handleAddedDay();
    } else if (this.state.return_day === "") {
      this.setState({ total_days: parseInt(0) });
    }
    return;
  };
  handleAddedDay = () => {
    let { total_days } = this.state;
    if (total_days) {
      if (total_days > 7) {
        let res = parseFloat(total_days) - 7;
        this.setState(() => ({ added_days: res }));
        // this.handleFine();
      } else {
        this.setState({ added_days: "0" });
      }
    }
  };
  handleFine = () => {
    let { added_days } = this.state;

    if (added_days) {
      let res = parseFloat(added_days) * 100;
      this.setState({ fine: res });
    }
    console.log(this.refs.form[13]);
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

  handleReadDAta = () => {
    const storage = JSON.parse(localStorage.getItem("collection_data"));
    this.setState({ tableBodyData: storage });
  };
  handleSave = () => {
    console.log(this.state.tableBodyData);
    if (this.state.tableBodyData.length < 1) {
      console.log("prev state");
    } else {
      console.log(this.state.tableBodyData);
      try {
        if (localStorage.getItem("collection_date") === null) {
          localStorage.setItem(
            "collection_data",
            JSON.stringify(this.state.tableBodyData)
          );
        } else {
          let storage = JSON.parse(localStorage.getItem("collection_date"));
          storage.push(...this.state.tableBodyData);
          console.log(storage);
          // localStorage.setItem("collection_data", JSON.stringify(storage));
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  componentDidMount() {
    this.handleDay();
    this.handleReadDAta();

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
            <BoxTwo
              handleChange={this.handleChange}
              values={this.state}
              handleFine={this.handleFine}
            />
            {/* <button></button> */}
          </form>
          <div className={boxWrapper}>
            <ButtonBox
              handleAddToTable={this.handleAddToTable}
              handleDayDifferent={this.handleDayDifferent}
              handleSave={this.handleSave}
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
