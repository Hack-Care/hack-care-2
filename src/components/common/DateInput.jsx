import React from 'react';
import DatePicker from "react-datepicker";
import './dateinput.css';

const DateInput = ({ dateTitle, selected, onChange }) => {
  return (
    <div className="form-group row">
      <label className="col-md-4 text-right">{dateTitle}</label>
      <div className="col-md-8">
        <DatePicker 
          className="form-control"
          selected={selected}
          onChange={onChange} 
          dateFormat="MMM d, yyyy"
          />
      </div>
    </div>
  )
}

export default DateInput;
