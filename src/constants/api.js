import { config } from './constants';

export const { BASE_URL } = config;

export const URLS = `${BASE_URL}/urls`;
export const URLS_ID = (id) => `${BASE_URL}/urls/${id}`;
