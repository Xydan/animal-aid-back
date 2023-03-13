const {createSuccessResponse  } = require('../../response');
const {createErrorResponse} = require('../../response');
const pets = require('../../sample/profile-pet.json');

module.exports = (req, res)=>{
    var id = req.params.id;
    if(pets[id]){
        res.status(200).json(createSuccessResponse(pets[id]));
    }else{
        res.status(404).json(createErrorResponse(404, "no specified pet exists"));
    }
};