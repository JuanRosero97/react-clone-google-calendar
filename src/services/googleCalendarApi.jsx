export function getEvents(timeMin, timeMax) {
  const apiURL = `${process.env.REACT_APP_API_URL}/calendar/list-events?timeMin=${timeMin}&timeMax=${timeMax}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });
}
