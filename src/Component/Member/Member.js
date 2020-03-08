import React from "react";
import { useState, useEffect } from "react";
const MembersPage = props => {
  // console.log(props);
  const [member, setMember] = useState([]);

  const fetchStorageDatas = () => {
    let members = props.match.params.members;
    const userData = JSON.parse(localStorage.getItem("userDatas"));
    for (let values of userData) {
      if (values.fname + " " + values.lname.includes(members)) {
        console.log(values);
        setMember(values);
      }
    }
  };
  useEffect(() => {
    fetchStorageDatas();
  }, []);
  console.log(member);
  return (
    <div>
      <h3>this is the member lists</h3>
      <ul>
        {/* {member.map((users, index) => (
          <li key={index}>{users}</li>
        ))} */}
      </ul>
      {member}
    </div>
  );
};

export default MembersPage;
