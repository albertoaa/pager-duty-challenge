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
