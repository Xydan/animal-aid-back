const {createSuccessResponse  } = require('../../../response');
const {createErrorResponse} = require('../../../response');
const crypto = require('crypto');
const con = require('../mysql');

module.exports = (req, res)=>{
    var name = req.body.name;
    var age = req.body.age;
    var species = req.body.species;
    var breed = req.body.breed;
    var image = req.body.image.toString("base64");
    var description = req.body.description;
    var parent = req.body.parent;
    var id = crypto.randomUUID(); //

    if(!name){
        res.status(404).json(createErrorResponse(404, "Name cannot be empty"));
    }else{
        con.query(`INSERT INTO animal (animal_ID, name, age, species, breed, image, description, parent) VALUES ('${id}', '${name}', '${age}', '${species}', '${breed}', '${image}', '${description}', '${parent}')`, (err, result)=>{
            if(err){
                res.status(404).json(createErrorResponse(404, err));
            }else{
                res.status(200).json(createSuccessResponse({result, id}));
            }
        });
    }

}