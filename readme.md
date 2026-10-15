
docker build -t task-api:local .
docker run --rm -p 3000:3000 task-api:local