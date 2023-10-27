import React, { useState } from 'react';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';
import './calendar.scss';

function Calendar(props) {
  const [eventState] = useState(events);

  return (
    <section className="calendar">
      <Navigation weekDates={props.weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={props.weekDates} events={props.events} />
        </div>
      </div>
    </section>
  );
}

export default Calendar;
