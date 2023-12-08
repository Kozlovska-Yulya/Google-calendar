const baseUrl = 'https://654387a401b5e279de2088a9.mockapi.io/api/v1/events';

export const fetchEvents = () =>
  fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network error');
      }
      return res.json();
    })
    .catch(() => {
      alert("Network Error! Can't display events.");
      return [];
    });

export const onCreateTask = (taskInfo) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskInfo),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network error');
      }
    })
    .catch(() => {
      alert("Network Error! Can't create event.");
      return;
    });
export const onDeleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network error');
      }

      return 'Event deleted successfully';
    })
    .catch(() => {
      alert("Network Error! Can't delete event.");
      throw new Error("Can't delete event");
    });

const events = [
  {
    id: 1,
    title: 'breakfast',
    description: 'with mom',
    dateFrom: '2023-10-28T08:30:00.000Z',
    dateTo: '2023-10-28T10:30:00.000Z',
  },

  {
    id: 2,
    title: 'haircurt',
    description: '',
    dateFrom: '2023-11-17T10:30:00.000Z',
    dateTo: '2023-11-17T12:00:00.000Z',
  },
];

export default events;
