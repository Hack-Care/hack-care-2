const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const mongo = require('../database/mongo');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  const collection = mongo.getDb().collection("users");
  collection.findOne({ email: user.email }, {}, (err, user) => {
    done(err, user);
  });
});

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  const collection = mongo.getDb().collection("users");
  collection.findOne({email: email.toLowerCase()}, {}, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { msg: `Email ${email} not found.` });
    }
    if (user.password == password) {
      done(null, user);
    } else {
      done(null, false, { msg: 'Invalid email or password.' });
    }
  });
}));

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};