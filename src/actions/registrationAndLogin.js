import axios from 'axios';
import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './types';

export const newRegistration = (data) => async (dispatch) => {
  try {
    dispatch({ type: REGISTRATION_REQUEST });
    const postData = await axios.post('http://localhost:3001/registrations',
      data,
      { withCredentials: false });
    dispatch({ type: REGISTRATION_SUCCESS, payload: postData.data });
  } catch (error) {
    dispatch({
      type: REGISTRATION_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
  return '';
};

export const newLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const postData = await axios.post('http://localhost:3001/sessions',
      data,
      { withCredentials: false });
    dispatch({ type: LOGIN_SUCCESS, payload: postData.data });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
  return '';
};
