const swaggerGen = require('express-swagger-generator')

const options = {
  swaggerDefinition: {
    info: {
      description: '# This is to-dream RESTful API'
    },
    host: 'localhost:3000',
    basePath: '/api',
    produces: [
      'application/json',
      'application/xml'
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '**must have apiKey to do anything**'
      }
    }
  },
  basedir: __dirname, // app absolute path
  files: ['../routes/**/*.js'] // Path to the API handle folder},
}

module.exports = (app) => swaggerGen(app)(options)
