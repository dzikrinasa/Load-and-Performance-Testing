import { loginScenario } from '../scenarios/login.scenario.js';
import { sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<1000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  loginScenario();
  sleep(1);
}