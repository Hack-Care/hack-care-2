import gql from "graphql-tag";

const MUTATIONS = {};

MUTATIONS.CREATE_CLASS = gql`    
    mutation createClass (
        $host: ID!
        $hostName: String!
        $dateTime: String!
        $duration: String!
        $link: String!
        $topicClass: String!
        $topic: String!
        $description: String!
    ) {
        createClass(
            host: $host
            hostName: $hostName
            dateTime: $dateTime
            duration: $duration
            link: $link
            topicClass: $topicClass
            topic: $topic
            description: $description
        )
    }
`;

MUTATIONS.ADD_CLASS_TO_USER = gql`
    mutation addClassToUser (
        $host: ID!
        $newClass: ID!
    ) {
        addClassToUser(
            host: $host
            newClass: $newClass
        )
    }
`;

export default MUTATIONS;