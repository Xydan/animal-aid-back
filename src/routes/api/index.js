const express = require('express');
const {createSuccessResponse  } = require('../../response');
const {createErrorResponse} = require('../../response');
const persons = require('../../sample/profile-person.json');
const pets = require('../../sample/profile-pet.json');

// Create a router on which to mount our API endpoints
const router = express.Router();

router.get('/person/:id', (req, res)=>{
    var id = req.params.id;
    if(persons[id]){
        res.status(200).json(createSuccessResponse(persons[id]));
    }else{
        res.status(200).json(createErrorResponse(404, "no specified person exists"));
    }
});
  
router.get('/pet/:id', (req, res)=>{
var id = req.params.id;
if(pets[id]){
    res.status(200).json(createSuccessResponse(pets[id]));
}else{
    res.status(200).json(createErrorResponse(404, "no specified pet exists"));
}
});

router.get('/person', (req, res)=>{
    res.status(200).json(createSuccessResponse(persons));
});

router.get('/pet', (req, res)=>{
    res.status(200).json(createSuccessResponse(pets));
});

module.exports = router;