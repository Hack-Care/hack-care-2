import * as React from 'react'
import {User} from "../../models/User";

export interface WelcomeMessageProps {
    user: User;
    welcomeMessageClass: string;
}

export class WelcomeMessage extends React.Component<WelcomeMessageProps> {
    constructor(props){
        super(props)
    }

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
