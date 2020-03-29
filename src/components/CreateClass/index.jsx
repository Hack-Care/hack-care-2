import React, {useState} from "react";
import DateTimePicker from 'react-datetime-picker'
import Cookies from "js-cookie";

const CreateClass = () => {
    const [dateTimeField, setDateTimeField] = useState("");

    const handleChange = (e) => {
        setDateTimeField(e);
    };
    const handleClear = () => {
        document.getElementById("create-class-form").reset();
    };
    const handleSubmit = () => {

    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={handleSubmit} className="container" id="create-class-form">
              <input type="hidden" name="_csrf" value={Cookies.get("x-csrf-token")} />
              <label>Welcome tester!</label>
              <h3>What would you like to teach?</h3>
              <div className="row">
                <div className="col-md-10">
                  <div className="form-group row">
                    <label className="col-md-4 text-right">Topic class</label>
                    <div className="col-md-8">
                      <input className="form-control" type="text" name='topicClass' placeholder="e.g. Programming or Mathematics"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-4 text-right">Topic</label>
                    <div className="col-md-8">
                      <input className="form-control" type="text" name='topic' placeholder="e.g. Java or Algebra"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-4 text-right">Date & Time</label>
                    <div className="col-md-8">
                      <DateTimePicker onChange={handleChange} value={dateTimeField} name='date'/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-4 text-right">Duration (minutes)</label>
                    <div className="col-md-8">
                      <input className="form-control" type="text" name='duration' placeholder="e.g. 60"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-4 text-right">Link to live session</label>
                    <div className="col-md-8">
                      <input className="form-control" type="text" name='link'/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-4 text-right">Class Description</label>
                    <div className="col-md-8">
                      <input className="form-control" type="text" name='description' placeholder="e.g. Java Objects or Solving quadratic equations"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button onClick={handleClear} className="btn btn-secondary mr-2">
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary ml-2">
                    Create Class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default CreateClass;