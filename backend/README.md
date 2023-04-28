## Description

This project is a backend server for Focus-Finder built with nest.js.

## Available APIs

Currently, CRUD operation on `Users` is available for testing purposes. Database is not implemented, so data is not persistent.

### Examples

#### Get User
```
query {
  user(userId: 2) {
    userId
    email
  }
}
```

#### Create User
```
mutation {
  createUser(createUserData: {email: "test1@example.com"}) {
    userId
    email
  }
}
```

#### Update User
```
mutation {
  updateUser(updateUserData: {userId:2, email: "test2@example.com"}) {
    userId
    email
  }
}
```

#### Delete User
```
mutation {
  deleteUser(deleteUserData: {userId: 1}) {
    userId
    email
  }
}
```

## Test instructions
- Run `npm install` to install dependencies.
- Run `npm run start`(development) or `npm run start:dev`(watch mode) to run server on `localhost:3000`.
- Visit `localhost:3000/graphql` to test APIs in the playground.
