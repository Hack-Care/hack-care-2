import React from 'react';
import SearchItem from "./SearchItem";
import HeaderComponent from "../common/HeaderComponent";
import { UIConstants } from "../../UIConstants";
import ClassListForm from "../common/ClassListForm";
import DateInput from "../common/DateInput";
import 'react-datepicker/dist/react-datepicker.css';
import {useQuery} from "@apollo/react-hooks";
import QUERIES from "../../graphqlQueries";

const TopicSearch = (props) => {
  const {error: queryError, data: queryData} = useQuery(QUERIES.GET_CLASSES);
  const {error, data} = useQuery(QUERIES.GET_USER_BASIC_INFO, {
    variables: { email: props.userEmail }
  });
  if (error) console.log(error);
  if (queryError) console.log(queryError);
  const isStudent = data && data.user.interests.includes('student');

  return (
    <div className="container">
      <HeaderComponent title={UIConstants.CLASS_SEARCH_TITLE} />
      <section className="mainSection">
        <div className='row'>
          <div className="col-md-4">
            <SearchItem searchTitle={UIConstants.TOPIC_CLASS} />
            <SearchItem searchTitle={UIConstants.TOPIC} />
            <SearchItem searchTitle={UIConstants.INSTRUCTOR} />
            <DateInput dateTitle={UIConstants.START_DATE} />
            <DateInput dateTitle={UIConstants.END_DATE} />
            <div className="d-flex justify-content-end">
              <button className='btn btn-primary'>Search</button>
            </div>
          </div>
          <div className="col-md-8">
            <ClassListForm classList={queryData} isStudent={isStudent} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default TopicSearch;