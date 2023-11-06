import React, { useState } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import Modal from './components/modal/Modal';
import { onCreateTask } from './gateway/events';
import events from './gateway/events';

import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';

import './common.scss';

function App() {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextWeek = () => {
    const nextWeekStartDate = new Date(weekStartDate);
    nextWeekStartDate.setDate(weekStartDate.getDate() + 7);
    setWeekStartDate(nextWeekStartDate);
  };

  const handlePrevWeek = () => {
    const prevWeekStartDate = new Date(weekStartDate);
    prevWeekStartDate.setDate(weekStartDate.getDate() - 7);
    setWeekStartDate(prevWeekStartDate);
  };

  const handleTodayClick = () => {
    setWeekStartDate(new Date());
  };

  const handleCreateEvent = (eventData) => {
    onCreateTask(eventData);
    setIsModalOpen(false);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const startMonth = weekDates[0].getMonth();
  const endMonth = weekDates[weekDates.length - 1].getMonth();

  const displayedMonth =
    startMonth === endMonth
      ? weekDates[0].toLocaleString('en-us', { month: 'long' }) // Если неделя в одном месяце
      : `${weekDates[0].toLocaleString('en-us', {
          month: 'short',
        })}-${weekDates[weekDates.length - 1].toLocaleString('en-us', {
          month: 'short', // короткая запись, если два месяца
        })}`;

  return (
    <>
      <Header
        onWeekNext={handleNextWeek}
        onWeekPrev={handlePrevWeek}
        onTodayClick={handleTodayClick}
        displayedMonth={displayedMonth}
        onAddEventClick={() => setIsModalOpen(true)} // Открывает модальное окно при клике на кнопку "Create"
      />
      <Calendar weekDates={weekDates} events={events} />
      <Modal
        isOpen={isModalOpen}
        onCreateEvent={handleCreateEvent}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;
