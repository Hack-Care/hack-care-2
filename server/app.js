const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const passport = require('passport');
const csrf = require('csurf');
const { ApolloServer, gql } = require('apollo-server-express');
const path = require("path");
const cookieParser = require("cookie-parser");	
const logger = require("morgan");

const mongo = require("./database/mongo");
/**
 * Connect to mongo server
 */
mongo.connectToServer();

/**
 * Passport config
 */
const passportConfig = require('./config/passport');

// Construct a schema, using GraphQL schema language
const types = require("./graphql/types");
const typeDefs = gql(types);

const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

app.use(logger("dev"));
app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(csrf({ cookie: true }))
app.use(express.static(path.resolve(__dirname, "build")));
app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

const indexRouter = require("./routes/index");

app.use("/api", indexRouter);
app.get("*", (req, res) => {
  res.cookie('x-csrf-token', req.csrfToken());
  res.sendFile("build/index.html", { root: __dirname });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// TODO Web Template Studio: Add your own error handler here.
if (process.env.NODE_ENV === "production") {
  // Do not send stack trace of error message when in production
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send("Error occurred while handling the request.");
  });
} else {
  // Log stack trace of error message while in development
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.send(err.message);
  });
}

module.exports = app;
