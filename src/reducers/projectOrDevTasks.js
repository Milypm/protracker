import {
  PROJECT_TASKS_REQUEST,
  PROJECT_TASKS_SUCCESS,
  PROJECT_TASKS_FAIL,
  DEV_TASK_REQUEST,
  DEV_TASK_SUCCESS,
  DEV_TASK_FAIL,
} from '../actions/types';

const projectOrDevTasksReducer = (state = { proOrDevTasks: [] }, action) => {
  switch (action.type) {
    case PROJECT_TASKS_REQUEST:
      return { ...state, loading: true, proOrDevTasks: {} };
    case PROJECT_TASKS_SUCCESS:
      return { ...state, loading: false, proOrDevTasks: action.payload };
    case PROJECT_TASKS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case DEV_TASK_REQUEST:
      return { ...state, loading: true, proOrDevTasks: {} };
    case DEV_TASK_SUCCESS:
      return { ...state, loading: false, proOrDevTasks: action.payload };
    case DEV_TASK_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default projectOrDevTasksReducer;
