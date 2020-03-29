import React from 'react'
import { UIConstants } from "../../UIConstants";
import moment from 'moment';

const ClassListForm = ({ classList, loading }) => {
  const { TOPIC_CLASS, TOPIC_TITLE, INSTRUCTOR_TITLE, DATE_TIME_TITLE, DURATION_TITLE, DESCRIPTION } = UIConstants;
  return (
    <table className='table table-sm table-striped'>
      <thead>
      <tr className='formHeader'>
        <th>{TOPIC_CLASS}</th>
        <th>{TOPIC_TITLE}</th>
        <th>{INSTRUCTOR_TITLE}</th>
        <th>{DATE_TIME_TITLE}</th>
        <th>{DURATION_TITLE}</th>
          <th>{DESCRIPTION}</th>
      </tr>
      </thead>
      <tbody>
      {loading ? 
      <tr>
        <td colSpan="6">Loading...</td>
      </tr>
      :
      classList && classList.classes.map(({ hostName, dateTime, duration, topicClass, topic, description }, index) =>
        <tr key={index}>
          <td>{topicClass}</td>
          <td>{topic}</td>
          <td>{hostName}</td>
          <td>{moment(dateTime).format('MMM Do YYYY, h:mm a')}</td>
          <td>{duration}</td>
            <td>{description}</td>
        </tr>
      )}
      </tbody>
    </table>
  )
}

export default ClassListForm;
