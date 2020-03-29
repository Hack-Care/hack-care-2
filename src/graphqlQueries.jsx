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
            interests
        }
    }
`;

QUERIES.GET_CLASSES = gql`
    query {
        classes {
            _id
            host
            hostName
            dateTime
            duration
            link
            topicClass
            topic
            description
        }
    }
`;

export default QUERIES;