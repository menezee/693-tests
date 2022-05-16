# [backend] 693 - tests

## to spin up database
```shell
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=password mongo
```

## to run load tests

if you don't have the database running, comment `db.connect` on `src/index.js`. \
spin up the backend
```shell
npm start
```

and run
```shell
npm run load --url=http://localhost:3001/load

# this will output a results.json that will be used for creating the dashboard with:
npm run load:report
```
