const swaggerJsDoc = require('swagger-jsdoc');

const option = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog Project APIs',
      description: 'This Docs contains all APIs Doc for Chapter 7 Challenge.',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        }
      }
    }
  },
  apis: ['./src/*/*.router.js'],//all folder after src and contains router.js in its' name
};

const openApiSpecifications = swaggerJsDoc(option);

module.exports = openApiSpecifications;