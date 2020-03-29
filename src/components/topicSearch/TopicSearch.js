import * as React from 'react';
import '../../stylesheets/index.scss'
import {SearchItem} from "./SearchItem";
import {HeaderComponent} from "../common/HeaderComponent";
import {UIConstants} from "../../UIConstants";
import {ClassListForm} from "../common/ClassListForm";
import {Course} from "../../models/Course";
import {DateInput} from "../common/DateInput";

export interface ClassSearchProps {
    searchTitle?: string;
    className?: string;
    classList?: Course[];
    isStudent?: boolean;
}
export class TopicSearch extends React.Component<ClassSearchProps> {
    constructor(props){
        super(props)
    }

    render() {
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
                <HeaderComponent title={UIConstants.CLASS_SEARCH_TITLE}/>
                <section className="mainSection">
                    <table>
                        <td className='searchColumn'>
                            <SearchItem searchTitle = {UIConstants.TOPIC_CLASS} />
                            <SearchItem searchTitle = {UIConstants.TOPIC} />
                            <SearchItem searchTitle = {UIConstants.INSTRUCTOR} />
                            <DateInput dateTitle={UIConstants.START_DATE} />
                            <DateInput dateTitle={UIConstants.END_DATE} />
                        </td>
                        <td>
                            <ClassListForm classList={classList} isStudent={isStudent}/>
                        </td>
                    </table>
                    <button className='searchButton'>Search</button>
                </section>
            </div>
        )
    }
}
