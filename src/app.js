const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
// const passport = require('passport');
// const authenticate = require('./authorization/index');
const { createErrorResponse } = require('./response');
const bodyParser = require('body-parser');

// const { version, author } = require('../package.json');

// const logger = require('./logger');
// const pino = require('pino-http')({
//   // Use our default logger instance, which is already configured
//   logger,
// });

const app = express(); //routes
// app.use(pino); //logging
app.use(helmet()); //security
app.use(cors()); //x-origin
app.use(compression()); //compression for middlware
// passport.use(authenticate.strategy());
// app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', require('./routes'));

// app.get('/', (req, res) => {
//   // Clients shouldn't cache this response (always request it fresh)
//   res.setHeader('Cache-Control', 'no-cache');
//   // Send a 200 'OK' response with info about our repo
//   res.status(200).json({
//     status: 'ok',
//     author,
//     githubUrl: 'https://github.com/Xydan/fragments',
//     version,
//   });
// });

app.use((req, res) => {
  res.status(404).json(createErrorResponse(
     404, 'not found'
  ));
});

// app.use((err, req, res) => {
//   const status = err.status || 500;
//   const message = err.message || 'unable to process request';

//   if (status > 499) {
//     logger.error({ err }, `Error processing request`);
//   }

//   res.status(status).json({
//     status: 'error',
//     error: {
//       message,
//       code: status,
//     },
//   });
// });

module.exports = app;
