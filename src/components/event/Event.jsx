import React, { useState } from 'react';
import './event.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Event = ({ height, marginTop, title, time, onDelete }) => {
  const [isClicked, setIsClicked] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div
      style={eventStyle}
      className={`event`}
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="event__content">
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {isClicked && (
        <button
          className="delete-event-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <FontAwesomeIcon icon={faTrash} style={{ marginRight: '4px' }} />
          Удалить
        </button>
      )}
    </div>
  );
};

export default Event;

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
