import React from 'react';
import { days } from '../../utils/dateUtils.js';
import './navigation.scss';
import PropTypes from 'prop-types';

const Navigation = ({ weekDates }) => {
  const today = new Date();

  function isCurrentDay(date) {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

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
};

export default Navigation;

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};
