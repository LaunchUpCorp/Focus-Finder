import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation($email: String, $password: String) {
    createUser (email: $email, password: $password)
  }
`;
