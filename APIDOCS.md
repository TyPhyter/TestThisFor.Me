# TestThisFor.Me API Docs
A brief rundown of the routes in our API

## Routes

### User
---
* POST '/users'
  * expects body:
```javascript
    {
        "email" : 'emailas@string.com'
        "pass" : 'passString'
    }
    //using findOrCreate here so vvv
    //returns an array, [0] is user object, [1] is boolean representing if the user was newly created or simply found
```


* GET '/users/:id?'
  * '/users' returns all users
  * '/users/1' returns user with id 1


### Project
---
* POST '/projects'
  * expects body:
```javascript
    {
        "title" : 'titleString'
        "body" : 'bodyString',
        "repoUrl" : 'http://repoUrl.com',
        "hostedUrl" : 'http://hostedUrl.com',
        "UserId" : 1 // an integer, who the project belongs to
    }
    // returns the project object
```

* GET '/projects/:id?'
  * '/projects' returns all projects
  * '/projects/1' returns project with id 1

* GET '/projects/user/:id'
  * '/projects/user/1' returns projects by user with id 1

### Test
---
* POST '/tests'
  * expects body:
```javascript
    {
        "title" : 'titleString'
        "body" : 'bodyString',
        "UserId" : 1, // an integer
        "ProjectId" : 1 //an integer
    }
    //returns the test object
```

* GET '/tests/:id?'
  * '/tests' returns all tests
  * '/tests/1' returns test with id 1

* GET '/tests/project/:id'
  * '/tests/project/1' returns all tests associated with project with id 1

* GET '/tests/user/:id'
  * '/tests/user/1' returns all tests associated with user with id 1