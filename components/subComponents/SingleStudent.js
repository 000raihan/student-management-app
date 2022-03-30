import React,{useState, useEffect} from 'react';
import Styles from './Student.module.css'

const SingleStudent = (props) => {


  return (
    <div className={Styles.studentSection}>
        <h4 className={Styles.name}>Name : {props.name}</h4>
        <h4 className={Styles.roll}>Roll : {props.roll}</h4>
        <div className={Styles.studentActions}>
            <button disabled={props.attendance} onClick={()=>props.sendToEdit(props.roll)} className={Styles.button}>Edit</button>
            <button disabled={props.attendance} onClick={()=>props.deleteStudent(props.roll)} className={Styles.button}>Delete</button>
            <button disabled={props.attendance} onClick={()=>props.sendPresentOrAbsent(props.roll,"present")} className={Styles.button}>Present</button>
            <button disabled={props.attendance} onClick={()=>props.sendPresentOrAbsent(props.roll,"absent")} className={Styles.button}>Absent</button>
        </div>
    </div>
  )
}

export default SingleStudent
