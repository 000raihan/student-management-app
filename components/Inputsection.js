import React from "react";
import Styles from "./InputSection.module.css";

const Inputsection = (props) => {
    // console.log("roll is : ",props)
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
          />
        </div>
        <button onClick={()=>props.addStudent()} className={Styles.button}>Add Student</button>
      </div>
    </div>
  );
};

export default Inputsection;
