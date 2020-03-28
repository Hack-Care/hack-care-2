const CONSTANTS = require('../constants');
const { MongoClient } = require('mongodb');
const assert = require('assert');

// should read from environment variable for production
const mongoUrl = CONSTANTS.MONGODB.URL;
const database = CONSTANTS.MONGODB.DATABASE;
const username = process.env.DBUSERNAME;
const password = process.env.DBPASSWORD;

const url = `mongodb+srv://${username}:${password}@${mongoUrl}`;

var _db;

module.exports = {
  connectToServer: () => {
    const options = {
        useNewUrlParser: true
    };
    MongoClient.connect(url , options, (err, client) => {
      assert.equal(null, err);
      _db = client.db(database);
    });
  },
  getDb: () => {
    return _db;
  }
};