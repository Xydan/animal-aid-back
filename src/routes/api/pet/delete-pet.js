const {createSuccessResponse  } = require('../../../response');
const {createErrorResponse} = require('../../../response');
const con = require('../mysql');

module.exports = (req, res)=>{
    var id = req.query.animal_ID;

    con.query("DELETE FROM animal WHERE animal_ID = '" + id + "'", (err, result)=>{
        if(err) res.status(404).json(createErrorResponse(404, err));
        res.status(200).json(createSuccessResponse(result));
    });
}