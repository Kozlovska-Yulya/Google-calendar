import React, { useState, useEffect } from 'react';
import Hour from '../hour/Hour';

const Day = ({ dataDay, dayEvents, handleDeleteEvent }) => {
  const [hourlyEvents, setHourlyEvents] = useState(Array(24).fill([]));

  useEffect(() => {
    if (dayEvents.length > 0) {
      const newHourlyEvents = Array(24).fill([]);

      dayEvents.forEach((event) => {
        const hour = new Date(event.dateFrom).getHours();
        newHourlyEvents[hour] = [...newHourlyEvents[hour], event];
      });

      setHourlyEvents(newHourlyEvents);
    }
  }, [dayEvents]);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hourlyEvents.map((hourEvents, hour) => (
        <Hour
          key={dataDay + hour}
          dataHour={hour}
          hourEvents={hourEvents}
          handleDeleteEvent={handleDeleteEvent}
        />
      ))}
    </div>
  );
};

export default Day;
