import axios from 'axios';

export const newRegistration = async (data) => {
  try {
    const postData = await axios.post('http://localhost:3001/registrations',
      data,
      { withCredentials: false });
    // const jsonData = await postData.json();
    return postData;
  } catch (error) {
    console.log('registration error', error.response);
  }
  return '';
};
export const newSession = (data) => {
  console.log('new session');
  return data;
};
