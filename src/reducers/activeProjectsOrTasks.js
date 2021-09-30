import {
  ACTIVE_PROJECTS_REQUEST,
  ACTIVE_PROJECTS_SUCCESS,
  ACTIVE_PROJECTS_FAIL,
  ACTIVE_TASKS_REQUEST,
  ACTIVE_TASKS_SUCCESS,
  ACTIVE_TASKS_FAIL,
} from '../actions/types';

const activeProjectsOrTasksReducer = (state = { activePjsOrTks: [] }, action) => {
  switch (action.type) {
    case ACTIVE_PROJECTS_REQUEST:
      return { loading: true, activePjsOrTks: [] };
    case ACTIVE_PROJECTS_SUCCESS:
      return { loading: false, activePjsOrTks: action.payload };
    case ACTIVE_PROJECTS_FAIL:
      return { loading: false, error: action.payload };
    case ACTIVE_TASKS_REQUEST:
      return { loading: true, activePjsOrTks: [] };
    case ACTIVE_TASKS_SUCCESS:
      return { loading: false, activePjsOrTks: action.payload };
    case ACTIVE_TASKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default activeProjectsOrTasksReducer;
