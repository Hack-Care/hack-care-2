import React from 'react'
import { UIConstants } from "../../UIConstants";
import moment from 'moment';

const ClassListForm = ({ classList, loading, called, search }) => {
  const { REGISTER, TOPIC_CLASS, TOPIC_TITLE, INSTRUCTOR_TITLE, DATE_TIME_TITLE, DURATION_TITLE, DESCRIPTION } = UIConstants;

  const getRows = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan="7">Loading...</td>
        </tr>);
    } else if (search && !called) {
      return (
        <tr>
          <td colSpan="7" className="text-center">Click Search button to retrieve lessons</td>
        </tr>);
    } else if (!search && (!classList || classList.hostingClasses.length === 0)) {
      return (
        <tr>
          <td colSpan="7" className="text-center">You have not created any classes</td>
        </tr>);
    } else {
      const classes = search ? classList.classes : classList.hostingClasses;
      return (
        classes && classes.map(({ hostName, dateTime, duration, topicClass, topic, description }, index) =>
          <tr key={index}>
            {search && <td><input name={topicClass} type="checkbox" /></td>}
            <td>{topicClass}</td>
            <td>{topic}</td>
            {search && <td>{hostName}</td>}
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
          {search && <th>{REGISTER}</th>}
          <th>{TOPIC_CLASS}</th>
          <th>{TOPIC_TITLE}</th>
          {search && <th>{INSTRUCTOR_TITLE}</th>}
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
