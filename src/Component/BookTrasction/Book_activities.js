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
    tableBodyData: [],
    rowIndexHolder: "",
    search: "",
    day: [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ]
  };

  handleChange = ({ target }) => {
    this.setState(prev => ({ ...prev, [target.name]: target.value }));
  };
  handleAddToTable = () => {
    // validating the form field
    if (this.state.name === "") {
      alert(`${this.refs.form[0].name} is required`);
      this.refs.form[0].focus();
      return false;
    } else if (this.state.user_number === "") {
      alert(`${this.refs.form[1].name} is required`);
      this.refs.form[1].focus();
      return false;
    } else if (this.state.user_department === "") {
      alert(`${this.refs.form[2].name} is required`);
      this.refs.form[2].focus();
      return false;
    } else if (this.state.date === "") {
      alert(`${this.refs.form[3].name} is required`);
      this.refs.form[3].focus();
      return false;
    } else if (this.state.weekday === "") {
      alert(`${this.refs.form[4].name} is required`);
      this.refs.form[4].focus();
      return false;
    } else if (this.state.author === "") {
      alert(`${this.refs.form[5].name} is required`);
      this.refs.form[5].focus();
      return false;
    } else if (this.state.title === "") {
      alert(`${this.refs.form[6].name} is required`);
      this.refs.form[6].focus();
      return false;
    } else if (this.state.isbn === "") {
      alert(`${this.refs.form[7].name} is required`);
      this.refs.form[7].focus();
      return false;
    } else if (this.state.accession_number === "") {
      alert(`${this.refs.form[8].name} is required`);
      this.refs.form[8].focus();
      return false;
    } else if (this.state.issue_date === "") {
      alert(`${this.refs.form[9].name} is required`);
      this.refs.form[9].focus();
      return false;
    }
    let formData = {
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
    };
    //pushing the input values to the state
    this.setState({
      tableBodyData: this.state.tableBodyData.concat(formData)
    });
  };

  handleDay = () => {
    let { day } = this.state;
    this.setState({ weekday: day[new Date().getDay()] });
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
        this.handleFine();
      } else {
        this.setState({ added_days: "0" });
      }
    }
  };
  handleFine = () => {
    let { added_days } = this.state;
    if (added_days) {
      if (added_days !== "0") {
        let fineToPay = parseFloat(added_days) * 100;
        this.setState({ fine: String(fineToPay) });
      } else if (added_days === "0") {
        this.setState({ fine: "0" });
      }
    }
  };

  handleSave = () => {
    //destructured table body data from the state
    let { tableBodyData } = this.state;
    //check if the table data is empty
    if (tableBodyData.length < 1) {
      console.log("prev state");
    } else {
      //set data to the local storage
      try {
        if (localStorage.getItem("collection_date") === null) {
          localStorage.setItem(
            "collection_data",
            JSON.stringify(tableBodyData)
          );
        } else {
          //get the storage data

          let storage = JSON.parse(localStorage.getItem("collection_date"));
          //add data to the existint local storage date
          storage.push(...tableBodyData);
          console.log(storage);
          localStorage.setItem("collection_data", JSON.stringify(storage));
        }
        setTimeout(() => {
          alert("data has been saved successfully");
        }, 1000);
        //error handler
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  handleReadDAta = async () => {
    //fetch data from locarage
    if (localStorage.getItem("collection_data").length > 0) {
      console.log("not empty");
      const storage = await JSON.parse(localStorage.getItem("collection_data"));
      this.setState({ tableBodyData: storage });
    } else {
      console.log("empty");
    }
  };

  handleSearchName = () => {
    let { tableBodyData, search } = this.state;
    let foundSearch = tableBodyData.filter(v => {
      return v.name.includes(search);
    });
    this.setState({ tableBodyData: foundSearch });
    console.log(foundSearch);
  };

  handleTableClick = (row, rowIndex) => {
    //destructered the table row
    let {
      name,
      user_number,
      user_department,
      author,
      fine,
      date,
      isbn,
      issue_date,
      return_day,
      title,
      total_days,
      weekday,
      accession_number,
      added_days
    } = row;
    console.log(rowIndex);
    //seting the clicked row to the state to display in the form field
    this.setState({
      name,
      user_number,
      user_department,
      author,
      fine,
      date,
      isbn,
      issue_date,
      return_day,
      title,
      total_days,
      weekday,
      accession_number,
      added_days,
      rowIndexHolder: rowIndex + 1
    });
  };

  handleEdit = () => {
    // destructured the clicked row index,  the table body data and the input values from the state
    let {
      rowIndexHolder,
      tableBodyData,
      name,
      user_number,
      user_department,
      author,
      fine,
      date,
      isbn,
      issue_date,
      return_day,
      title,
      total_days,
      weekday,
      accession_number,
      added_days
    } = this.state;

    //check if there has been a click on any of the collections
    if (rowIndexHolder) {
      if (this.state.name === "") {
        alert(`${this.refs.form[0].name} is required`);
        this.refs.form[0].focus();
        return false;
      } else if (this.state.user_number === "") {
        alert(`${this.refs.form[1].name} is required`);
        this.refs.form[1].focus();
        return false;
      } else if (this.state.user_department === "") {
        alert(`${this.refs.form[2].name} is required`);
        this.refs.form[2].focus();
        return false;
      } else if (this.state.date === "") {
        alert(`${this.refs.form[3].name} is required`);
        this.refs.form[3].focus();
        return false;
      } else if (this.state.weekday === "") {
        alert(`${this.refs.form[4].name} is required`);
        this.refs.form[4].focus();
        return false;
      } else if (this.state.author === "") {
        alert(`${this.refs.form[5].name} is required`);
        this.refs.form[5].focus();
        return false;
      } else if (this.state.title === "") {
        alert(`${this.refs.form[6].name} is required`);
        this.refs.form[6].focus();
        return false;
      } else if (this.state.isbn === "") {
        alert(`${this.refs.form[7].name} is required`);
        this.refs.form[7].focus();
        return false;
      } else if (this.state.accession_number === "") {
        alert(`${this.refs.form[8].name} is required`);
        this.refs.form[8].focus();
        return false;
      } else if (this.state.issue_date === "") {
        alert(`${this.refs.form[9].name} is required`);
        this.refs.form[9].focus();
        return false;
      }
      let confirm = window.confirm("Are you done adjusting...");
      if (confirm === true) {
        // check if there was a click and if yes splice the table body data and update the particular row that was updated
        tableBodyData.splice(rowIndexHolder - 1, 1, {
          name,
          user_number,
          user_department,
          author,
          fine,
          date,
          isbn,
          issue_date,
          return_day,
          title,
          total_days,
          weekday,
          accession_number,
          added_days
        });
        // updating the table body data
        this.setState({ tableBodyData });
        setTimeout(() => {
          alert("updated successfully");
        }, 2000);
      }
      return;
    }
  };

  handleRemoveCollection = () => {
    let { rowIndexHolder, tableBodyData } = this.state;
    if (rowIndexHolder) {
      let confirm = window.confirm("Are sure you want to delete this data");
      if (confirm === true) {
        let dataNotRemoved = tableBodyData.filter(
          (v, i) => i !== rowIndexHolder - 1
        );
        this.setState({ tableBodyData: dataNotRemoved });
        localStorage.setItem("collection_data", [...dataNotRemoved]);
        setTimeout(() => {
          alert("removed successfully");
        }, 1000);
      }
      return;
    }
  };
  componentDidMount() {
    //triggering functions on mount
    this.handleDay();
    this.handleReadDAta();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search.length !== this.state.search.length) {
      this.handleSearchName();
    }
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
            <BoxOne handleChange={this.handleChange} state={this.state} />
            <BoxTwo
              handleChange={this.handleChange}
              state={this.state}
              handleFine={this.handleFine}
            />
            {/* <button></button> */}
          </form>
          <div className={boxWrapper}>
            <ButtonBox
              handleAddToTable={this.handleAddToTable}
              handleDayDifferent={this.handleDayDifferent}
              handleSave={this.handleSave}
              handleEdit={this.handleEdit}
              handleRemoveCollection={this.handleRemoveCollection}
            />
            <SearchBar handleChange={this.handleChange} state={this.state} />
          </div>
        </div>

        <div className={table_wrapper}>
          <table ref="table" border="3">
            <TableHead />
            <TableBody
              values={this.state.tableBodyData}
              handleTableRowClick={this.handleTableClick}
            />
          </table>
        </div>
      </div>
    );
  }
}
export default BooksActivities;
