import React from 'react';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import PropTypes from 'prop-types';
import './calendar.scss';

function Calendar({ weekDates, events, handleDeleteEvent }) {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            handleDeleteEvent={handleDeleteEvent}
          />
        </div>
      </div>
    </section>
  );
}

export default Calendar;

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  handleDeleteEvent: PropTypes.func.isRequired,
};
