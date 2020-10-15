import { createSelector } from 'reselect';
import { NAME } from '../redux/dashboard';

const selectDashboard = (state) => state[NAME];

export const selectError = createSelector(selectDashboard, ({ error }) => error);
export const fetchingState = createSelector(selectDashboard, ({ isFetching }) => isFetching);
export const selectUrls = createSelector(selectDashboard, ({ urls }) => urls);
