# Load-and-Performance-Testing

## Install

#### 1. Install k6
- Mac:
  `brew install k6`

- Windows:
  `choco install k6`

- Verify:
  `k6 version`

---

#### 2. Clone The Repository
`https://github.com/dzikrinasa/Load-and-Performance-Testing.git`

---

#### 3. Navigate to Project Folder
`cd Load-and-Performance-Testing`

---

#### 4. Install Dependencies
`npm install`

---

## Running the tests

Run load test:
`k6 run tests/login.test.js`

---

## Test Scenario

- 50 concurrent users
- Duration: 30 seconds
- Endpoint: POST /auth/login
- Validate:
  - Status code = 200
  - p95 response time < 1000ms
  - Error rate < 1%

---
