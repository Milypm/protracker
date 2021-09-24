import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import currentUserReducer from './reducers/currentUser';
import dashboardPanelReducer from './reducers/dashboardPanel';
import activeProjectsOrTasksReducer from './reducers/activeProjectsOrTasks';
import projectOrDevTasksReducer from './reducers/projectOrDevTasks';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  dashboardPanel: dashboardPanelReducer,
  activeProjectsOrTasks: activeProjectsOrTasksReducer,
  projectOrDevTasks: projectOrDevTasksReducer,
});

const initialState = {};

const middleware = [thunk];

const setStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  return store;
};
export default setStore;
