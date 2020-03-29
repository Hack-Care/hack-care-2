import React from 'react';
import DatePicker from "react-datepicker";
import './dateinput.css';

const DateInput = ({ dateTitle }) => {
  return (
    <div>
      <table>
        <td className='title'><label>{dateTitle}</label></td>
        <td className='dateInput'>
          <DatePicker />
        </td>
      </table>
    </div>
  )
}

export default DateInput;
