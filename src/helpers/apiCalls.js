const serverUrl = process.env.NODE_ENV  ===  'development' ? process.env.REACT_APP_DEV_BASEURL : process.env.REACT_APP_PROD_BASEURL
import axios from 'axios'
console.log('axuis',serverUrl)
console.log('processNode',process.env.NODE_ENV  ===  'development' ? process.env.REACT_APP_DEV_BASEURL : process.env.REACT_APP_PROD_BASEURL)
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