const {createSuccessResponse  } = require('../../../response');
const {createErrorResponse} = require('../../../response');
const con = require('../mysql');

module.exports = (req, res)=>{
    var name = req.body.name;
    var age = req.body.age;
    var species = req.body.species;
    var breed = req.body.breed;
    var image = req.body.image;
    var description = req.body.description;
    var id = req.body.animal_ID

    if(!id){
        res.status(404).json(createErrorResponse(404, "Animal_ID cannot be empty"));
    }else{
        con.query(`UPDATE animal SET name = '${name}', age = '${age}', description = '${description}', species = '${species}', image = '${image}', breed = '${breed}' WHERE animal_ID = '${id}'`, (err, result)=>{
            if(err){
                res.status(404).json(createErrorResponse(404, err));
            }else{
                res.status(200).json(createSuccessResponse(result));
            }
        });
    }
}