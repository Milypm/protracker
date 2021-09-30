import { PM_DASHBOARD_PANEL, DEV_DASHBOARD_PANEL } from '../actions/types';

export const dashboardPanelProjectsReducer = (state = { dashboardDisplay: '' }, action) => {
  switch (action.type) {
    case PM_DASHBOARD_PANEL:
      console.log('dashboardPanel reducer');
      return { dashboardDisplay: action.payload };
    default:
      return state;
  }
};
export const dashboardPanelTasksReducer = (state = { dashboardDisplay: '' }, action) => {
  switch (action.type) {
    case DEV_DASHBOARD_PANEL:
      return { dashboardDisplay: action.payload };
    default:
      return state;
  }
};
// const dashboardPanelReducer = (state = { dashboardDisplay: '' }, action) => {
//   switch (action.type) {
//     case PM_DASHBOARD_PANEL:
//       console.log('dashboardPanel reducer');
//       return { dashboardDisplay: action.payload };
//     case DEV_DASHBOARD_PANEL:
//       return { dashboardDisplay: action.payload };
//     default:
//       return state;
//   }
// };
// export default dashboardPanelReducer;
