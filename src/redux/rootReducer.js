import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import dashboard, { NAME as DashboardReducer } from './dashboard';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    [DashboardReducer]: dashboard,
  });

export default rootReducer;
