const {createSuccessResponse} = require('../../../response');
const {createErrorResponse} = require('../../../response');
const con = require('../mysql');

module.exports = (req, res)=>{
    var searchString = req.query.searchString;
    var response = [];
    var string_animal =`WHERE (name LIKE '%${searchString}%' OR breed LIKE '%${searchString}%' OR species LIKE '%${searchString}%' OR description LIKE '%${searchString}%')`; 
    var string_product =`WHERE (product_name LIKE '%${searchString}%' OR maker LIKE '%${searchString}%' OR product_type LIKE '%${searchString}%' OR description LIKE '%${searchString}%' OR seller LIKE '%${searchString}%')`; 
    con.query(`SELECT * FROM animal ${string_animal}`, (err, result)=>{
        if(err){
            res.status(404).json(createErrorResponse(404, err));
        }else{
            response.push(result);
            con.query(`SELECT * FROM product ${string_product}`, (err, result)=>{
                if(err){
                    res.status(404).json(createErrorResponse(404, err));
                }else{
                    response.push(result);
                    res.status(200).json(createSuccessResponse(response));
                }
            });
        }
    });

}