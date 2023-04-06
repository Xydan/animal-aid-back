const {createSuccessResponse} = require('../../../response');
const {createErrorResponse} = require('../../../response');
const con = require('../mysql');

module.exports = (req, res)=>{
    var id = req.query.email;
    con.query("DELETE FROM user WHERE email = '" + id + "'", (err, result)=>{
        if(err) res.status(404).json(createErrorResponse(404, err));
        res.status(200).json(createSuccessResponse(result));
    });
}