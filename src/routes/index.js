const express = require('express');
const { version, author } = require('../../package.json');
const {Joseph} = require('../sample/profile-person.json');
const {Maggie} = require('../sample/profile-pet.json');
// const { authenticate } = require('../authorization/index');
const {createSuccessResponse  } = require('../response');

// Create a router that we can use to mount our API
const router = express.Router();

/**
 * Expose all of our API routes on /v1/* to include an API version.
 */
router.use(`/v1`, require('./api'));

/**
 * Define a simple health check route. If the server is running
 * we'll respond with a 200 OK.  If not, the server isn't healthy.
 */
router.get('/', (req, res) => {
  // Client's shouldn't cache this response (always request it fresh)
  res.setHeader('Cache-Control', 'no-cache');
  // Send a 200 'OK' response
  res.status(200).json(createSuccessResponse({author,githubUrl: 'https://github.com/Xydan/animal-aid-back', version}));
});

router.get('/profile/person/joseph', (req, res)=>{
  res.status(200).json(createSuccessResponse(Joseph));
});

router.get('/profile/pet/maggie', (req, res)=>{
  res.status(200).json(createSuccessResponse(Maggie));
});

module.exports = router;