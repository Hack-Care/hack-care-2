import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './dateinput.css';

const DateInput = ({ dateTitle }) => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="form-group row">
      <label className="col-md-4 text-right">{dateTitle}</label>
      <div className="col-md-8">
        <DatePicker 
          className="form-control"
          selected={date}
          onChange={setDate} />
      </div>
    </div>
  )
}

export default DateInput;
