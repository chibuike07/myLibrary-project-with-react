import React, { useState, useEffect } from "react";
const Statistics = props => {
  const [membersCount, setMemberCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [NotSchoolMembers, setNotSchoolMember] = useState(0);
  // const [vistedCount, setVisitedCount] = useState(0);

  const datas = () => {
    const fetchData = JSON.parse(localStorage.getItem("userDatas"));
    let studentCo = fetchData.filter(data => data.dsp === "student");
    let notStudent = fetchData.filter(
      value => value.dsp !== "student" && value.dsp !== "staff"
    );
    setNotSchoolMember(notStudent.length);
    setMemberCount(fetchData.length);
    setStudentCount(studentCo.length);
    // setVisitedCount(props.count);
  };
  useEffect(() => {
    datas();
  }, []);
  return (
    <>
      <div>memberCount : {membersCount}</div>
      <div> studentCount: {studentCount}</div>
      <div>NotSchoolMembers: {NotSchoolMembers}</div>
      {/* <div>vistedCo: {vistedCount}</div> */}
    </>
  );
};
export default Statistics;
