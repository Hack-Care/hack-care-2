const types = `
  type Query {
    user(email: String!): String
    series(id: ID!): Series
    lesson(email: String!): Lesson
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
    ): Boolean
    
    createSeries(
      hosts: String!
      topic: String!
      description: String!
      lessons: String!
    ): Boolean
    
    createLesson(
      series: String
      hostEmail: String!
      dateTime: String!
      duration: String!
      link: String!
      topicClass: String!
      topic: String!
      description: String!
    ): Boolean
  }
  
  type User {
    id: ID!
    email: String!
    firstName: String!
    lastName: String!
    title: Titles!
    occupation: String!
    intro: String
    profilePicture: String
    lessonSeries: [Series]!
  }
  
  type Series {
    id: ID!
    hosts: [User]!
    topic: String!
    description: String!
    lessons: [Lesson]!
  }
  
  type Lesson {
    id: ID!
    series: Series
    hostEmail: String!
    dateTime: String!
    duration: String!
    link: String!
    topicClass: String!
    topic: String!
    description: String!
  }

  type UserUpdateResponse {
    success: Boolean!
    message: String
    user: User
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