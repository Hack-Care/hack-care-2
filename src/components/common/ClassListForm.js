import * as React from 'react'
import {UIConstants} from "../../UIConstants";

export const CourseFormRow = ({content}) => {
    return (
        <td className='tableCell'>{content}</td>
    )
};

export class ClassListForm extends React.Component {
    render() {
        const {classList, isStudent} = this.props;
        return (
            <table className='formTable'>
                <tr className='formHeader'>
                    <CourseFormRow content={UIConstants.TOPIC_TITLE} />
                    {isStudent && <CourseFormRow content={UIConstants.INSTRUCTOR_TITLE} />}
                    <CourseFormRow content={UIConstants.DATE_TIME_TITLE} />
                    <CourseFormRow content={UIConstants.DURATION_TITLE} />
                </tr>
                {classList && classList.map((course,index) =>
                    <tr className={index%2 === 0 ? 'formRow': 'formRowGray'}>
                        <CourseFormRow content={course.topic} />
                        {isStudent &&
                          <CourseFormRow content={course.instructor} />
                        }
                        <CourseFormRow content = {course.courseTime.toLocaleDateString()} />
                        <CourseFormRow content = {course.duration} />
                    </tr>
                )}
            </table>
        )
    }
}
