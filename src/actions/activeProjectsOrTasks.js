import axios from 'axios';
import {
  ACTIVE_PROJECTS_REQUEST,
  ACTIVE_PROJECTS_SUCCESS,
  ACTIVE_PROJECTS_FAIL,
  ACTIVE_TASKS_REQUEST,
  ACTIVE_TASKS_SUCCESS,
  ACTIVE_TASKS_FAIL,
} from './types';

export const getActiveProjects = (userId) => async (dispatch) => {
  try {
    dispatch({ type: ACTIVE_PROJECTS_REQUEST });
    const response = await axios.get('http://localhost:3001/projects');
    const { data } = response;
    const { projects } = data;
    const userProjects = [];
    projects.forEach((project) => {
      if (project.user_id === userId && project.status !== 'Closed') {
        userProjects.push(project);
      }
    });
    dispatch({ type: ACTIVE_PROJECTS_SUCCESS, payload: userProjects });
  } catch (error) {
    dispatch({
      type: ACTIVE_PROJECTS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
  return '';
};

export const getActiveTasks = (userName) => async (dispatch) => {
  try {
    dispatch({ type: ACTIVE_TASKS_REQUEST });
    const userTasks = [];
    const response = await axios.get('http://localhost:3001/project_tasks');
    const { data } = response;
    const { projecTasks } = data;
    projecTasks.forEach((pTask) => {
      if (pTask.assigned_to === userName && pTask.status !== 'Closed') {
        userTasks.push(pTask);
      }
    });
    dispatch({ type: ACTIVE_TASKS_SUCCESS, payload: userTasks });
  } catch (error) {
    dispatch({
      type: ACTIVE_TASKS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
  return '';
};
