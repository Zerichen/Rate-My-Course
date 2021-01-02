# Rate My Course

## Overview 
For college students, selecting courses for their next semster is one of the most important things throughout a semester. However, most course registration websites only provide little information which makes it harder for them to make decisions. Though the definition of a "good" course may vary from different people, we can help them know more about a certain course by presenting additional information from different perspectives.

**Rate My Course is a web app that provides such kind of service as described above for NYU Computer Science department**. Users can register and login. Once they are logged in, they can either view or comment the courses provided by NYU.

## Data Model
The application will use MongoDB to store user, course and Comment.

* User:
    * Each users will have a username and a password(hashed and salted).
    * Each user will have a history that stores his/her own comment.
* Course:
    * Each course will have an ID, a name, a description, a credit number, time, location, professor, prerequisite and also our review.
* Comment:
    * Each comment will have a comment ID and also keep the course ID, the commenter's username and the corresponding time. The comment will cover the topics about workload, teaching style as well as the exam. Besides, we will also record the benefit after taking this course. 

* User mongoDB setup code:
```javascript 
{
    username: //account username
    password: //account password that has been hashed and salted
    comments: //an array that holds the commnet ID of users' comment, which references the Comment
    shoppingCart: //an array of course ID that referecnes Course (!! Currently not used in this project)
}
```

* Course mongoDB setup code:
```javascript
{
    id: //unique ID
    name: //course name
    description: //course description
    credit: //the credit of this course
    location: //building of this course
    professor: //the name of the professor
    prerequisite: //another course ID and course name
    review: // an array of comments references Comment
}
```

* Comment mongoDB setup code:
```javascript
{
    id: //unique id
    courseID: //references the course ID in Course
    commenter: //references the username in User
    time: //time of this comment being submitted
    comment: //an object that has the following property: workload, teaching style, exam, benefit.

}
```
  
## Wireframes
* /home - the index page of the website, can login in the homepage
![home-page-interface](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/Zerichen-final-project/blob/master/documentation/home.png)

* /home/register - the registration page
![register-page-interface](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/Zerichen-final-project/blob/master/documentation/home-register.png)
  
* /courses - the page that displays all the courses
![course-page-interface](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/Zerichen-final-project/blob/master/documentation/courses.png)
  
* /courses/reviews - the page that shows the specific review of a certain courses
![reviews-page-interface](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/Zerichen-final-project/blob/master/documentation/courses-reviews.png)

* /profile - the page that shows the user information on this website
![profile-page-interface](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/Zerichen-final-project/blob/master/documentation/profile.png)

## Site map
![site-map](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/Zerichen-final-project/blob/master/documentation/site-map.png)

## Users stories or use cases
* All user must logged in to use this website.
* As a registered user, I can search, view courses and comments and also add my own comments.
* As a registered user, I can view my comments history.

## Research topics
(6 points) Integrate user authentication:
  * Passport modules for user authentication
  * This is for determining whether the user exists and the corresponding user type.
  * see `/` for login
  * see `/register` for registration

(2 points) CSS preprocesser:
  * Modules I might use: Sassm, Less, Myth
  * Better user experience for the webiste
  * A good practice of CSS

