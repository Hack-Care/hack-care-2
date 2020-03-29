import * as React from 'react';
import '../../stylesheets/index.scss'

export class SearchItem extends React.Component {
    render() {
        const { searchTitle } = this.props;

        return (
            <div className='searchItem'>
                <table>
                    <td className='title'><label>{searchTitle}</label></td>
                    <input className='searchInput'></input>
                </table>


            </div>
        )
    }
}
