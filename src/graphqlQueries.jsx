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

QUERIES.GET_ALL_USER_INFO = gql`
    query ($email: String!) {
        user(email: $email) {
            _id
            firstName
            lastName
            title
            occupation
            intro
            interests
        }
    }
`;

QUERIES.GET_CLASSES = gql`
    query (
        $topic: String
        $topicClass: String
        $hostName: String
        $startDate: String
        $endDate: String
    ) {
        classes(
            topic: $topic
            topicClass: $topicClass
            hostName: $hostName
            startDate: $startDate
            endDate: $endDate
        ) {
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

QUERIES.GET_HOSTING_CLASSES = gql`
    query ($email: String!){
        hostingClasses(email: $email) {
            _id
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