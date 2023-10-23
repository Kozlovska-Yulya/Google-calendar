import React from 'react';
import { days } from '../../utils/dateUtils.js';
import './navigation.scss';

const Navigation = ({ weekDates }) => {
  const today = new Date();

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => (
        <div
          key={dayDate}
          className={`calendar__day-label day-label ${
            isCurrentDay(dayDate) ? 'current-day' : ''
          }`}
        >
          <span
            className={`day-label__day-name${
              isCurrentDay(dayDate) ? ' current-day-name' : ''
            }`}
          >
            {days[dayDate.getDay()]}
          </span>
          <span
            className={`day-label__day-number${
              isCurrentDay(dayDate) ? ' current-day-number' : ''
            }`}
          >
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );

  function isCurrentDay(date) {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
};

export default Navigation;
