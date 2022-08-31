const baseURL = 'https://api.pagerduty.com';
const apiKey = process.env.REACT_APP_API_KEY;

export const getItems = async (url, options) => {
  const response = await fetch(
    `${baseURL}${url}?` + new URLSearchParams(options),
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
        Accept: 'application/json',
      },
    }
  );

  if (response.status !== 200) {
    console.error(
      `Did not get an OK from this server. Code: ${response.statusCode}`
    );
    return;
  }

  const body = await response.json();
  return body;
};

export const createItem = async (url, options) => {
  const { incident } = options;
  const response = await fetch(`${baseURL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: apiKey,
      Accept: 'application/json',
    },
    body: JSON.stringify(incident),
  });

  if (response.status !== 200) {
    console.error(
      `Did not get an OK from this server. Code: ${response.statusCode}`
    );
    return;
  }

  const body = await response.json();
  console.log(body);
  // return body;
};
