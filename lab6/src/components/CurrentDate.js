// components/CurrentDate.js
import React from 'react';

const CurrentDate = ({ sharedDateInstance }) => {
  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formattedDate = sharedDateInstance.toLocaleDateString('en-US', options);

  return <div className="current-date">{formattedDate}</div>;
}

export default CurrentDate;