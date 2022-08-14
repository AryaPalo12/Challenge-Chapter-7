const { checkSchema } = require('express-validator')
const express = require('express');
const verifyToken = require('../middleware/token.verification');
const postControllers = require('./post.controller');
const postRouter = express.Router();
const validators = require("../middleware/validator");
const { validResult } = require('../middleware/validation.result.js');

/**
  * @swagger
  * /user/posta?writer=writerId:
  *  get:
  *    security:
  *      - bearerAuth : []
  *    tags:
  *      - posts
  *    summary: Get Post API
  *    parameters:
  *      - in : query
  *        name: writerId
  *        schema:
  *         type: string
  *    responses:
  *      '200':
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                title:
  *                  type: string
  *                image:
  *                  type: string
  *                body:
  *                  type: string
  *                user_id:
  *                  type: number
  *                updatedAt:
  *                  type: string
  *                createdAt:
  *                  type: string
  */
 postRouter.get("/user/posts/:writerId?",verifyToken , postControllers.getPost);

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
  *                title:
  *                  type: string
  *                image:
  *                  type: string
  *                body:
  *                  type: string
  *                user_id:
  *                  type: number
  *                updatedAt:
  *                  type: string
  *                createdAt:
  *                  type: string
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
  *              type: object
  *              properties:
  *                title:
  *                  type: string
  *                image:
  *                  type: string
  *                body:
  *                  type: string
  *                user_id:
  *                  type: number
  *                updatedAt:
  *                  type: string
  *                createdAt:
  *                  type: string
  */
postRouter.put("/user/posts/:postId", checkSchema(validators.postValidator), validResult, verifyToken, postControllers.updatePost)

module.exports = postRouter;