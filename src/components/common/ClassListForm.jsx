import React from 'react'
import { UIConstants } from "../../UIConstants";
import moment from 'moment';

const ClassListForm = ({ classList, loading, called }) => {
  const { TOPIC_CLASS, TOPIC_TITLE, INSTRUCTOR_TITLE, DATE_TIME_TITLE, DURATION_TITLE, DESCRIPTION } = UIConstants;

  const getRows = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan="6">Loading...</td>
        </tr>);
    } else if (!called) {
      return (
        <tr>
          <td colSpan="6" className="text-center">Click Search button to retrieve lessons</td>
        </tr>);
    } else {
      return (
        classList && classList.classes.map(({ hostName, dateTime, duration, topicClass, topic, description }, index) =>
          <tr key={index}>
            <td>{topicClass}</td>
            <td>{topic}</td>
            <td>{hostName}</td>
            <td>{moment(dateTime).format('MMM Do YYYY, h:mm a')}</td>
            <td>{duration}</td>
            <td>{description}</td>
          </tr>
        )
      )
    }
  }
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
        {getRows()}
      </tbody>
    </table>
  )
}

export default ClassListForm;
