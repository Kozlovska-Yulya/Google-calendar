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

export const onDeleteTask = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network error');
      }
    })
    .catch(() => {
      alert("Network Error! Can't delete event.");
      return;
    });

// const events = [
//   {
//     id: 1,
//     title: 'breakfast',
//     description: 'with mom',
//     dateFrom: new Date(2023, 9, 28, 8, 30),
//     dateTo: new Date(2023, 9, 28, 10, 30),
//   },

//   {
//     id: 2,
//     title: 'haircurt',
//     description: '',
//     dateFrom: new Date(2023, 9, 30, 10, 30),
//     dateTo: new Date(2023, 9, 30, 12, 0),
//   },
// ];

// export default events;
