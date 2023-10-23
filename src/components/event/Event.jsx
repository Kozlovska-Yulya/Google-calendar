import React from 'react';

import './event.scss';

const Event = ({ height, marginTop, title, time, timeSlot }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div
      style={eventStyle}
      className={`event ${timeSlot === dataHour ? 'highlighted' : ''}`}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;
