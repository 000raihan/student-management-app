import React,{useState, useEffect} from 'react';
import Styles from './Student.module.css'

const SingleStudent = (props) => {


  return (
    <div className={Styles.studentSection}>
        <h4 className={Styles.name}>Name : {props.name}</h4>
        <h4 className={Styles.roll}>Roll : {props.roll}</h4>
        <div className={Styles.studentActions}>
            <button className={Styles.button}>Edit</button>
            <button className={Styles.button}>Delete</button>
            <button className={Styles.button}>Present</button>
            <button className={Styles.button}>Absent</button>
        </div>
    </div>
  )
}

export default SingleStudent