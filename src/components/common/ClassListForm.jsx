import React from 'react'
import { UIConstants } from "../../UIConstants";

const ClassListForm = ({ classList, isStudent }) => {
  const { TOPIC_CLASS, TOPIC_TITLE, INSTRUCTOR_TITLE, DATE_TIME_TITLE, DURATION_TITLE, DESCRIPTION } = UIConstants;
  return (
    <table className='table table-sm table-striped'>
      <thead>
      <tr className='formHeader'>
        <th>{TOPIC_CLASS}</th>
        <th>{TOPIC_TITLE}</th>
        {isStudent && <th>{INSTRUCTOR_TITLE}</th>}
        <th>{DATE_TIME_TITLE}</th>
        <th>{DURATION_TITLE}</th>
          <th>{DESCRIPTION}</th>
      </tr>
      </thead>
      <tbody>
      {classList && classList.classes.map(({ hostName, dateTime, duration, topicClass, topic, description }, index) =>
        <tr key={index}>
          <td>{topicClass}</td>
          <td>{topic}</td>
          {isStudent &&
            <td>{hostName}</td>
          }
          <td>{new Date(Date.parse(dateTime)).toLocaleString()}</td>
          <td>{duration}</td>
            <td>{description}</td>
        </tr>
      )}
      </tbody>
    </table>
  )
}

export default ClassListForm;
