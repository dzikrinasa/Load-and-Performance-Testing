import http from 'k6/http';
import { BASE_URL } from '../config/config.js';

export function login(payload) {
  const url = `${BASE_URL}/auth/login`;

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return http.post(url, JSON.stringify(payload), params);
}