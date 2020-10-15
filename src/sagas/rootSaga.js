import { all, call } from 'redux-saga/effects';
import DashboardSaga from './dashboard';

export default function* rootSaga() {
  yield all([call(DashboardSaga)]);
}
