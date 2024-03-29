const {createSuccessResponse  } = require('../../../response');
const {createErrorResponse} = require('../../../response');
const crypto = require('crypto');
const con = require('../mysql');

function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
      response = {};
  
    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }
  
    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
  
    return response;
  }

module.exports = (req, res)=>{
    var name = req.body.product_name;
    var price = req.body.price;
    var width = req.body.width_inches;
    var height = req.body.height_inches;
    var length = req.body.length_inches;
    var weight = req.body.weight_lbs;
    var maker = req.body.maker;
    var seller = req.body.seller;
    var product_type = req.body.product_type;
    var image_01 = req.body.image_01;
    var description = req.body.description;
    var id = crypto.randomUUID(); //

    if(!name){
        res.status(404).json(createErrorResponse(404, "Name cannot be empty"));
    }else if(!seller){
        res.status(404).json(createErrorResponse(404, "Seller cannot be empty"));
    }else{
        con.query(`INSERT INTO product (product_ID, product_name, description, price, width_inches, length_inches, height_inches, weight_lbs, maker, seller, product_type, image_01) 
        VALUES ('${id}', '${name}', '${description}', '${price}', '${width}', '${length}','${height}','${weight}', '${maker}', '${seller}', '${product_type}', '${image_01}')`, (err, result)=>{
            if(err){
                res.status(404).json(createErrorResponse(404, err));
            }else{
                res.status(200).json(createSuccessResponse({result, id}));
            }
        });
    }

}