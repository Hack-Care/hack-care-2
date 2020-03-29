import React from 'react'
import { UIConstants } from "../../UIConstants";
import './classlistform.css';

const CourseFormRow = ({ content }) => {
  return (
    <td className='tableCell'>{content}</td>
  )
};

const ClassListForm = ({ classList, isStudent }) => {
  return (
    <table className='formTable'>
      <tr className='formHeader'>
        <CourseFormRow content={UIConstants.TOPIC_TITLE} />
        {isStudent && <CourseFormRow content={UIConstants.INSTRUCTOR_TITLE} />}
        <CourseFormRow content={UIConstants.DATE_TIME_TITLE} />
        <CourseFormRow content={UIConstants.DURATION_TITLE} />
      </tr>
      {classList && classList.map((course, index) =>
        <tr className={index % 2 === 0 ? 'formRow' : 'formRowGray'}>
          <CourseFormRow content={course.topic} />
          {isStudent &&
            <CourseFormRow content={course.instructor} />
          }
          <CourseFormRow content={course.courseTime.toLocaleDateString()} />
          <CourseFormRow content={course.duration} />
        </tr>
      )}
    </table>
  )
}

export default ClassListForm;
