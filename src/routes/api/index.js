const express = require('express');
const {createSuccessResponse  } = require('../../response');
const {createErrorResponse} = require('../../response');
const fs = require('fs');
// var crypto = require('crypto');
const persons = require('../../sample/profile-person.json');
const pets = require('../../sample/profile-pet.json');

// Create a router on which to mount our API endpoints
const router = express.Router();

router.get('/person/:id', (req, res)=>{
    var id = req.params.id;
    if(persons[id]){
        res.status(200).json(createSuccessResponse(persons[id]));
    }else{
        res.status(404).json(createErrorResponse(404, "no specified person exists"));
    }
});
  
router.get('/pet/:id', (req, res)=>{
var id = req.params.id;
if(pets[id]){
    res.status(200).json(createSuccessResponse(pets[id]));
}else{
    res.status(404).json(createErrorResponse(404, "no specified pet exists"));
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
    var image = req.body.image;
    var email = req.body.email; //pk

    var users = persons;

    if(!email){
        res.status(404).json(createErrorResponse(404, "Email cannot be empty"));

    }else if(!users[email]){
        users[email] = {"fname": fName, "lName": lName, "email": email, "desc" : desc, "profile-image": image};

        fs.writeFile('src/sample/profile-person.json', JSON.stringify(users), (err)=>{
            if (err) throw err;
            res.send("Success! User written!");
        });

    }else{
        res.status(404).json(createErrorResponse(404, "User already exists."));
    }
});

router.put('/person', (req, res)=>{
    var fName= req.body.fName;
    var lName = req.body.lName;
    var desc = req.body.desc;
    var image = req.body.image;
    var email = req.body.email; //primary key

    var users = persons;

    if(!email){
        res.status(404).json(createErrorResponse(404, "Email cannot be empty"));

    }else if(users[email]){
        users[email] = {"fname": fName, "lName": lName, "email": email, "desc" : desc, "profile-image": image};

        fs.writeFile('src/sample/profile-person.json', JSON.stringify(users), (err)=>{
            if (err) throw err;
            res.send("Success! User modified!");
        });
    }else{
        res.status(404).json(createErrorResponse(404, "User does not exist."));
    }
});

router.delete('/person', (req, res)=>{
    var email = req.body.email;
    var users = persons;

    if(users[email]){
        delete users[email];
        
        fs.writeFile('src/sample/profile-person.json', JSON.stringify(users), (err)=>{
            if (err) throw err;
            res.send("Success! User deleted.");
        });
    }else{
        res.status(404).json(createErrorResponse(404, "User does not exist."));
    }
});


router.post('/pet', (req, res)=>{
    var name = req.body.name;
    var age = req.body.age;
    var species = req.body.species;
    var breed = req.body.breed;
    var image = req.body.image;
    // var id = crypto.randomUUID(); //pk

   var animals = pets;

    if(!animals[name]){
        animals[name] = {"name": name, "age": age, "species": species, "breed": breed, "profile-image":image};
    

        fs.writeFile('src/sample/profile-pet.json', JSON.stringify(animals), (err)=>{
            if (err) throw err;
            res.send("Success! Pet written!");
        });
    }else{
        res.status(404).json(createErrorResponse(404, "Pet already exists."));
    }

});


router.put('/pet', (req, res)=>{
    var name = req.body.name;
    var age = req.body.age;
    var species = req.body.species;
    var breed = req.body.breed;
    var image = req.body.image;

    var animals = pets;

    if(animals[name]){
        animals[name] = {"name": name, "age": age, "species": species, "breed": breed,  "profile-image":image};

        fs.writeFile('src/sample/profile-pet.json', JSON.stringify(animals), (err)=>{
            if (err) throw err;
            res.send("Success! Pet modified!");
        });
    }else{
        res.status(404).json(createErrorResponse(404, "Pet does not exist."));
    }
});

router.delete('/pet', (req, res)=>{
    var name = req.body.name;
    var animals = pets;

    if(animals[name]){
        delete animals[name];

        fs.writeFile('src/sample/profile-pet.json', JSON.stringify(animals), (err)=>{
            if (err) throw err;
            res.send("Success! Pet deleted.");
        });
    }else{
        res.status(404).json(createErrorResponse(404, "Pet does not exist."));
    }
});


module.exports = router;