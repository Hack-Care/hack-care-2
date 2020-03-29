import React from 'react';

const SearchItem = ({ searchTitle }) => {
  return (
    <div className="form-group row">
      <label className="col-md-4 text-right">{searchTitle}</label>
      <div className="col-md-8">
        <input type="text" className="form-control" />
      </div>
    </div>
  )
}

export default SearchItem;
