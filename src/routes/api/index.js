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
    var fName= req.body.fName;
    var lName = req.body.lName;
    var desc = req.body.desc;


    var users = {};
    users = persons;

    if(!users[fName]){
        users[fName] = {"fname": fName, "lName": lName, "desc" : desc, "profile-image": "https://source.unsplash.com/random/?people"};

        fs.writeFile('src/sample/profile-person.json', JSON.stringify(users), (err)=>{
            if (err) throw err;
            res.send("Success! User written!");
        });

    }else{
        res.send("User alredy exists.");
    }
});

router.put('/person', (req, res)=>{
    var fName= req.body.fName;
    var lName = req.body.lName;
    var desc = req.body.desc;

    var users = persons;

    if(users[fName]){
        users[fName] = {"fname": fName, "lName": lName, "desc" : desc, "profile-image": "https://source.unsplash.com/random/?people"};

        fs.writeFile('src/sample/profile-person.json', JSON.stringify(users), (err)=>{
            if (err) throw err;
            res.send("Success! User written!");
        });

    }else{
        res.send("User does not exist.");
    }
});


router.post('/pet', (req, res)=>{

    var name = req.body.fName;
    var age = req.body.lName;
    var species = req.body.desc;
    var breed = req.body.breed;

   var animals = pets;

    if(!animals[name]){
        animals[name] = {"name": name, "age": age, "species": species, "breed": breed,  "profile-image":"https://source.unsplash.com/random/?animal"};
    

        fs.writeFile('src/sample/profile-pet.json', JSON.stringify(animals), (err)=>{
            if (err) throw err;
            res.send("Success! Pet written!");
        });
    }else{
        res.send("Pet already exists!");
    }

});


router.put('/person', (req, res)=>{
    var name = req.body.fName;
    var age = req.body.lName;
    var species = req.body.desc;
    var breed = req.body.breed;

    var animals = pets;

    if(animals[name]){
        animals[name] = {"name": name, "age": age, "species": species, "breed": breed,  "profile-image":"https://source.unsplash.com/random/?animal"};

        fs.writeFile('src/sample/profile-pet.json', JSON.stringify(animals), (err)=>{
            if (err) throw err;
            res.send("Success! Pet written!");
        });
    }else{
        res.send("Pet does not exist.");
    }
});


module.exports = router;