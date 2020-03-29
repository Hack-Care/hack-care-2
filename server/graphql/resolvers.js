const mongo = require("../database/mongo");
const mongodb = require("mongodb");
const moment = require('moment');

const resolvers = {
    Query: {
        user: async (_, data) => {
            const db = mongo.getDb();
            return await db.collection('users').findOne({email: data.email}).then(res => {return res});
        },
        class: async (_, data) => {
            const db = mongo.getDb();
            return await db.collection('classes').findOne({_id: new mongodb.ObjectID(data.id)}).then(res => { return res });
        },
        classes: async (_, data) => {
            const db = mongo.getDb();
            const query = {};
            if (data.topicClass) query.topicClass = data.topicClass;
            if (data.topic) query.topic = data.topic;
            if (data.instructor) query.hostName = data.instructor;
            const classes = await db.collection('classes').find(query).toArray();
            // TODO should filter in DB query instead, for this maybe we need to store dateTime as Date
            return classes.filter(c => {
                if (data.startDate && moment(data.startDate).isAfter(moment(c.dateTime))) return false;
                if (data.endDate && moment(data.endDate).isBefore(moment(c.dateTime))) return false;
                return true;
            });
        }
    },
    Mutation: {
        createUser: async (_, data) => {
            const db = mongo.getDb();
            const result = await db.collection('users').insertOne({
                "email": data.email,
                "firstName": data.firstName,
                "lastName": data.lastName,
                "title": data.title,
                "occupation": data.occupation,
                "intro": data.intro,
                "profilePicture": data.profilePicture,
                "classes": [],
                "interests": data.interests
            });
            return result.insertedCount === 1;
        },
        createClass: async (_, data) => {
            const db = mongo.getDb();
            const result = await db.collection('classes').insertOne({
                "host": data.host,
                "hostName": data.hostName,
                "dateTime": data.dateTime,
                "duration": data.duration,
                "link": data.link,
                "topicClass": data.topicClass,
                "topic": data.topic,
                "description": data.description
            });
            await db.collection('users').updateOne({_id: new mongodb.ObjectID(data.host)}, {$addToSet: {"classes": result.insertedId}});
            return result.insertedCount === 1;
        },
        addClassToUser: async (_, data) => {
            const db = mongo.getDb();
            const result = await db.collection('users').updateOne({email: data.email}, {$push: {"classes": data.newClass}});
            return result.insertedCount === 1;
        }
    }
  };

  module.exports = resolvers;