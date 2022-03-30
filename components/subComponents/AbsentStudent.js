import React,{useState, useEffect} from 'react';
import Styles from './Student.module.css'

const AbsentStudent = (props) => {

    const [name, setName] = useState();
    const [roll, setRoll] = useState()

  return (
    <div className={Styles.studentSection}>
      <div className={Styles.nameWarpper}>
        <div>
          <h4 className={Styles.name}>Name : {props.name} </h4>
          <h4 className={Styles.roll}>Roll : {props.roll} </h4>
        </div>

        <div className={Styles.studentActions}>
          <button className={Styles.button2}>Accidentally <br/> Added</button>
        </div>
      </div>
    </div>
  )
}

export default AbsentStudent