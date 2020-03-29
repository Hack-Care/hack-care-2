import React from 'react';
import './welcomemessage.css';

const WelcomeMessage = ({ user, welcomeMessageClass }) => {
  const welcomeMessage = `Welcome ${user.firstName}`;
  const baseClassName = `welcomeMessage`;
  const className = [welcomeMessageClass, baseClassName].join(` `)

  return (
    <lable className={className}>{welcomeMessage}</lable>
  )
}

export default WelcomeMessage;
