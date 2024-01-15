const baseUrl = 'https://65974789668d248edf22bdfc.mockapi.io/api/v1/events';

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
