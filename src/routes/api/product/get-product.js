const {createSuccessResponse} = require('../../../response');
const {createErrorResponse} = require('../../../response');
const con = require('../mysql');

module.exports = (req, res)=>{
    var id = req.query.product_ID;
    var string = id? `WHERE product_id = '${id}'` : ""; 

    con.query(`SELECT * FROM product ${string}`, (err, result)=>{
        if(err){
            res.status(404).json(createErrorResponse(404, err));
        }else if(!result.length){
            res.status(404).json(createErrorResponse(404, "No specified product exists"));
        }else{
            res.status(200).json(createSuccessResponse(result));
        }
    });
}