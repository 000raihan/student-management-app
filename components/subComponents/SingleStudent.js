import React,{useState, useEffect} from 'react';
import Styles from './Student.module.css'

const SingleStudent = (props) => {

  const {name, roll, attendance, sendPresentOrAbsent} = props

  return (
    <div className={Styles.studentSection}>
        <h4 className={Styles.name}>Name : {name}</h4>
        <h4 className={Styles.roll}>Roll : {roll}</h4>
        <div className={Styles.studentActions}>
            <button onClick={()=>props.sendToEdit(roll)} className={Styles.button}>Edit</button>
            <button onClick={()=>props.deleteStudent(roll)} className={Styles.button}>Delete</button>
            <button disabled={attendance} onClick={()=>sendPresentOrAbsent(roll,"present")} className={Styles.button}>Present</button>
            <button disabled={attendance} onClick={()=>sendPresentOrAbsent(roll,"absent")} className={Styles.button}>Absent</button>
        </div>
    </div>
  )
}

export default SingleStudent
