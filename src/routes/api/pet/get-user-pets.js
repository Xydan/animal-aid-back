const {createSuccessResponse  } = require('../../../response');
const {createErrorResponse} = require('../../../response');
const con = require('../mysql');

module.exports = (req, res)=>{
    var parent = req.body.email;
    var string = parent? `WHERE parent = '${parent}'` : ""; 

    con.query(`SELECT * FROM animal ${string}`, (err, result)=>{
        if(err){
            res.status(404).json(createErrorResponse(404, err));
        }else if(!result.length){
            res.status(404).json(createErrorResponse(404, "No specified animal exists"));
        }else{
            res.status(200).json(createSuccessResponse(result));
        }
    });
};