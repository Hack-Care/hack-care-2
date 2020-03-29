import React from "react";
import Cookies from "js-cookie";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";

const CreateSeries = (props) => {
    const handleClear = () => {
        document.getElementById("create-series-form").reset();
    };

    const handleSubmit = () => {

    };
    const GET_USER = gql`
        query user ($email: String!) {
            user(email: $email)
        }
    `;
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { props }
    });
    if (error) {
        console.log(error)
    }
    const userName = data ? data.firstName : "tester";
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form onSubmit={handleSubmit} className="container" id="create-series-form">
                        <input type="hidden" name="_csrf" value={Cookies.get("x-csrf-token")} />
                        <label>Welcome {userName}!</label>
                        <h3>Create a series of classes</h3>
                        <div className="row">
                            <div className="col-md-10">
                                <div className="form-group row">
                                    <label className="col-md-4 text-right">Topic class</label>
                                    <div className="col-md-8">
                                        <input className="form-control" type="text" name='topicClass' placeholder="e.g. Programming or Mathematics"/>
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

export default CreateSeries;