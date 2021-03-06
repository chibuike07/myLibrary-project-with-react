import React from "react";
class MembersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: [],
      userDatas: []
    };
  }

  fetchStorageData = async () => {
    // fetching the data from the mongodb
    const fetchOptions = {
      method: "GET",
      redirect: "follow"
    };
    await fetch("http://localhost:4000/registered_members", fetchOptions)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({ userDatas: data }); //setting the userInformation datas to the state
      })
      .catch(err => console.error(err));
    this.fetchMember();
  };
  
  fetchMember = () => {
    // fetching the members
    let members = this.props.match.params.members;
    let emptyArr = [];
    // console.log();
    if (members !== "") {
      const userData = this.state.userDatas;
      for (let value of userData) {
        let result = `${value.sname} ${value.oname}`;
        emptyArr.push(result);
      }
    }
    this.setState({ member: emptyArr });
  };

  componentDidMount() {
    this.fetchStorageData();
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
