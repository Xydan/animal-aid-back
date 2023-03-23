const express = require('express');
const {createSuccessResponse  } = require('../../response');
const pets = require('../../sample/profile-pet.json');

// Create a router on which to mount our API endpoints
const router = express.Router();

//get all users or pets

router.get('/pet', (req, res)=>{
    res.status(200).json(createSuccessResponse(pets));
});

//get specific user or pet
router.get('/person', require('./user/get-user'));
  
router.get('/pet/:id', require('./pet/get-pet'));

//create user or pet
router.post('/person', require('./user/post-user'));

router.post('/pet', require('./pet/post-pet'));

//modify user or pet
router.put('/person', require('./user/put-user'));

router.put('/pet', require('./pet/put-pet'));

//delete user or pet
router.delete('/person', require('./user/delete-user'));

router.delete('/pet', require('./pet/delete-pet'));

module.exports = router;