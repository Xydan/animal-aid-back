const {createSuccessResponse} = require('../../../response');
const {createErrorResponse} = require('../../../response');
const con = require('../mysql');

module.exports = (req, res)=>{
    var id = req.body.email;
    var string = id? `WHERE email = '${id}'` : ""; 

    con.query(`SELECT * FROM user ${string}`, (err, result)=>{
        if(err){
            res.status(404).json(createErrorResponse(404, err));
        }else if(!result.length){
            res.status(404).json(createErrorResponse(404, "No specified person exists"));
        }else{
            res.status(200).json(createSuccessResponse(result));
        }
    });
}