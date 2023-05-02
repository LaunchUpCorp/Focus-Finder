## Description

This is a backend server for Focus-Finder built with nest.js. To learn about nest.js and how to use it with GraphQL, visit: https://docs.nestjs.com/graphql

## Tech Stack
- Nest.js
- GraphQL APIs with Apollo server
- PostgreSQL
- Prisma

## Available APIs

- Create browsing activity of a user
- CRUD operations on `User` 

### Examples

#### Create Activity
```
mutation {
  createActivity(createActivityData: {
    url: "https://google.com",
    startTime: 1683034649000,
    endTime: 1683034750000,
    userId: 3,
  }) {
    id
    url
    startTime
    endTime
    userId
  }
}```

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

## Test instructions
- Make sure PostgreSQL is installed and running on your machine. (See docs for installation: https://www.postgresql.org/download/)
- Create .env file and copy contents in .env.example and update values to your own.
- Run `npm install` to install dependencies.
- Run `npx prisma migrate dev` to apply migrations. (To learn more about Prisma, visit: https://www.prisma.io/docs)
- Run `npm run start`(development) or `npm run start:dev`(watch mode) to run server on `localhost:3000`.
- Visit `localhost:3000/graphql` to test APIs in the playground.
- You can see database records in Prisma Studio by running `npx prisma studio`. For more informaion on Prisma Studio visit https://www.prisma.io/docs/concepts/components/prisma-studio

