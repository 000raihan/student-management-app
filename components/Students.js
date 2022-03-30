import React from 'react';
import SectionStyles from '../styles/Students.module.css';
import SectionStyles2 from './Students.module.css';

const Students = (props) => {
  const {heading,children} = props;
  return (
    <div className={SectionStyles.SectionHeader}>
    <div className={SectionStyles.SectionCard}>
       <h2 className={SectionStyles2.head}>{heading}</h2>
       {/* <h3>Im All Students section</h3> */}
       {children}
    </div>
</div>
  )
}

export default Students