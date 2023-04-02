const {createSuccessResponse  } = require('../../../response');
const {createErrorResponse} = require('../../../response');
const crypto = require('crypto');
const con = require('../mysql');

module.exports = (req, res)=>{
    var name = req.body.product_name;
    var price = req.body.price;
    var width = req.body.width_inches;
    var height = req.body.height_inches;
    var length = req.body.length_inches;
    var weight = req.body.weight_lbs;
    var maker = req.body.maker;
    var seller = req.body.seller;
    // var image = req.body.image;
    var description = req.body.description;
    var id = crypto.randomUUID(); //

    if(!name){
        res.status(404).json(createErrorResponse(404, "Name cannot be empty"));
    }else if(!seller){
        res.status(404).json(createErrorResponse(404, "Seller cannot be empty"));
    }else{
        con.query(`INSERT INTO product (product_ID, product_name, description, price, width_inches, length_inches, height_inches, weight_lbs, maker, seller) 
        VALUES ('${id}', '${name}', '${description}', '${price}', '${width}', '${length}','${height}','${weight}', '${maker}', '${seller}')`, (err, result)=>{
            if(err){
                res.status(404).json(createErrorResponse(404, err));
            }else{
                res.status(200).json(createSuccessResponse({result, id}));
            }
        });
    }

}