const {createSuccessResponse  } = require('../../../response');
const {createErrorResponse} = require('../../../response');
const fs = require('fs');
const pets = require('../../../sample/profile-pet.json');

module.exports = (req, res)=>{
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
            res.status(200).json(createSuccessResponse({"Pet created" : animals[name]}));
        });
    }else{
        res.status(404).json(createErrorResponse(404, "Pet already exists."));
    }

}