## Description

This is a backend server for Focus-Finder built with nest.js. To learn about nest.js and how to use it with GraphQL, visit: https://docs.nestjs.com/graphql

## ENV 
``` bash
DATABASE_URL=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
```

## Available APIs

Currently, CRUD operations on `Users` are available for testing purposes. You can connect to your local Postgres db and test the queries.

### Examples

#### Get User
```
query {
  user(id: 2) {
    id
    email
  }
}
```

#### Create User
```
mutation {
  createUser(createUserData: {email: "test1@example.com"}) {
    id
    email
  }
}
```

#### Update User
```
mutation {
  updateUser(updateUserData: {id:2, email: "test2@example.com"}) {
    id
    email
  }
}
```

#### Delete User
```
mutation {
  deleteUser(deleteUserData: {id: 1}) {
    id
    email
  }
}
```

## Auth
- Every Query or Mutation is protected and requires `{"authorization": "Bearer TOKEN"}` on the http header to complete the request. 
- There are exceptions if the Query or Mutation are using the `@Public` decorator, where http header `{"authorization": "Bearer TOKEN"}` is not required
### Signup (Public)
This mutation requires a query input `{"input": { "email": "EMAIL_HERE", "password": "SECRET_HERE" } }`
```
mutation Signup($input: SignupInput!) {
  signup(signupInput: $input) {
    accessToken
    refreshToken
    user {
      email
      id
    }
  }
}
```
### Signin (Public)

This mutation requires a query input `{"input": { "email": "EMAIL_HERE", "password": "SECRET_HERE" } }`
```
mutation Signin($input: SigninInput!) {
  signin(signinInput: $input) {
    accessToken
    refreshToken
    user {
      email
      id
    }
  }
}
```

### GetNewTokens

This mutation requires a http header `{"authorization": "Bearer REFRESH_TOKEN" }`
```
mutation GetNewTokens {
	getNewTokens{accessToken, refreshToken}
}
```


## Test instructions
- Make sure PostgreSQL is installed and running on your machine. (See docs for installation: https://www.postgresql.org/download/)
- Create .env file and copy contents in .env.example and update values to your own.
- Run `npm install` to install dependencies.
- Run `npx prisma migrate dev` to apply migrations. (To learn more about Prisma, visit: https://www.prisma.io/docs)
- Run `npm run start`(development) or `npm run start:dev`(watch mode) to run server on `localhost:3000`.
- Visit `localhost:3000/graphql` to test APIs in the playground.
