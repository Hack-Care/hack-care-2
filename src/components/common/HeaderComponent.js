import * as React from 'react'

export class HeaderComponent extends React.Component {
    render() {

        return (
            <div className='headerBar'>
                <header className='headerTitle'>{this.props.title}</header>
            </div>
        )
    }
}
