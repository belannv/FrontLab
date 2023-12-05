import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = ({ events, addEvent }) => {
  const [newEvent, setNewEvent] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddEvent = () => {
    if (newEvent.trim() !== '' && eventDate) {
      const futureDate = new Date(eventDate);

      addEvent({
        title: newEvent,
        start: futureDate,
        end: futureDate,
        description: eventDescription,
      });

      setNewEvent('');
      setEventDate('');
      setEventDescription('');
    }
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <div>
        <input
          type="text"
          placeholder="Event name"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>

      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleEventSelect}
      />

      {selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Event Details</h3>
            <p>Title: {selectedEvent.title}</p>
            <p>Date: {selectedEvent.start.toLocaleString()}</p>
            <p>Description: {selectedEvent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: (event) => dispatch({ type: 'ADD_EVENT', payload: event }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
