import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Styles2 from "./index.module.css";
import Inputsection from "../components/inputsection";
import Students from "../components/Students";
import SingleStudent from "../components/subComponents/SingleStudent";
import PresentStudent from "../components/subComponents/PresentStudent";
import AbsentStudent from "../components/subComponents/AbsentStudent";

export default function Home() {
  const [allStudents, setAllStudents] = useState([]);
  const [presentStudents, setPresentStudents] = useState([]);
  const [absentStudents, setAbsentStudents] = useState([]);
  const [edit, setEdit] = useState(false)

  const [name, setName] = useState();
  const [roll, setRoll] = useState();

  const nameChangeHandler = (e) => {
    const iName = e.target.value;
    setName(iName);
  };

  const rollChangeHandler = (e) => {
    const iRoll = e.target.value;
    setRoll(iRoll);
  };

  const addStudentHandler = () => {

    if(name == "" || roll == ""){
      alert("Please enter right value");
      return;
    }

    let allStudent = allStudents;

    const findStudent = allStudent.find((student) => student.roll == roll);
    const findpresent = presentStudents.find((student) => student.roll == roll);
    const findAbsent = absentStudents.find((student) => student.roll == roll);

    if (findStudent || findpresent || findAbsent) {
      alert("This roll is exist");
      return;
    } else {
      allStudent.push({ name: name, roll: roll });
      setAllStudents(allStudent);

      setName("");
      setRoll("");
    }

    return
  };

  // -------------------------------

  const deleteStudent = (roll) => {
    const allStudent = allStudents;
    const updateStudent = allStudent.filter((student) => {
      return student.roll != roll;
    });

    setAllStudents(updateStudent);
  };

  const sendToPresent = (roll,role) => {
    const allStudent = allStudents;
    let presentStudent = presentStudents;
    let absentStudent = absentStudents;

    const findStudent = allStudent.find((student) => student.roll == roll);

    // console.log(findStudent)

    const filteredStudents = allStudent.filter(
      (student) => student.roll != roll
    );

    setAllStudents(filteredStudents);

    if(role === "present"){
      presentStudent.push(findStudent)
      setPresentStudents(presentStudent);

      return;
    }
    if(role === "absent"){
      absentStudent.push(findStudent)
      setAbsentStudents(absentStudent)

      return;
    }

    return;
 
  };

  // ----------------------------------------------------

  const changePresent = (iroll, role) =>{
    let presentStudent = presentStudents;
    let absentStudent = absentStudents;

    if(role === "present"){
      const findPresent = presentStudents.find(student =>student.roll == iroll);
      const filterPresent = presentStudents.filter(student => student.roll != iroll);
      absentStudent.push(findPresent);
      setAbsentStudents(absentStudent);
      setPresentStudents(filterPresent)

      return
    }

    if(role === "absent"){
      const findAbsent = absentStudents.find(student =>student.roll == iroll);
      const filterAbsent = absentStudents.filter(student => student.roll != iroll);
      presentStudent.push(findAbsent);
      setPresentStudents(presentStudent);
      setAbsentStudents(filterAbsent)
    }

  }


  // --------------------------------------------------------

  const sendToEdit =(roll)=>{
    const findStudent = allStudents.find(student => student.roll == roll)

    setName(findStudent.name)
    setRoll(findStudent.roll)
    setEdit(true)

  }

  const updateStudent = ()=>{

    if(name == "" ){
      alert("Please enter right value");
      return;
    }

    let allStudent = allStudents;

    const index = allStudents.findIndex((student) => student.roll == roll);
    
    allStudent.splice(index,1,{name:name, roll:roll})

    setName("");
    setRoll("");
    setEdit(false)
  }


  // console.log("Absent students : ", absentStudents);
  // console.log("edit : ", edit);

  return (
    <div className={styles.container}>
      <h1 className={Styles2.heading}>
        STUDENT PRESENT ABSENT MANGED APPLICATION
      </h1>

      <Inputsection
        name={name}
        roll={roll}
        nameChangeHandler={nameChangeHandler}
        rollChangeHandler={rollChangeHandler}
        addStudent={addStudentHandler}
        edit={edit}
        updateStudent={updateStudent}
      />

      <div className={Styles2.SectionContainer}>
        <div className={Styles2.SectionBlock}>
          <Students heading="All Students">
            {allStudents &&
              allStudents.map((student) => {
                return (
                  <SingleStudent
                    name={student.name}
                    roll={student.roll}
                    deleteStudent={deleteStudent}
                    sendPresentOrAbsent={sendToPresent}
                    sendToEdit={sendToEdit}
                    edit={edit}
                  />
                );
              })}
          </Students>
          <Students heading="Present Students">
            {presentStudents &&
              presentStudents.map((student) => {
                return (
                  <PresentStudent changePresent={changePresent} name={student && student.name} roll={student && student.roll} />
                );
              })}
          </Students>
          <Students heading="Absent Students">
              {absentStudents && absentStudents.map(student=>{
               return <AbsentStudent changePresent={changePresent} name={student && student.name} roll={student && student.roll} />
              })}

            {/* <AbsentStudent /> */}
          </Students>
          {/* <PresentStudents />
          <AbsentStudent /> */}
        </div>
      </div>
    </div>
  );
}
