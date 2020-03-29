import React from 'react';
import SearchItem from "./SearchItem";
import HeaderComponent from "../common/HeaderComponent";
import { UIConstants } from "../../UIConstants";
import ClassListForm from "../common/ClassListForm";
import DateInput from "../common/DateInput";
import './topicsearch.css';
import 'react-datepicker/dist/react-datepicker.css';

const TopicSearch = () => {
  // const {classList, isStudent} = this.props;
  const classList = [
    {
      topic: "Beginner's Java",
      instructor: 'Liwei',
      courseTime: new Date(2020, 4, 3, 8, 0, 0, 0),
      duration: "30 mins"
    },
    {
      topic: "Javascript",
      instructor: 'Trung',
      courseTime: new Date(2020, 4, 3, 8, 0, 0, 0),
      duration: "30 mins"
    },
    {
      topic: "Python",
      instructor: 'Quy',
      courseTime: new Date(2020, 4, 3, 8, 0, 0, 0),
      duration: "30 mins"
    }
  ];
  const isStudent = true;

  return (
    <div>
      <HeaderComponent title={UIConstants.CLASS_SEARCH_TITLE} />
      <section className="mainSection">
        <table>
          <tr>
            <td className='searchColumn'>
              <SearchItem searchTitle={UIConstants.TOPIC_CLASS} />
              <SearchItem searchTitle={UIConstants.TOPIC} />
              <SearchItem searchTitle={UIConstants.INSTRUCTOR} />
              <DateInput dateTitle={UIConstants.START_DATE} />
              <DateInput dateTitle={UIConstants.END_DATE} />
            </td>
            <td>
              <ClassListForm classList={classList} isStudent={isStudent} />
            </td>
          </tr>

        </table>
        <button className='searchButton'>Search</button>
      </section>
    </div>
  )
}

export default TopicSearch;