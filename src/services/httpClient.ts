/* eslint-disable no-param-reassign */
import axios from 'axios';

import { delay } from '../utils/delay';

export const httpClient = axios.create({
  baseURL: 'http://localhost:3001',
});

httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

httpClient.interceptors.response.use(async (data) => {
  await delay(500);

  return data;
});
