# animal-aid-back
## API: http://animalaidbackend-env.eba-bkistjdh.us-east-1.elasticbeanstalk.com/

## API Routes
### --Retrieve Pets
api/pet (all pets)\
api/pet?animal_ID={ID} (specific pet)\


#### --Pet Fields:
var name = req.body.name;\
var age = req.body.age;\
var species = req.body.species;\
var breed = req.body.breed;\
var image = req.body.image;\
var description = req.body.description;\
var parent = req.body.parent;\

#### --Product Fields:
var name = req.body.product_name;\
var price = req.body.price;\
var width = req.body.width_inches;\
var height = req.body.height_inches;\
var length = req.body.length_inches;\
var weight = req.body.weight_lbs;\
var maker = req.body.maker;\
var seller = req.body.seller;\
// var image = req.body.image;\
var description = req.body.description;\
var id = crypto.randomUUID();\

### --Retrieve People
api/person (all people)\
api/person?email={email} (specific user)

### --Retrieve Product
api/product\
api/product?product_ID={ID}\
