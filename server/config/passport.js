const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const mongo = require('../database/mongo');
const bcrypt = require('bcrypt');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  const collection = mongo.getDb().collection("users");
  try {
    const existingUser = await collection.findOne({email: user.email});
    if (!existingUser) return done(new Error('user not found'));
    done(null, existingUser);
  } catch (err) {
    done(err);
  }
});

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  const collection = mongo.getDb().collection("users");
  try {
    const user = await collection.findOne({email: email.toLowerCase()});
    if (!user) return done(null, false, { msg: `Email ${email} not found.` });
    const matched = bcrypt.compareSync(password, user.password);
    if (matched) done(null, user);
    else done(null, false, { msg: 'Invalid email or password.' });
  } catch (err) {
    done(err);
  }
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