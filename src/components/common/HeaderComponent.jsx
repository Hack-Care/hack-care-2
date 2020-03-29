import React from 'react';
import './headercomponent.css';

const HeaderComponent = ({title}) => {
  return (
    <div className='headerBar'>
      <header className='headerTitle'>{title}</header>
    </div>
  )
}

export default HeaderComponent;