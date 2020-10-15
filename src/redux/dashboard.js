import { createReducer, createRequestTypes, createRequestAction, requestHelpers } from './helpers/reduxHelper';

export const NAME = 'dashboard';

const initialState = {
  error: null,
  isFetching: false,
  urls: [],
};

const startFetching = (state) => ({ ...state, isFetching: true });
const requestFailure = (state, { payload }) => ({ ...state, error: payload, isFetching: false, successMessage: null });
const requestSuccess = (state) => ({ ...state, isFetching: false, error: null });
const getListOfUrls = (state, { payload }) => ({ ...state, isFetching: false, error: null, urls: payload });

export const types = {
  GET_URLS: createRequestTypes(`${NAME}/GET_URLS`),
  ADD_URLS: createRequestTypes(`${NAME}/ADD_URLS`),
  UPDATE_URLS: createRequestTypes(`${NAME}/UPDATE_URLS`),
};

export const actions = {
  getUrls: createRequestAction(types.GET_URLS),
  addUrl: createRequestAction(types.ADD_URLS),
  updateUrls: createRequestAction(types.UPDATE_URLS),
};

export const handlers = {
  ...requestHelpers(types.GET_URLS, {
    startFetching,
    requestSuccess: getListOfUrls,
    requestFailure,
  }),
  ...requestHelpers(types.ADD_URLS, {
    startFetching,
    requestSuccess,
    requestFailure,
  }),
  ...requestHelpers(types.UPDATE_URLS, {
    startFetching,
    requestSuccess,
    requestFailure,
  }),
};

export default createReducer(initialState, handlers);
