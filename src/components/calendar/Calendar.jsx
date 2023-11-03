import React, { useState, useEffect } from 'react';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEvents } from '..//..//gateway/events';
import './calendar.scss';

function Calendar(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error('Ошибка при получении событий:', error);
      });
  }, []);

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
