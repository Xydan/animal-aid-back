const express = require('express');
const router = express.Router();

//get specific user or pet
router.get('/person', require('./user/get-user'));
  
router.get('/pet', require('./pet/get-pet'));

router.get('/product', require('./product/get-product'));

router.get('/search', require('./search/get-search'));

//get all pets from one user
router.get('/person/pet', require('./pet/get-user-pets'));

//create user or pet
router.post('/person', require('./user/post-user'));

router.post('/pet', require('./pet/post-pet'));

router.post('/product', require('./product/post-product'));

//modify user or pet
router.put('/person', require('./user/put-user'));

router.put('/pet', require('./pet/put-pet'));

router.put('/product', require('./product/put-product'));

//delete user or pet
router.delete('/person', require('./user/delete-user'));

router.delete('/pet', require('./pet/delete-pet'));

router.delete('/product', require('./product/delete-product'));

module.exports = router;