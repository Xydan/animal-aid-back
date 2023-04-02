const {createSuccessResponse} = require('../../../response');
const {createErrorResponse} = require('../../../response');
const con = require('../mysql');
const bcrypt = require("bcrypt");

module.exports = (req, res)=>{
    var fName= req.body.first_name;
    var lName = req.body.last_name;
    var desc = req.body.description;
    var image = req.body.profile_image;
    var email = req.body.email; 
    var password = req.body.password;


    if(!email){
        res.status(404).json(createErrorResponse(404, "Email cannot be empty"));
    }else{
        bcrypt.hash(password, 10, function(err, hash) {
            con.query(`UPDATE user SET first_name = '${fName}', last_name = '${lName}', description = '${desc}', profile_image = '${image}', password = '${hash}' WHERE email = '${email}'`, (err, result)=>{
                if(err){
                    res.status(404).json(createErrorResponse(404, err));
                }else{
                    res.status(200).json(createSuccessResponse(result));
                }
            });
        });
    }
}