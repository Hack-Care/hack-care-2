const express = require('express');
const passport = require('passport');
const validator = require('validator');
const mongo = require('../database/mongo');
const bcrypt = require('bcrypt');
const saltRounds = require('../constants').BCRYPT_SALT_ROUNDS;

const router = express.Router();

router.post('/sign-up', async (req, res, next) => {
  if (!validator.isEmail(req.body.email)) return next(new Error('Invalid email!'));
  if (!validator.isLength(req.body.password, { min: 8 })) return next(new Error('Password must be at least 8 characters!'));
  if (req.body.password !== req.body.confirmPassword) return next(new Error('Password does not match!'));
  if (!req.body.interests) return next(new Error('Please select at least one interest!'));

  const collection = mongo.getDb().collection("users");

  const reqToUser = (req, hash) => {
    return {
      email: req.body.email,
      password: hash,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      title: req.body.title,
      occupation: req.body.occupation,
      intro: req.body.intro,
      interests: typeof req.body.interests === 'string' ? [req.body.interests] : req.body.interests 
    }
  }

  const saveNewUser = async (collection, req, res, next) => {
    const hash = await bcrypt.hash(req.body.password, saltRounds);
    const user = reqToUser(req, hash);

    try {
      await collection.insertOne(user);
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    } catch (err) {
      return next(err);
    }
  };

  try {
    const existingUser = await collection.findOne({ email: req.body.email });
    if (existingUser) return next(new Error('User already exists'));
    saveNewUser(collection, req, res, next);
  } catch (err) {
    return next(err);
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect(user.interests.includes('instructor') ? '/CreateClass' : '/');
    });
  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    if (err) console.log('Error : Failed to destroy the session during logout.', err);
    req.user = null;
    res.redirect('/');
  });
});

router.get('/user-email', (req, res) => {
  res.cookie('x-csrf-token', req.csrfToken());
  if (req.user) res.send(req.user.email);
  else res.send(null);
});

module.exports = router;