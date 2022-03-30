import React, { useState, useEffect } from "react";
import Styles from "./Student.module.css";

const PresentStudent = (props) => {

  const {name, roll, changePresent} = props

  return (
    <div className={Styles.studentSection}>
      <div className={Styles.nameWarpper}>
        <div>
          <h4 className={Styles.name}>Name : {name} </h4>
          <h4 className={Styles.roll}>Roll : {roll} </h4>
        </div>

        <div className={Styles.studentActions}>
          <button onClick={()=>{changePresent(roll, "present")}} className={Styles.button2}>Accidentally <br/> Added</button>
        </div>
      </div>
    </div>
  );
};

export default PresentStudent;
