// components/DateTime.js
import React from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

const DateTime = () => {
  
  const sharedDateInstance = new Date();
  
  return (
    <div className="datetime">
      <CurrentDate sharedDateInstance={sharedDateInstance} />
      <CurrentTime sharedDateInstance={sharedDateInstance} />
    </div>
  );
}

export default DateTime;