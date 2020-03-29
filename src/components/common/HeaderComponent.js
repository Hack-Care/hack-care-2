import * as React from 'react'
import {WelcomeMessage} from "./WelcomeMessage";

export interface HeaderProps {
    title: string;
    user: User;
}

export class HeaderComponent extends React.Component<HeaderProps> {
    constructor(props){
        super(props)
    }

    render() {
        const user = {
            firstName: `Tom`,
            lastName: `Li`
        };

        return (
            <div className='headerBar'>
                <header className='headerTitle'>{this.props.title}</header>
                <WelcomeMessage user={user} welcomeMessageClass='welcome'/>
            </div>
        )
    }
}
