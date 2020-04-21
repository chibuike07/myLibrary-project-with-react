import React from "react";

class MembersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: []
    };
  }

  fetchStorageDatas = () => {
    let members = this.props.match.params.members;
    let emptyArr = [];
    if (members !== "") {
      const userData = JSON.parse(localStorage.getItem("userDatas"));
      for (let value of userData) {
        let result = `${value.fname} ${value.lname}`;
        emptyArr.push(result);
      }
    }
    this.setState({ member: emptyArr });
  };
  componentDidMount() {
    this.fetchStorageDatas();
  }
  render() {
    const users =
      this.state.member.length && this.state.member ? (
        <div>
          <ul>
            {this.state.member.map((users, index) => (
              <li key={index}>{users}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>no members yet</div>
      );
    return (
      <div>
        <h3>this is the member lists</h3>
        <div>{users}</div>
      </div>
    );
  }
}

export default MembersPage;
