const { checkSchema } = require('express-validator')
const express = require('express');
const verifyToken = require('../middleware/token.verification');
const postControllers = require('./post.controller');
const postRouter = express.Router();
const validators = require("../middleware/validator");
const { validResult } = require('../middleware/validation.result.js');

/**
  * @swagger
  * /user/posts/{writerId}:
  *  get:
  *    security:
  *      - bearerAuth : []
  *    tags:
  *      - posts
  *    summary: Get Post API
  *    parameters:
  *      - in : path
  *        name: writerId
  *        schema:
  *         type: string
  *      - in : query
  *        name : sort
  *        schema:
  *         type: string
  *         example: DESC or ASC
  *      - in : query
  *        name : page
  *        schema:
  *         type: number
  *         example: 1
  *      - in : query
  *        name : limit
  *        schema:
  *         type: number
  *         example: 5
  *      - in : query
  *        name : search
  *        schema:
  *         type: string
  *         example: 'why does my cat?'
  *    responses:
  *      '200':
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                id:
  *                  type: number
  *                  example: 2
  *                title:
  *                  type: string
  *                  example: Lorem Ipsum
  *                image_url:
  *                  type: string
  *                  example: www.LoremIpsum.com
  *                body:
  *                  type: string
  *                  example: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie lobortis erat, 
  *                user_id:
  *                  type: number
  *                  example: 1
  *                updatedAt:
  *                  type: string
  *                  example: 2022-08-14T15:59:09.950Z
  *                createdAt:
  *                  type: string
  *                  example: 2022-08-14T15:59:09.950Z
  */
 postRouter.get("/user/posts/:writerId?", postControllers.getPost);

 /**
  * @swagger
  * /user/posts:
  *  post:
  *    security:
  *      - bearerAuth : []
  *    tags:
  *      - posts
  *    summary: Create new post API
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              title:
  *                type: string
  *                example: Andy Bernard
  *              imageUrl:
  *                type: string
  *                example: www.examplepictures.com/etc.jpg,
  *              body:
  *                type: string
  *                example: Lorem Ipsum Dolor Sit Amet
  *    responses:
  *      '200':
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                id:
  *                  type: number
  *                  example: 2
  *                title:
  *                  type: string
  *                  example: Lorem Ipsum
  *                image_url:
  *                  type: string
  *                  example: www.LoremIpsum.com
  *                body:
  *                  type: string
  *                  example: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie lobortis erat, 
  *                user_id:
  *                  type: number
  *                  example: 1
  *                updatedAt:
  *                  type: string
  *                  example: 2022-08-14T15:59:09.950Z
  *                createdAt:
  *                  type: 2022-08-14T15:59:09.950Z
  */
postRouter.post("/user/posts", checkSchema(validators.postValidator), validResult, verifyToken, postControllers.createPost)

/**
  * @swagger
  * /user/posts/{postId}:
  *  put:
  *    security:
  *      - bearerAuth : []
  *    tags:
  *      - posts
  *    summary: Edit Post API
  *    parameters:
  *      - in : path
  *        name: postId
  *        schema:
  *    requestBody:
  *      required: true
  *      content:
  *        application/json:
  *          schema:
  *            type: object
  *            properties:
  *              title:
  *                type: string
  *                example: Andy Bernard
  *              imageUrl:
  *                type: string
  *                example: www.examplepictures.com/etc.jpg,
  *              body:
  *                type: string
  *                example: Lorem Ipsum Dolor Sit Amet
  *    responses:
  *      '200':
  *        content:
  *          application/json:
  *            schema:
  *              type: array
  *              items:
  *                type: number
  *                example: 0
  */
postRouter.put("/user/posts/:postId", checkSchema(validators.postValidator), validResult, verifyToken, postControllers.updatePost)

module.exports = postRouter;