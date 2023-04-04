const {createSuccessResponse  } = require('../../../response');
const {createErrorResponse} = require('../../../response');
const con = require('../mysql');

module.exports = (req, res)=>{
    var name = req.body.product_name;
    var price = req.body.price;
    var width = req.body.width_inches;
    var height = req.body.height_inches;
    var length = req.body.length_inches;
    var weight = req.body.weight_lbs;
    var maker = req.body.maker;
    var description = req.body.description;
    var product_type = req.body.product_type;
    var id = req.body.product_ID

    if(!id){
        res.status(404).json(createErrorResponse(404, "product_ID cannot be empty"));
    }else{
        con.query(`UPDATE product SET product_name = '${name}', price = '${price}', description = '${description}', width_inches = '${width}', length_inches = '${length}', height_inches = '${height}', weight_lbs = '${weight}', maker = '${maker}', product_type = '${product_type}' 
        WHERE product_ID = '${id}'`, (err, result)=>{
            if(err){
                res.status(404).json(createErrorResponse(404, err));
            }else{
                res.status(200).json(createSuccessResponse({result, id}));
            }
        });
    }
}