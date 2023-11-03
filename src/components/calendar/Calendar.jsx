import React, { useState, useEffect } from 'react';
import Navigation from '../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import {
  fetchEvents,
  onCreateTask,
  onDeleteTask,
} from '..//..//gateway/events';
import './calendar.scss';

function Calendar(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Выполнение GET-запроса для получения событий с сервера MockAPI
    fetchEvents()
      .then((data) => {
        setEvents(data); // Установка полученных событий в состояние
      })
      .catch((error) => {
        console.error('Ошибка при получении событий:', error);
      });
  }, []);

  const handleCreateEvent = (eventData) => {
    onCreateTask(eventData)
      .then(() => {
        // Обработка успешного создания события, если необходимо
      })
      .catch((error) => {
        console.error('Ошибка при создании события:', error);
      });
  };

  const handleDeleteEvent = (eventId) => {
    onDeleteTask(eventId)
      .then(() => {
        // Обработка успешного удаления события, если необходимо
      })
      .catch((error) => {
        console.error('Ошибка при удалении события:', error);
      });
  };

  return (
    <section className="calendar">
      <Navigation weekDates={props.weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={props.weekDates}
            events={props.events}
            onCreateTask={handleCreateEvent}
            onDeleteTask={handleDeleteEvent}
          />
        </div>
      </div>
    </section>
  );
}

export default Calendar;
