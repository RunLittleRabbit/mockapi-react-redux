import { call, put, takeLatest, all } from 'redux-saga/effects';
import { types, actions } from '../../redux/dashboard';

import { getUrlsHelper, addUrlsHelper, updateUrlsHelper } from '../helpers/dashboardHelpers';

function* getUrls() {
  try {
    const responseData = yield call(getUrlsHelper);
    yield put(actions.getUrls.success(responseData));
  } catch (e) {
    yield put(actions.getUrls.failure(e));
  }
}

function* addUrls({ payload }) {
  try {
    yield call(addUrlsHelper, payload);
    yield put(actions.addUrl.success());
    yield put(actions.getUrls.request());
  } catch (e) {
    yield put(actions.addUrl.failure(e));
  }
}

function* updateUrls({ payload }) {
  try {
    yield call(updateUrlsHelper, payload.id, payload.data);
    yield put(actions.updateUrls.success());
    yield put(actions.getUrls.request());
  } catch (e) {
    yield put(actions.updateUrls.failure(e));
  }
}

export default function* () {
  yield all([
    yield takeLatest(types.GET_URLS.REQUEST, getUrls),
    yield takeLatest(types.ADD_URLS.REQUEST, addUrls),
    yield takeLatest(types.UPDATE_URLS.REQUEST, updateUrls),
  ]);
}
