const serverUrl = 'https://web-sensor.herokuapp.com'
export const authenticateUser = async () => {
  try {
    const res = await (
      await fetch(`${serverUrl}/u/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })
    ).json();
    return res;
  } catch (error) {
    return error;
  }
};