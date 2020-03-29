import React from 'react';
import './searchitem.css';

const SearchItem = ({searchTitle}) => {
  return (
    <div className='searchItem'>
      <table>
        <tr>
          <td className='title'><label>{searchTitle}</label></td>
          <td>
            <input className='searchInput'></input>
          </td>
        </tr>
        
        
      </table>


    </div>
  )
}

export default SearchItem;
