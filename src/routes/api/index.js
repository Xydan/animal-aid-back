const express = require('express');
const {createSuccessResponse  } = require('../../response');
const {createErrorResponse} = require('../../response');
const fs = require('fs');
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

router.post('/person', (req, res)=>{
    var parseMe = Object.keys(req.body)[0];
    var parsedParams = JSON.parse(parseMe);

    var fName= parsedParams.fName;
    var lName = parsedParams.lName;
    var desc = parsedParams.desc;


    var users = {};

    users = persons;

    if(!users[fName]){
        users[fName] = {"fname": fName, "lName": lName, "desc" : desc, "profile-image": "https://source.unsplash.com/random/?people"}
    }

    //     fs.writeFile('src/sample/profile-person.json', JSON.stringify(users), (err)=>{
    //         if (err) throw err;
    //         res.send("Success!")
    //     });
    // });

        res.send(users);
    });

module.exports = router;