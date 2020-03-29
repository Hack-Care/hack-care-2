import React from 'react';

const SearchItem = ({ searchTitle, onChange }) => {
  return (
    <div className="form-group row">
      <label className="col-md-4 text-right">{searchTitle}</label>
      <div className="col-md-8">
        <input type="text" className="form-control" onChange={onChange} />
      </div>
    </div>
  )
}

export default SearchItem;
