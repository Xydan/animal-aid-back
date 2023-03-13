const {createSuccessResponse} = require('../../../response');
const {createErrorResponse} = require('../../../response');
const fs = require('fs');
const persons = require('../../../sample/profile-person.json');

module.exports = (req, res)=>{
    var email = req.body.email;
    var users = persons;

    if(users[email]){
        delete users[email];
        
        fs.writeFile('src/sample/profile-person.json', JSON.stringify(users), (err)=>{
            if (err) throw err;
            res.status(200).JSON(createSuccessResponse({"message": "Success! User deleted."}));
        });
    }else{
        res.status(404).json(createErrorResponse(404, "User does not exist."));
    }
}