# Test project

This is a small full-stack demo application built with NestJS and React. The backend was built in a couple of days, while the frontend only took a couple of hours to create.

Users can:

- List orders
- View order change history
- Create a new dummy order
- Add a manager to an order
- Change the status of an order (Open -> InProgress -> Complete)

The application includes:

- A few NestJS modules for the backend
- A GraphQL server
- Some validation
- A few frontend screens
- Frontend types generated from GraphQL schema
- A Docker container with MongoDB
- Basic configuration for backend and frontend

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

To generate GraphQL typings, run:

```
cd react-nestjs-demo-test-fe
yarn graphql-codegen --watch
```
