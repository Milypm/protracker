import axios from 'axios';
import {
  PROJECT_TASKS_REQUEST,
  PROJECT_TASKS_SUCCESS,
  PROJECT_TASKS_FAIL,
  DEV_TASK_REQUEST,
  DEV_TASK_SUCCESS,
  DEV_TASK_FAIL,
} from './types';

export const getProjectTasks = (projectId) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_TASKS_REQUEST });
    const res = await axios.get('http://localhost:3001/project_tasks');
    const { data } = res;
    const projectTasks = [];
    data.forEach((pTask) => {
      if (pTask.project_id === projectId && pTask.status !== 'Closed') {
        projectTasks.push(pTask);
      }
    });
    dispatch({ type: PROJECT_TASKS_SUCCESS, payload: projectTasks });
  } catch (error) {
    dispatch({
      type: PROJECT_TASKS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
  return '';
};

export const getDevTask = (pTaskId) => async (dispatch) => {
  try {
    dispatch({ type: DEV_TASK_REQUEST });
    const data = await axios.get(`http://localhost:3001/project_tasks/${pTaskId}/dev_tasks`);
    dispatch({ type: DEV_TASK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DEV_TASK_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
  return '';
};
