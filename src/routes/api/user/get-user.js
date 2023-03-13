const {createSuccessResponse} = require('../../response');
const {createErrorResponse} = require('../../response');
const persons = require('../../sample/profile-person.json');

module.exports = (req, res)=>{
    var id = req.params.id;
    if(persons[id]){
        res.status(200).json(createSuccessResponse(persons[id]));
    }else{
        res.status(404).json(createErrorResponse(404, "no specified person exists"));
    }
}