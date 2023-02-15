# Test project

Just a small fullstack demo application build with Nestjs and React. Backend was built in couple of days, frontend in couple of hours.

User can:  
- list orders
- see order change history
- create new dummy order
- add manager to the order
- change status of the order (Open -> InProgress -> Complete)

App includes:
- few backend NestJS modules
- GraphQL server
- some validation
- few frontend screens
- frontend types are generated from graphql schema
- docker container with MongoDB
- basic configuration for backend and frontend

# Installation

## Mongodb

```
cd react-nestjs-demo-test-be
docker-compose up
```

create db user

## Backend

```
cd react-nestjs-demo-test-be
yarn install
```

add `.env.development` file with `MONGODB_URL` variable

```
yarn start:dev
```

## Frontend

```
cd react-nestjs-demo-test-fe
yarn install
yarn start
```

to start codegen for generating graphql typings:

```
cd react-nestjs-demo-test-fe
yarn graphql-codegen --watch
```
