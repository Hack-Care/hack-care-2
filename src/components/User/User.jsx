import React from 'react';
import HeaderComponent from "../common/HeaderComponent";
import { UIConstants } from "../../UIConstants";
import ClassListForm from "../common/ClassListForm";
import 'react-datepicker/dist/react-datepicker.css';
import {useQuery} from "@apollo/react-hooks";
import QUERIES from "../../graphqlQueries";

const User = (props) => {
  const { error, loading, data } = useQuery(QUERIES.GET_HOSTING_CLASSES, {
    variables: { email: props.userEmail }
  });
  const {error: queryError, data: queryData, loading: queryLoading} = useQuery(QUERIES.GET_ALL_USER_INFO, {
    variables: { email: props.userEmail }
  });
  if (error) console.log(error);
  if (queryError) console.log(queryError);
  if (loading || queryLoading) return <p>loading...</p>;
  else return (
    <div className="container">
      <section className="mainSection">
        <div className='row'>
          <div className="col-md-4">
            <div className="card w-50">
              <img className="card-img-top" src="http://via.placeholder.com/300x300.png" alt="Profile" />
            </div>
            <div>
              <div className="row">
                <label className="col-md-4 text-right font-weight-bold">First name: </label>
                <label className="col-md-8 text-left">{queryData.user.firstName}</label>
              </div>
              <div className="row">
                <label className="col-md-4 text-right font-weight-bold">Last name: </label>
                <label className="col-md-8 text-left">{queryData.user.lastName}</label>
              </div>
              <div className="row">
                <label className="col-md-4 text-right font-weight-bold">Title: </label>
                <label className="col-md-8 text-left">{queryData.user.title}</label>
              </div>
              <div className="row">
                <label className="col-md-4 text-right font-weight-bold">Occupation: </label>
                <label className="col-md-8 text-left">{queryData.user.occupation}</label>
              </div>
              <div className="row">
                <label className="col-md-4 text-right font-weight-bold">Intro: </label>
                <label className="col-md-8 text-left">{queryData.user.intro}</label>
              </div>
              <div className="row">
                <label className="col-md-4 text-right font-weight-bold">Sign up as: </label>
                <label className="col-md-8 text-left">{queryData.user.interests.join(", ")}</label>
              </div>
            </div>

          </div>
          <div className="col-md-8">
            <HeaderComponent title={UIConstants.USER_CLASS_TITLE} />
            <ClassListForm classList={data.hostingClasses} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;