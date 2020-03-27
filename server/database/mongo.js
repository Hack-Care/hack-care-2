const CONSTANTS = require('../constants');
const { MongoClient } = require('mongodb');

// should read from environment variable for production
const mongoUrl = CONSTANTS.MONGODB.URL;
const database = CONSTANTS.MONGODB.DATABASE

const url = `mongodb://${mongoUrl}`;

var _db;

module.exports = {
  connectToServer: callback => {
    const options = {
        useNewUrlParser: true
    };
    MongoClient.connect(url , options, (err, client) => {
      _db = client.db(database);
      return callback(err);
    });
  },
  getDb: () => {
    return _db;
  }
};