import React, { useState } from 'react';
import moment from 'moment';
import SearchItem from "./SearchItem";
import HeaderComponent from "../common/HeaderComponent";
import { UIConstants } from "../../UIConstants";
import ClassListForm from "../common/ClassListForm";
import DateInput from "../common/DateInput";
import 'react-datepicker/dist/react-datepicker.css';
import { useLazyQuery } from "@apollo/react-hooks";
import QUERIES from "../../graphqlQueries";

const TopicSearch = () => {
  const [topic, setTopic] = useState();
  const [topicClass, setTopiClass] = useState();
  const [hostName, setHostName] = useState();
  const [startDate, setStartDate] = useState(moment().toDate());
  const [endDate, setEndDate] = useState(moment().add(1, 'months').toDate());
  const [getClasses, {error: queryError, data: queryData, loading, called, refetch}] = useLazyQuery(QUERIES.GET_CLASSES);
  if (queryError) console.log(queryError);

  const search = () => {
    const variables = {
      topic,
      topicClass,
      hostName,
      startDate: startDate.toString(),
      endDate: endDate.toString()
    };
    if (called) refetch(variables);
    else getClasses({variables});
  }

  return (
    <div className="container">
      <HeaderComponent title={UIConstants.CLASS_SEARCH_TITLE} />
      <section className="mainSection">
        <div className='row'>
          <div className="col-md-4">
            <SearchItem searchTitle={UIConstants.TOPIC_CLASS} onChange={e => setTopiClass(e.target.value)} />
            <SearchItem searchTitle={UIConstants.TOPIC} onChange={e => setTopic(e.target.value)} />
            <SearchItem searchTitle={UIConstants.INSTRUCTOR} onChange={e => setHostName(e.target.value)} />
            <DateInput dateTitle={UIConstants.START_DATE} selected={startDate} onChange={setStartDate} />
            <DateInput dateTitle={UIConstants.END_DATE} selected={endDate} onChange={setEndDate} />
            <div className="d-flex justify-content-end">
              <button className='btn btn-primary' onClick={search}>Search</button>
            </div>
          </div>
          <div className="col-md-8">
            <ClassListForm classList={queryData} loading={loading} called={called} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default TopicSearch;