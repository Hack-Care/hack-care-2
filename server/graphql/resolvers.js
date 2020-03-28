const mongo = require("../database/mongo");

const resolvers = {
    Query: {
        user: async () => {
            const db = mongo.getDb();
            return await db.collection('users').find().toArray().then(res => { return res });
        },
        series: async () => {
            const db = mongo.getDb();
            return await db.collection('series').find().toArray().then(res => { return res });
        },
        lesson: async () => {
            const db = mongo.getDb();
            return await db.collection('lessons').find().toArray().then(res => { return res });
        }
    },
    Mutation: {
        createUser: async (_, data) => {
            const db = mongo.getDb();
            const result = await db.collection('users').insert({
                "email": data.email,
                "firstName": data.firstName,
                "lastName": data.lastName,
                "title": data.title,
                "occupation": data.occupation,
                "intro": data.intro,
                "profilePicture": data.profilePicture
            });
            return result.insertedCount === 1;
        },
        createSeries: async (_, data) => {
            const db = mongo.getDb();
            const result = await db.collection('series').insert({
                "hosts": data.hosts,
                "topic": data.topic,
                "description": data.description,
                "lessons": data.lessons
            });
            return result.insertedCount === 1;
        },
        createLesson: async (_, data) => {
            const db = mongo.getDb();
            const result = await db.collection('lessons').insert({
                "series": data.series,
                "hostEmail": data.hostEmail,
                "dateTime": data.dateTime,
                "duration": data.duration,
                "link": data.link,
                "topicClass": data.topicClass,
                "topic": data.topic,
                "description": data.description
            });
            return result.insertedCount === 1;
        }
    }
  };

  module.exports = resolvers;