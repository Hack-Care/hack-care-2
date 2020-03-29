import gql from "graphql-tag";

const QUERIES = {};

QUERIES.GET_USER_NAME = gql`
    query ($email: String!) {
        user(email: $email) {
            firstName
        }
    }
`;

QUERIES.GET_USER_ID = gql`
    query ($email: String!) {
        user(email: $email) {
            _id
        }
    }
`;

QUERIES.GET_USER_BASIC_INFO = gql`
    query ($email: String!) {
        user(email: $email) {
            _id
            firstName
            lastName
        }
    }
`;

export default QUERIES;