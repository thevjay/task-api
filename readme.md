
docker build -t task-api:local .
docker run --rm -p 3000:3000 task-api:local

npm install express
npm install --save-dev jest supertest eslint@8

express: your HTTP API.
jest: runs automated tests.
supertest: tests HTTP endpoints without manually starting the server.
eslint: checks JavaScript code quality.

