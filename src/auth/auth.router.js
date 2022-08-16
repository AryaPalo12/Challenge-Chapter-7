const { checkSchema } = require('express-validator')
const authRouter = require('express').Router();
const { validResult } = require('../middleware/validation.result.js');
const validators = require('../middleware/validator');
const authControllers = require('./auth.controller');

/**
 * @swagger
 * /v1/auth/login:
 *  post:
 *    tags:
 *      - auth
 *    summary: User Login API
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
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
 *                accessToken:
 *                  type: string
 *                  example: fdkaskfjhasfhwibfiwnafkasjndfliuaenowanfiuwankjfanksflia
 */
authRouter.post('/v1/auth/login', checkSchema(validators.loginValidation), validResult, authControllers.userLogin);

module.exports = authRouter;