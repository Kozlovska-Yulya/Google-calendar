import React, { useState } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import Modal from './components/modal/Modal';

import { getWeekStartDate, generateWeekRange } from './utils/dateUtils.js';

import './common.scss';

function App() {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);

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
    const newEvent = {
      title: eventData.title,
      dateFrom: eventData.date, // Используйте дату начала события
      dateTo: eventData.endTime, // Используйте дату окончания события
    };

    setEvents([...events, newEvent]);
    setIsModalOpen(false);
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  // Определяем месяц начала и конца отображаемой недели
  const startMonth = weekDates[0].getMonth();
  const endMonth = weekDates[weekDates.length - 1].getMonth();

  // Определяем текст для отображения
  const displayedMonth =
    startMonth === endMonth
      ? weekDates[0].toLocaleString('en-us', { month: 'long' }) // Если неделя в одном месяце
      : `${weekDates[0].toLocaleString('en-us', {
          month: 'short',
        })}-${weekDates[weekDates.length - 1].toLocaleString('en-us', {
          month: 'short',
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
      <Calendar weekDates={weekDates} />
      <Modal
        isOpen={isModalOpen}
        onCreateEvent={handleCreateEvent}
        onClose={() => setIsModalOpen(false)} // Закрывает модальное окно при клике на кнопку "Close" в модальном окне
      />
    </>
  );
}

export default App;
