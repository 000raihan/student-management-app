import React from "react";
import Styles from "./InputSection.module.css";

const Inputsection = (props) => {
  const { name, roll, edit, updateStudent, addStudent } = props;

  return (
    <div className={Styles.InputSection}>
      <div className={Styles.InputCard}>
        <div>
          <form
            className={Styles.InputCard}
            onSubmit={(e) => (edit ? updateStudent(e, roll) : addStudent(e))}
          >
            <div>
              <input
                className={Styles.inputBar}
                placeholder="Enter Student Name"
                value={name}
                type="text"
                onChange={(e) => props.nameChangeHandler(e)}
              />
              <input
                className={Styles.inputBar}
                placeholder="Enter Roll Number"
                value={roll}
                type="text"
                onChange={(e) => props.rollChangeHandler(e)}
                disabled={edit}
              />
            </div>

            <input
              type="submit"
              className={Styles.button}
              value={edit ? "Update Student" : "Add Student"}
            />
          </form>
        </div>
        {/* <button onClick={()=> edit ? updateStudent(roll) : addStudent()} className={Styles.button}> {edit ? "Update Student" : "Add Student"}</button> */}
      </div>
    </div>
  );
};

export default Inputsection;
