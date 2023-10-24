import React, { useState } from 'react';

import './modal.scss';

const Modal = ({ isOpen, onCreateEvent, onClose }) => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevEventData) => ({
      ...prevEventData,
      [name]: value,
    }));
  };

  const handleCreateEvent = () => {
    const newEvent = {
      title: eventData.title,
      date: new Date(eventData.date),
      endTime: new Date(eventData.date), // Конечная дата события в тот же день)
      description: eventData.description,
    };

    // Вызываем функцию onCreateEvent и передаем в нее созданное событие
    onCreateEvent(newEvent);

    // Закрываем модальное окно, вызывая функцию onClose
    onClose();
  };

  return (
    isOpen && (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={onClose}>
              +
            </button>
            <form className="event-form" onSubmit={handleCreateEvent}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                value={eventData.title}
                onChange={handleChange}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  value={eventData.date}
                  onChange={handleChange}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  value={eventData.startTime}
                  onChange={handleChange}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  value={eventData.endTime}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                value={eventData.description}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
