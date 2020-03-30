import React, {useState} from "react";
import DateTimePicker from 'react-datetime-picker'
import Cookies from "js-cookie";
import {useQuery, useMutation} from "@apollo/react-hooks";
import QUERIES from "../../graphqlQueries"
import MUTATIONS from "../../graphqlMutations";

const CreateClass = (props) => {
    const [dateTimeField, setDateTimeField] = useState("");

    const handleChange = (e) => {
        setDateTimeField(e);
    };
    const handleClear = () => {
        document.getElementById("create-class-form").reset();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createClass({variables: {
            host: queryData.user._id,
            hostName: queryData.user.firstName + " " + queryData.user.lastName,
            dateTime: dateTimeField,
            duration: e.target.duration.value,
            link: e.target.link.value,
            topicClass: e.target.topicClass.value,
            topic: e.target.topic.value,
            description: e.target.description.value
        }});
        document.location.href="/";
    };
    const {error: queryError, data: queryData} = useQuery(QUERIES.GET_USER_BASIC_INFO, {
        variables: { email: props.userEmail }
    });
    const [createClass] = useMutation(MUTATIONS.CREATE_CLASS);
    if (queryError) {
        console.log(queryError)
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={handleSubmit} className="container" id="create-class-form">
              <input type="hidden" name="_csrf" value={Cookies.get("x-csrf-token")} />
              <label>Welcome {queryData ? queryData.user.firstName : ""}!</label>
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
                      <DateTimePicker onChange={handleChange} value={dateTimeField} name='dateTime'/>
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