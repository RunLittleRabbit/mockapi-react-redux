import { post, get, put } from 'axios';
import { URLS, URLS_ID } from '../../constants/api';

export const getUrlsHelper = async () => {
  try {
    const result = await get(URLS);
    return result.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const addUrlsHelper = async (payload) => {
  try {
    const result = await post(URLS, { payload });
    return result.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const updateUrlsHelper = async (id, payload) => {
  try {
    const result = await put(URLS_ID(id), { payload });
    return result.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
