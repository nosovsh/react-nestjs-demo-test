# Test project

Build with Nestjs and React

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
