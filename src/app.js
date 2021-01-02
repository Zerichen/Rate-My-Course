require('./db.js');
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Course = mongoose.model('Course');
const User = mongoose.model('User');
const Comment = mongoose.model('Comment');
// Use middleware to access the frontend Angular distribution file
// const frontendPath = path.resolve(__dirname, '../frontend/dist/frontend');
const frontendPath = path.resolve(__dirname, './dist/frontend');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
// const publicPath = path.resolve(__dirname, 'public');
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, "views"));


// Some reference code from the website
// http://www.passportjs.org/docs/username-password/
// https://github.com/jaredhanson/passport-local
// https://stackoverflow.com/questions/34511021/passport-js-missing-credentials
// https://stackoverflow.com/questions/31407425/passport-js-always-executing-failureredirect
// Configure the registration part of passport
passport.use('register', new LocalStrategy({passReqToCallback: true},
  function (req, username, password, callback) {
      if (password.length < 6) {
          return callback('The length of your passoword must be at least 4');
      } else {
          User.findOne({"username": username}, (err, result, count) => {
            if (err) { 
                return callback(err); 
            } else if (result) { 
                return callback('Username already been taken');
            } else {
                bcrypt.hash(password, 10, (err, hash) => {
                    const newUser = new User({
                        username: username,
                        password: hash,
                        comments: [],
                        shoppingCart: []
                    });
                    newUser.save((err, user, count) => {
                        if (err) {
                            console.log(err);
                        } else {
                            req.session.user = user;
                            return callback(null, user);
                        }
                    });
                });
            }
          });
      }
  }
));

// Configure the login part of passport
passport.use('login', new LocalStrategy({passReqToCallback: true},
  function (req, username, password, callback) {
      User.findOne({"username": username}, (err, result, count) => {
          if (err) {
              return callback(err);
          } else if (!result) {
              return callback('This user does not exist');
          } else {
              bcrypt.compare(password, result.password, (err, passwordCorrect) => {
                if (passwordCorrect) {
                    req.session.user = result;
                    return callback(null, result);
                } else {
                    return callback('Wrong password');
                }
              });
          }
      });
  }
));

// Set up serialization for the user(session)
passport.serializeUser(function(user, callback) {
  callback(null, user._id);
});

passport.deserializeUser(function(id, callback) {
  User.find({"_id": id}, (err, user) => {
      callback(err, user);
  });
});


app.use(express.static(frontendPath));
app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret: 'add session secret here!',
    resave: false,
    saveUninitialized: true,
}));

app.use((req, res, next) => {
    if (req.session.user !== undefined) {
        res.locals.user = req.session.user;
    }
    next();
});

// User registration
app.post('/register', (req, res) => {
    passport.authenticate('register', function(err, user) {
        if (err) {
            res.send({ "error": err });
        } else {
            res.send(user);
        }
    })(req, res);
});


// User login
app.post('/login', (req, res) => {
    passport.authenticate('login', function(err, user) {
        if (err) {
            res.send({ "error": err });
        } else {
            res.send(user);
        }
    })(req, res);
});


// Get all courses list
app.get('/course', (req, res) => {
    if (!res.locals.user) {
        res.redirect('/');
    } else {
        Course.find({}, (err, result, count) => {
            if (err) {
                res.redirect('/');
            } else {
                res.send(result);
            }
        }); 
    }
});


// Get a specific course information
app.get('/course/:courseid', (req, res) => {
    if (!res.locals.user) {
        res.redirect('/');
    } else {
        const courseID = req.params.courseid;
        Course.find({"id": courseID}, (err, result, count) => {
            if (err) {
                res.redirect('/');
            } else {
                res.send(result);
            }
        }); 
    }
});

// Add a comment for a course from a specific user
app.post('/comment', (req, res) => {
    let tempComment = req.body;
    let courseID = '';
    let userID = '';
    Comment.find({}, (err, result) => {
        const newId = result.length + 1;
        courseID = tempComment.courseId;
        userID = tempComment.commenter;
        const newComment = new Comment({
            'id': newId.toString(),
            'courseId': tempComment.courseId,
            'commenter': tempComment.commenter,
            'date': tempComment.date,
            'comment': tempComment.comment
        });
        newComment.save((err, comment, count) => {
            if (err) {
                console.log(err);
            } else {
                Course.findOne({"id": courseID}, (err, result) => {
                    if (err) { console.log(err); }
                    else {
                        Course.findOneAndUpdate({'id': courseID}, {$push: {'review': newComment}}, {new: true}, (err, result) => {
                            if (err) { console.log(err); } 
                            else { console.log(result); }
                        });
                        User.findOneAndUpdate({'username': userID}, {$push: {'comments': newComment}}, {new: true}, (err, result) => {
                            if (err) { console.log(err); } 
                            else { console.log(result); }
                        });
                    }
                
                });
                res.send(comment);
            }
        });
    });
});

// Handle all the other request
app.get('*', (req, res) => {
    res.redirect('/');
})



let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

console.log('port', port);
app.listen(port);

