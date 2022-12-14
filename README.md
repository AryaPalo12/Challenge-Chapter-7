# Chapter 7 Challenge
-=============================-<br>
This repository contains API to create a simple REST API, that function as a user
management API, the authentication, and Blog post creation.

The function includess :
- User : user creation, user edit (password, username)
- Auth : login
- Post : view posts, create posts, edit posts

## Table of contents 
**[General info] (#general-info)**<br>
**[Prerequisities] (#prerequisites)**<br>
**[Technologies] (#technologies)**<br>
**[Setup] (#setup)**<br>
**[Function] (#function)**<br>

## General info
This porject is a simple testing for REST API function to create input to a database system,
here in this project postgresql, to mimic usual blog website function.

## Technologies
Project is created with :
* Node Js
* PostgreSql DB

## Prerequisites 
1. Node Js
2. Postman or other alternative to test HTML method
3. Postgresql DB

## Setup
To run this project, open terminal and run below in your directory:
```
cd ../this_repo_directory
npm install 
npm run dev
npx sequelize-cli db:migrate
```

## Function
1. User :
    1. path : user/register
        * POST Method
        * request body needed : fullname, email, password.
    2. path : user/:userId
        Token is needed for this function
        * PUT Method
        * request body needed ; fullname, password.
2. Auth :
    1. path : auth/login
        * POST Method
        * request body : email, password
3. Post :
    1. path : user/posts/:writerId
        * GET Method
        * optional params : writerId
        * queries function : page, limit, sort, search
    2. path : user/posts
        Token is needed for this function
        * POST Method
        * request body needed : title, imageUrl, body
    3. path: user/posts/:postId
        Token is needed for this function
        * PUT Method
        * request body needed : title, imageUrl, body
4. API Docs :
    1. path : api-docs