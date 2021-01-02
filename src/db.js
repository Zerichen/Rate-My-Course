const MONGODB_URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    id: String,
    courseId: String,
    commenter: String,
    date: String,
    comment: String
}, { collection: "Comment" });

const courseSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    credit: String,
    time: String,
    location: String,
    professor: String,
    prerequisite: String,
    review: [commentSchema]
}, { collection: "Course" });

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    comments: [commentSchema],
    shoppingCart: [courseSchema]
}, { collection: "User" });



mongoose.model('User', userSchema);
mongoose.model('Course', courseSchema);
mongoose.model('Comment', commentSchema);
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
// mongoose.connect('mongodb://localhost/final',  {useNewUrlParser: true});