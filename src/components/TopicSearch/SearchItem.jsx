import React from 'react';
import './searchitem.css';

const SearchItem = ({searchTitle}) => {
  return (
    <div className='searchItem'>
      <div className="form-group row">
        <label className="col-md-4 text-right">{searchTitle}</label>
        <div className="col-md-8">
          <input type="text" className="form-control" />
        </div>
      </div>
    </div>
  )
}

export default SearchItem;
