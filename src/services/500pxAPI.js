// @flow
import { create } from 'apisauce';

import type {
  AuthResponse,
  ImagesResponse,
  ImageDetailsResponse,
} from '../types/500pxApi-responses';

const API_KEY = '23567b218376f79d9415'; // other valid API keys: '760b5fb497225856222a', '0e2a751704a65685eefc'
const API_ENDPOINT = 'http://195.39.233.28:8035';

const client = create({
  baseURL: API_ENDPOINT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export async function getAuthorization() {
  const response: AuthResponse = await client.post('/auth', {
    apiKey: API_KEY,
  });

  if (response.data?.auth) {
    client.setHeader('Authorization', `Bearer ${response.data.token}`);
    return true;
  }

  return false;
}

export async function getPictures(page: number = 1) {
  try {
    await getAuthorization();

    const response: ImagesResponse = await client.get('/images', { page });

    return response.data;
  } catch (error) {
    return error.message;
  }
}

export async function getPictureDetails(id: number) {
  try {
    const response: ImageDetailsResponse = await client.get(`/images/${id}`);

    return response.data;
  } catch (error) {
    return error.message;
  }
}
