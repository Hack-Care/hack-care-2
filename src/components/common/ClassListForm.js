import * as React from 'react'
import {Course} from "../../models/Course";
import {Constants} from "../Constants";

export interface ClassListFormProps {
    classList: Course[];
    isStudent: boolean;
}

export const CourseFormRow = ({content}) => {
    return (
        <td className='tableCell'>{content}</td>
    )
};

export class ClassListForm extends React.Component<ClassListFormProps> {
    constructor(props) {
        super(props)
    }

    render() {
        const {classList, isStudent} = this.props;
        return (
            <table className='formTable'>
                <tr className='formHeader'>
                    <CourseFormRow content={Constants.TOPIC_TITLE} />
                    {isStudent && <CourseFormRow content={Constants.INSTRUCTOR_TITLE} />}
                    <CourseFormRow content={Constants.DATE_TIME_TITLE} />
                    <CourseFormRow content={Constants.DURATION_TITLE} />
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
