import * as React from 'react';
import '../../stylesheets/index.scss'

export interface SearchItemProps {
    searchTitle: string;
    className?: string;
}
export class SearchItem extends React.Component<SearchItemProps> {
    constructor(props){
        super(props)
    }

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
