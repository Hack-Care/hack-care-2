import * as React from 'react'
import {User} from "../../models/User";

export class WelcomeMessage extends React.Component {
    render() {
        const {user, welcomeMessageClass} = this.props;
        const welcomeMessage = `Welcome ${user.firstName}`;
        const baseClassName = `welcomeMessage`;
        const className = [welcomeMessageClass, baseClassName].join(` `)

        return (
            <lable className={className}>{welcomeMessage}</lable>
        )
    }
}
