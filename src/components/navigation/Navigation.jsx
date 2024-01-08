import React from 'react';
import PropTypes from 'prop-types';
import './navigation.scss';

const Navigation = ({ weekDates }) => (
  <header className="calendar__header">
    {weekDates.map((dayDate) => (
      <div
        key={dayDate.toISOString()}
        className="calendar__day-label day-label"
      >
        <span className="day-label__day-name">
          {dayDate.toLocaleString('en', { weekday: 'short' })}
        </span>
        <span className="day-label__day-number">{dayDate.getDate()}</span>
      </div>
    ))}
  </header>
);

export default Navigation;

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};
