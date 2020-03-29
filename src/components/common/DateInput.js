import * as React from 'react';
import '../../stylesheets/index.scss'
import DatePicker from "react-datepicker/es";

export interface DateInputProps {
    dateTitle: string;
    className?: string;
}
export class DateInput extends React.Component<DateInputProps> {
    constructor(props){
        super(props)
    }

    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        const { dateTitle } = this.props;

        return (
            <div>
                <table>
                    <td className='title'><label>{dateTitle}</label></td>
                    <td className ='dateInput'>
                        <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        />
                    </td>
                </table>
            </div>


        )
    }
}
