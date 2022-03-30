import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Styles2 from "./index.module.css";
import Inputsection from "../components/Inputsection";
import Students from "../components/Students";
import SingleStudent from "../components/subComponents/SingleStudent";
import PresentStudent from "../components/subComponents/PresentStudent";
import AbsentStudent from "../components/subComponents/AbsentStudent";

export default function Home() {
  const [allStudents, setAllStudents] = useState([]);
  const [edit, setEdit] = useState(false);

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

  const addStudentHandler = (e) => {
    e.preventDefault();

    if (name == "" || name == undefined || roll == "" || roll ==undefined) {
      alert("Please enter right value");
      return;
    }

    let allStudent = allStudents;

    const findStudent = allStudent.find((student) => student.roll == roll);

    if (findStudent) {
      alert("This roll is exist");
      return;
    } else {
      allStudent.push({ name: name, roll: roll, attendance: null });

      setAllStudents(allStudent);
      localStorage.setItem("allStudents", JSON.stringify(allStudent));

      setName("");
      setRoll("");
    }
    return;
  };

  // -------------------------------

  const deleteStudent = (roll) => {

    let allStudent;

    allStudent = allStudents.filter((student) => student.roll != roll);

    setAllStudents(allStudent);

    localStorage.setItem("allStudents", JSON.stringify(allStudent || []));
  };

  // -----------------

  const sendToPresent = (roll, role) => {
    const allStudent = allStudents;

    let findStudent = allStudent.find((student) => student.roll == roll);
    findStudent.attendance = true;

    if (role === "present") {
      findStudent.attendance = "present";
    }
    if (role === "absent") {
      findStudent.attendance = "absent";
    }

    let filteredStudents = allStudent.filter((student) => student.roll != roll);
    filteredStudents.push(findStudent);
    setAllStudents(filteredStudents);

    localStorage.setItem("allStudents", JSON.stringify(allStudents));


    setName("");
    setRoll("");

    return;
  };

  // // ----------------------------------------------------

  const changePresent = (iroll, role) => {
  
    let findStudent = allStudents.find((student) => student.roll === iroll);

    if (role === "present") {
      findStudent.attendance = "absent";
    }

    if (role === "absent") {
      findStudent.attendance = "present";
    }

    let filteredStudent = allStudents.filter(student => student.roll != iroll)
    filteredStudent.push(findStudent)

    setAllStudents(filteredStudent);

    localStorage.setItem("allStudents", JSON.stringify(allStudents || []));

  };

  // --------------------------------------------------------

  const sendToEdit = (roll) => {
    const findStudent = allStudents.find((student) => student.roll == roll);

    setName(findStudent.name);
    setRoll(findStudent.roll);
    setEdit(true);
  };

  // --------------------------------------------------------

  const updateStudent = (e, roll) => {
    e.preventDefault();
    if (name == "") {
      alert("Please enter right value");
      return;
    }

    let allStudent = allStudents;
    const student = allStudents.find((student) => student.roll === roll);

    const index = allStudents.findIndex((student) => student.roll == roll);

    allStudent.splice(index, 1, {
      name: name,
      roll: roll,
      attendance: student.attendance,
    });

    setAllStudents(allStudent)

    localStorage.setItem("allStudents", JSON.stringify(allStudents));

    setName("");
    setRoll("");
    setEdit(false);
  };

  useEffect(() => {
    // Update the document title using the browser API
    const allStudent = JSON.parse(localStorage.getItem("allStudents"));
    setAllStudents(allStudent || []);
  }, []);

  console.log("all students is : ", allStudents);

  // -----------------PRESENT STUDENT RENDERED -------------------

  const pStudents = allStudents.filter(
    (student) => student.attendance === "present"
  );
  let pStudentsRendered;
  if (pStudents) {
    pStudentsRendered = pStudents.map((student) => {
      return (
        <PresentStudent
          key={student.roll}
          changePresent={changePresent}
          name={student && student.name}
          roll={student && student.roll}
        />
      );
    });
  }

  // -----------------ABSENT STUDENT RENDERED -------------------

  const aStudents = allStudents.filter(
    (student) => student.attendance === "absent"
  );
  let aStudentsRendered;
  if (aStudents) {
    aStudentsRendered = aStudents.map((student) => {
      return (
        <AbsentStudent
          key={student.roll}
          changePresent={changePresent}
          name={student && student.name}
          roll={student && student.roll}
        />
      );
    });
  }

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
                    key={student.roll}
                    name={student.name}
                    roll={student.roll}
                    attendance={student.attendance}
                    deleteStudent={deleteStudent}
                    sendPresentOrAbsent={sendToPresent}
                    sendToEdit={sendToEdit}
                    edit={edit}
                  />
                );
              })}
          </Students>
          <Students heading="Present Students">
            {pStudentsRendered}
          </Students>
          <Students heading="Absent Students">
            {aStudentsRendered}
          </Students>
        </div>
      </div>
    </div>
  );
}
