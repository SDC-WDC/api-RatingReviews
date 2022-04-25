import http from 'k6/http';
import { sleep } from 'k6';


export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '30s', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes
    { duration: '1m', target: 100 },// stay at 100 users for 10 m
    { duration: '10s', target: 0 },   // ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(99)<150'], // 99% of requests must complete below 150ms.
  }
};

const URL = 'http://localhost:3504';


export default () => {

  http.batch([
    ['GET', `${URL}/products/1`],
    ['GET', `${URL}/products/1/styles`],
  ])

  sleep(1);
}