import React, { useState, useEffect } from "react";
import axios from "axios";
const Statistics = props => {
  const [membersCount, setMemberCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [NotSchoolMembers, setNotSchoolMember] = useState(0);
  const [vistedCount, setVisitedCount] = useState(0);

  const datas = () => {
    axios.get("http://localhost:4000/registered_members").then(res => {
      let studentCo = res.data.filter(data => data.dsp === "student");
      let notStudent = res.data.filter(
        value => value.dsp !== "student" && value.dsp !== "staff"
      );
      setNotSchoolMember(notStudent.length);
      setMemberCount(res.data.length);
      setStudentCount(studentCo.length);
    });
  };

  const visitedCount = () => {
    // axios.get("http://localhost:4000/registered_members").then (res => {
    // });
    const storage = JSON.parse(localStorage.getItem("visitedCount"));
    setVisitedCount(storage);
    console.log(storage);
  };
  useEffect(() => {
    datas();
    visitedCount();
  }, []);
  return (
    <>
      <div>memberCount : {membersCount}</div>
      <div> studentCount: {studentCount}</div>
      <div>NotSchoolMembers: {NotSchoolMembers}</div>
      <div>vistedCo: {vistedCount}</div>
    </>
  );
};
export default Statistics;
