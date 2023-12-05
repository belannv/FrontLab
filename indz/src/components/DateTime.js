import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateClock } from './actions';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

const DateTime = () => {
    const dispatch = useDispatch();
    const sharedDateInstance = new Date();
   useEffect(() => {
    const intervalId = setInterval(() => {
      const newDate = new Date();
      dispatch(updateClock(newDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);
  return (
    <div className="datetime">
      <CurrentDate sharedDateInstance={sharedDateInstance} />
      <CurrentTime sharedDateInstance={sharedDateInstance} />
    </div>
  );
}

export default DateTime;

 