const {createSuccessResponse} = require('../../../response');
const {createErrorResponse} = require('../../../response');
const fs = require('fs');
const persons = require('../../../sample/profile-person.json');

module.exports = (req, res)=>{
    var fName= req.body.first_name;
    var lName = req.body.last_name;
    var desc = req.body.description;
    var image = req.body.profile_image;
    var email = req.body.email; //pk

    var users = persons;

    if(!email){
        res.status(404).json(createErrorResponse(404, "Email cannot be empty"));

    }else if(!users[email]){
        users[email] = {"fname": fName, "lName": lName, "email": email, "desc" : desc, "profile-image": image};

        fs.writeFile('src/sample/profile-person.json', JSON.stringify(users), (err)=>{
            if (err) throw err;
            res.status(200).json(createSuccessResponse({"User created" : users[email]["fname"]}));
        });

    }else{
        res.status(404).json(createErrorResponse(404, "User already exists."));
    }
}