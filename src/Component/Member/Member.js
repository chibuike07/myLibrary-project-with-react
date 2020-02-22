import React from "react";
import { useState, useEffect } from "react";
const MembersPage = () => {
  const [member, setMember] = useState([]);
  useEffect(() => {
    const fetchStorageDatas = () => {
      const userData = JSON.parse(localStorage.getItem("userDatas"));
      setMember(userData);
    };
    fetchStorageDatas();
  }, []);

  return (
    <div>
      <ul>
        {member.map((data, index) => (
          <li key={index}>
            {data.fname} {data.lname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersPage;
