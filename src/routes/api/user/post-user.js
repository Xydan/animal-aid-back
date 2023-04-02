const {createSuccessResponse} = require('../../../response');
const {createErrorResponse} = require('../../../response');
const con = require('../mysql');
const bcrypt = require("bcrypt");

module.exports = (req, res)=>{
    var fName= req.body.first_name;
    var lName = req.body.last_name;
    var password = req.body.password;
    var email = req.body.email; //pk

    bcrypt.hash(password, 10, function(err, hash) {
        if(!email || !password){
            res.status(404).json(createErrorResponse(404, "Email or password cannot be empty"));
        }else{
            con.query(`INSERT INTO user (email, first_name, last_name, password) VALUES ('${email}', '${fName}', '${lName}', '${hash}')`, (err, result)=>{
                if(err){
                    res.status(404).json(createErrorResponse(404, err));
                }else{
                    res.status(200).json(createSuccessResponse(result));
                }
            });
        }
    });
}