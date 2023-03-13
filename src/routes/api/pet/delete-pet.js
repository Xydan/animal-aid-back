const {createSuccessResponse  } = require('../../../response');
const {createErrorResponse} = require('../../../response');
const fs = require('fs');
const pets = require('../../../sample/profile-pet.json');

module.exports = (req, res)=>{
    var name = req.body.name;
    var animals = pets;

    if(animals[name]){
        delete animals[name];

        fs.writeFile('src/sample/profile-pet.json', JSON.stringify(animals), (err)=>{
            if (err) throw err;
            res.status(200).JSON(createSuccessResponse({"message": "Success! Pet deleted."}));
        });
    }else{
        res.status(404).json(createErrorResponse(404, "Pet does not exist."));
    }
}