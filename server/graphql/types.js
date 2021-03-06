const types = `
  type Query {
    user(email: String!): User
    class(email: String!): Class
    classes(
      topic: String
      topicClass: String
      hostName: String
      startDate: String
      endDate: String
    ): [Class]
    hostingClasses(email: String!): [Class]
  }
  
  type Mutation {
    createUser(
      email: String!
      firstName: String!
      lastName: String!
      title: Titles!
      occupation: String!
      intro: String
      profilePicture: String
      classes: [ID]!
      interests: [String]!
    ): Boolean
    
    createClass(
      host: ID!
      hostName: String!
      dateTime: String!
      duration: String!
      link: String!
      topicClass: String!
      topic: String!
      description: String!
    ): Boolean
    
    addClassToUser(
      host: ID!
      newClass: ID!
    ): Boolean
  }
  
  type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    title: Titles!
    occupation: String!
    intro: String
    profilePicture: String
    classes: [ID]!
    interests: [String]!
  }
  
  type Class {
    _id: ID!
    host: ID!
    hostName: String!
    dateTime: String!
    duration: String!
    link: String!
    topicClass: String!
    topic: String!
    description: String!
  }

  enum Titles {
    MR
    MRS
    MISS
    DR
    MDM
    MS
  }
`;

module.exports = types;