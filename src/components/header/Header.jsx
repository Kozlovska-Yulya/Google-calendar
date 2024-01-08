import React from 'react';
import './header.scss';
import PropTypes from 'prop-types';

const Header = ({
  onWeekNext,
  onWeekPrev,
  onTodayClick,
  displayedMonth,
  onAddEventClick,
}) => {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={onAddEventClick}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={onTodayClick}>
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={onWeekPrev}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={onWeekNext}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{displayedMonth}</span>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onWeekNext: PropTypes.func.isRequired,
  onWeekPrev: PropTypes.func.isRequired,
  onTodayClick: PropTypes.func.isRequired,
  displayedMonth: PropTypes.string.isRequired,
  onAddEventClick: PropTypes.func.isRequired,
};
