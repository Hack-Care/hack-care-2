import React from 'react'
import { UIConstants } from "../../UIConstants";

const ClassListForm = ({ classList, isStudent }) => {
  const { TOPIC_TITLE, INSTRUCTOR_TITLE, DATE_TIME_TITLE, DURATION_TITLE } = UIConstants;
  return (
    <table className='table table-sm table-striped'>
      <thead>
      <tr className='formHeader'>
        <th>{TOPIC_TITLE}</th>
        {isStudent && <th>{INSTRUCTOR_TITLE}</th>}
        <th>{DATE_TIME_TITLE}</th>
        <th>{DURATION_TITLE}</th>
      </tr>
      </thead>
      <tbody>
      {classList && classList.map(({ topic, instructor, courseTime, duration }) =>
        <tr>
          <td>{topic}</td>
          {isStudent &&
            <td>{instructor}</td>
          }
          <td>{courseTime.toLocaleDateString()}</td>
          <td>{duration}</td>
        </tr>
      )}
      </tbody>
    </table>
  )
}

export default ClassListForm;
