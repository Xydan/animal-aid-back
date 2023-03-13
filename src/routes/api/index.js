const express = require('express');
const {createSuccessResponse  } = require('../../response');
const persons = require('../../sample/profile-person.json');
const pets = require('../../sample/profile-pet.json');

// Create a router on which to mount our API endpoints
const router = express.Router();

//get all users or pets
router.get('/person', (req, res)=>{
    res.status(200).json(createSuccessResponse(persons));
});

router.get('/pet', (req, res)=>{
    res.status(200).json(createSuccessResponse(pets));
});

//get specific user or pet
router.get('/person/:id', require('./get-user'));
  
router.get('/pet/:id', require('./get-pet'));

//create user or pet
router.post('/person', require('./post-user'));

router.post('/pet', require('./post-pet'));

//modify user or pet
router.put('/person', require('./put-user'));

router.put('/pet', require('./put-pet'));

//delete user or pet
router.delete('/person', require('./delete-user'));

router.delete('/pet', require('./delete-pet'));

module.exports = router;