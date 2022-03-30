import React from "react";
import Styles from "./InputSection.module.css";

const Inputsection = (props) => {
    // console.log("roll is : ",props)
    // console.log("edit : ", props.edit);

  return (
    <div className={Styles.InputSection}>
      <div className={Styles.InputCard}>
        <div>
          <input
            className={Styles.inputBar}
            placeholder="Enter Student Name"
            value={props.name}
            type="text"
            onChange={(e)=>props.nameChangeHandler(e)}
          />
          <input
            className={Styles.inputBar}
            placeholder="Enter Roll Number"
            value={props.roll}
            type="text"
            onChange={(e)=>props.rollChangeHandler(e)}
            disabled = {props.edit}
          />
        </div>
        <button onClick={()=> props.edit ? props.updateStudent(props.roll) : props.addStudent()} className={Styles.button}> {props.edit ? "Update Student" : "Add Student"}</button>
      </div>
    </div>
  );
};

export default Inputsection;
