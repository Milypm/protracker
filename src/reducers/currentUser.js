import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/types';

const currentUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return { ...state, loading: true, user: {} };
    case REGISTRATION_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case REGISTRATION_FAIL:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_REQUEST:
      return { ...state, loading: true, user: {} };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default currentUserReducer;
