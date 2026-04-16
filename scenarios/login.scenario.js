import { check } from 'k6';
import { login } from '../services/auth.service.js';
import { USERS } from '../config/config.js';

export function loginScenario() {
  const res = login(USERS.valid);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time reasonable': (r) => r.timings.duration < 1000,
  });
}