import React, { Component } from "react";
import BoxOne from "./FirstInput";
import BoxTwo from "./SecondInput";
import SearchBar from "./SearchInput";
import ButtonBox from "./ButtonBox";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Book_activitiesStyles from "./booktransaction_styles/Book_Activities.module.css";
import axios from "axios";
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
    issue_date: new Date().toLocaleDateString(),
    return_day: new Date().toLocaleDateString(),
    total_days: 0,
    added_days: 0,
    fine: 0,
    tableBodyData: [],
    signUpMembers: [],
    rowIndexHolder: "",
    search: "",
    saveCondition: false,
    _idHolder: "",
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

  handleChange = async ({ target }) => {
    this.setState(prev => ({ ...prev, [target.name]: target.value }));
  };
  handleAddToTable = async () => {
    const {
      name,
      user_number,
      user_department,
      date,
      weekday,
      author,
      title,
      isbn,
      accession_number,
      issue_date,
      return_day,
      fine,
      added_days,
      total_days
    } = this.state;
    // validating the form field
    if (name === "") {
      alert(`${this.refs.form[0].name} is required`);
      this.refs.form[0].focus();
      return false;
    } else if (user_number === "") {
      alert(`${this.refs.form[1].name} is required`);
      this.refs.form[1].focus();
      return false;
    } else if (user_department === "") {
      alert(`${this.refs.form[2].name} is required`);
      this.refs.form[2].focus();
      return false;
    } else if (date === "") {
      alert(`${this.refs.form[3].name} is required`);
      this.refs.form[3].focus();
      return false;
    } else if (weekday === "") {
      alert(`${this.refs.form[4].name} is required`);
      this.refs.form[4].focus();
      return false;
    } else if (author === "") {
      alert(`${this.refs.form[5].name} is required`);
      this.refs.form[5].focus();
      return false;
    } else if (title === "") {
      alert(`${this.refs.form[6].name} is required`);
      this.refs.form[6].focus();
      return false;
    } else if (isbn === "") {
      alert(`${this.refs.form[7].name} is required`);
      this.refs.form[7].focus();
      return false;
    } else if (accession_number === "") {
      alert(`${this.refs.form[8].name} is required`);
      this.refs.form[8].focus();
      return false;
    } else if (issue_date === "") {
      alert(`${this.refs.form[9].name} is required`);
      this.refs.form[9].focus();
      return false;
    }

    let formData = {
      name,
      user_number,
      user_department,
      date,
      weekday,
      author,
      title,
      isbn,
      accession_number,
      issue_date,
      return_day,
      added_days,
      total_days,
      fine
    };
    const { tableBodyData } = this.state;
    if (tableBodyData.length < 1) {
      console.log("prev state");
      try {
        console.log("added to the table");
        setTimeout(() => {
          alert("data has been saved successfully");
        }, 1000);
        await axios.post("http://localhost:4000/book_transaction", formData);
        this.setState({ saveCondition: false });

        //error handler
      } catch (error) {
        console.log("error", error);
      }
    } else {
      let borrowersNames = tableBodyData.map(({ name }) => name); //got the borrowers name
      if (borrowersNames.includes(name)) {
        //check of borrower already exist on the table
        alert(`${name} already exist on the table`); // pop out a messege
      } else {
        try {
          console.log("added to the table");
          setTimeout(() => {
            alert("data has been saved successfully");
          }, 1000);
          await axios.post("http://localhost:4000/book_transaction", formData);
          // this.setState({ saveCondition: false });

          //error handler
        } catch (error) {
          console.log("error", error);
        }

        if (this.state.tableBodyData + 1) {
          console.log("yes");
          this.setState({ saveCondition: true });
        }
      }
    }
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
      // this.handleAddedDay();
    } else if (this.state.return_day === "") {
      this.setState({ total_days: parseInt(0) });
    }
    return;
  };
  // handleAddedDay = () => {
  //   let { total_days } = this.state;
  //   if (total_days) {
  //     if (total_days > 7) {
  //       let res = parseFloat(total_days) - 7;
  //       this.setState(() => ({ added_days: res }));
  //       this.handleFine();
  //     } else {
  //       this.setState({ added_days: "0" });
  //     }
  //   }
  // };
  // handleFine = () => {
  //   let { added_days } = this.state;
  //   if (added_days) {
  //     if (added_days !== "0") {
  //       let fineToPay = parseFloat(added_days) * 100;
  //       this.setState({ fine: String(fineToPay) });
  //     } else if (added_days === "0") {
  //       this.setState({ fine: "0" });
  //     }
  //   }
  // };

  handleSave = () => {
    // //destructured table body data from the state
    // const { tableBodyData, saveCondition, signUpMembers, name } = this.state;
    // //check if the table data is empty
    // if (tableBodyData.length < 1) {
    //   console.log("prev state");
    // } else {
    //   if (saveCondition) {
    //     console.log(saveCondition);
    //     // let lasttransaction = tableBodyData.reduce((a, b) => b); //getting the last borrowed borrowed
    //     // let bookIdentity = tableBodyData.filter(books => books.name === name); //getting the book data that match the name of the borrower
    //     // let updatedBorrowedBooks = null; //setting variable that will hold the borrowed book
    //     // let memberthatBorrowedABook = signUpMembers.filter(user => {
    //     //   //getting the user datas that want to borrow a book
    //     //   let userObject =
    //     //     `${user.sname} ${user.oname}` === bookIdentity[0].name;
    //     //   return userObject;
    //     // });
    //     // console.log(memberthatBorrowedABook);
    //     // const {
    //     //   //destructuring the user data
    //     //   sname,
    //     //   oname,
    //     //   gender,
    //     //   dsp,
    //     //   email,
    //     //   pwrd,
    //     //   reserveBook,
    //     //   borrowedBooks,
    //     //   num,
    //     //   _id,
    //     //   bookId,
    //     //   img
    //     // } = memberthatBorrowedABook[0];
    //     // updatedBorrowedBooks = {
    //     //   //setting the updatedBorrowedBooks to an object
    //     //   sname,
    //     //   oname,
    //     //   gender,
    //     //   dsp,
    //     //   email,
    //     //   pwrd,
    //     //   reserveBook,
    //     //   borrowedBooks: [...borrowedBooks, ...bookIdentity], //push the borrowed book to the user borrowed book array
    //     //   num,
    //     //   _id,
    //     //   bookId,
    //     //   img
    //     // };
    //     // console.log(updatedBorrowedBooks);
    //     // console.log(bookIdentity);
    //     // let index = signUpMembers.findIndex(
    //     //   userIndex => userIndex === memberthatBorrowedABook[0]
    //     // );
    //     //set data to the local storage
    //     // try {
    //     //   console.log("added to the table");
    //     //   axios.post("http://localhost:4000/book_transaction", lasttransaction);
    //     //   this.setState({ saveCondition: false });
    //     //   // axios.put(
    //     //   //   `http://localhost:4000/registered_members/${this.state._idHolder}`,
    //     //   //   lasttransaction
    //     //   // );
    //     //   // if (localStorage.getItem("collection_date") === null) {
    //     //   //   localStorage.setItem(
    //     //   //     "collection_data",
    //     //   //     JSON.stringify(tableBodyData)
    //     //   //   );
    //     //   // } else {
    //     //   //   //get the storage data
    //     //   //   let storage = JSON.parse(localStorage.getItem("collection_date"));
    //     //   //   //add data to the existint local storage date
    //     //   //   storage.push(...tableBodyData);
    //     //   //   console.log(storage);
    //     //   //   localStorage.setItem("collection_data", JSON.stringify(storage));
    //     //   // }
    //     //   setTimeout(() => {
    //     //     alert("data has been saved successfully");
    //     //   }, 1000);
    //     //   //error handler
    //     // } catch (error) {
    //     //   console.log("error", error);
    //     // }
    //   }
    // }
  };

  handleReadDAta = async () => {
    //fetch data from locarage
    await axios.get("http://localhost:4000/books_transaction").then(res => {
      this.setState({ tableBodyData: res.data });
    });

    // if (localStorage.getItem("collection_data").length > 0) {
    //   console.log("not empty");
    // const storage = await JSON.parse(localStorage.getItem("collection_data"));
    // this.setState({ tableBodyData: storage });
    // } else {
    //   console.log("empty");
    // }
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
      _idHolder: row._id, //setting the click data id to the state
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
      added_days,
      _idHolder
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

        //getting the form values to update in the dataBase
        let updatedBookData = {
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
        };
        // updating the table body data
        axios.put(
          `http://localhost:4000/books_collection/${_idHolder}`,
          updatedBookData
        );
        console.log(this.state._idHolder);
        this.setState({ tableBodyData });
        setTimeout(() => {
          alert("updated successfully");
        }, 2000);
      }
      return;
    }
  };

  handleRemoveCollection = async () => {
    let { rowIndexHolder, tableBodyData, _idHolder } = this.state;
    if (rowIndexHolder) {
      let confirm = window.confirm("Are sure you want to delete this data");
      if (confirm === true) {
        let dataRemoved = tableBodyData.filter(
          (v, i) => i === rowIndexHolder - 1
        );
        let dataNotRemoved = tableBodyData.filter(
          (v, i) => i !== rowIndexHolder - 1
        );
        this.setState({ tableBodyData: dataNotRemoved });
        console.log(dataRemoved);
        console.log(_idHolder);
        await axios.delete(
          `http://localhost:4000/books_collection/${_idHolder}`,
          dataRemoved
        );
        // localStorage.setItem("collection_data", [...dataNotRemoved]);
        setTimeout(() => {
          alert("removed successfully");
        }, 1000);
      }
      return;
    }
  };
  async componentDidMount() {
    await axios.get("http://localhost:4000/registered_members").then(res => {
      console.log(res.data);
      this.setState({ signUpMembers: res.data });
    });
    //triggering functions on mount
    this.handleDay();
    this.handleReadDAta();
    if (this.state.tableBodyData.length) {
      this.setState({ saveCondition: true });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    //setting the return day to look out for the issue date and count from the date to current date
    const { issue_date, search, tableBodyData } = this.state;
    if (prevProps.tableBodyData !== tableBodyData) {
      this.handleReadDAta();
    }
    if (prevState.issue_date !== issue_date) {
      let currentDate = new Date().toLocaleDateString();
      this.setState({ return_day: currentDate });
      console.log(currentDate);
    }

    if (prevState.search.length !== search.length) {
      this.handleSearchName();
    }
  }

  render() {
    // console.log(this.state.saveCondition);
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
              // handleFine={this.handleFine}
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
