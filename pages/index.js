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
  const [absentStudents, setAbsentStudents] = useState([])

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

  const addStudentHandler = ()=>{
    let allStudent = allStudents 

    const findStudent= allStudent.find(student=> student.roll == roll)

    if(findStudent){
      alert("This roll is exist")
    }else{
      allStudent.push({name:name, roll:roll});
      setAbsentStudents(allStudent);
  
      setName("");
      setRoll("")
    }


  }

   console.log(allStudents)

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
        addStudent = {addStudentHandler}
      />

      <div className={Styles2.SectionContainer}>
        <div className={Styles2.SectionBlock}>
          <Students heading="All Students">
            {allStudents && allStudents.map(student=>{
              return <SingleStudent name={student.name} roll={student.roll}/>
            })}
            
          </Students>
          <Students heading="Present Students">
            <PresentStudent />
          </Students>
          <Students heading="Absent Students">
            <AbsentStudent />
          </Students>
          {/* <PresentStudents />
          <AbsentStudent /> */}
        </div>
      </div>
    </div>
  );
}
