const { checkSchema } = require('express-validator')
const userControllers = require('./user.controller')
const tokenVerification = require('../middleware/token.verification')
const userRouter = require('express').Router();
const validators = require("../middleware/validator");
const { validResult } = require('../middleware/validation.result.js');

/**
 * @swagger
 * /user/register:
 *  post:
 *    tags:
 *      - user
 *    summary: User Registration API
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullname:
 *                type: string
 *                example: Andy Bernard
 *              email:
 *                type: string
 *                example: andythedog@dundermiflin.com
 *              password:
 *                type: string
 *                example: Password@123!
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  example: 3
 *                fullname:
 *                  type: string
 *                  example: Andy Bernard
 *                email:
 *                  type: string
 *                  example: andythedog@dundermiflin.com
 *                password:
 *                  type: string
 *                  example: Password@123!
 *                updatedAt:
 *                  type: string
 *                  example: 2022-08-14T15:59:09.950Z
 *                createdAt:
 *                  type: string
 *                  example: 2022-08-14T15:59:09.950Z
 */
userRouter.post('/user/register', checkSchema(validators.registrationValidation),validResult, userControllers.createUser);

/**
 * @swagger
 * /user/{userId}:
 *  put:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - user
 *    summary: User Edit API
 *    parameters:
 *      - in : path
 *        name: userId
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullname:
 *                type: string
 *                example: Andy Bernard
 *              email:
 *                type: string
 *                example: andythedog@dundermiflin.co,
 *              password:
 *                type: string
 *                example: Password@123!
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                fullname:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */
userRouter.put('user/:userId', tokenVerification, userControllers.editUser)

module.exports = userRouter;