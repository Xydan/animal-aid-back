# animal-aid-back
## API: http://animalaidbackend-env.eba-bkistjdh.us-east-1.elasticbeanstalk.com/

## API Routes
### Retrieve Pets
api/pet (all pets)\
api/pet?animal_ID={ID} (specific pet)\

pet fields \
var name = req.body.name;\
var age = req.body.age;\
var species = req.body.species;\
var breed = req.body.breed;\
var image = req.body.image;\
var description = req.body.description;\
var parent = req.body.parent;\

### Retrieve People
api/person (all people)\
api/person?email={email} (specific user)

### Retrieve Product
api/product\
api/product?product_ID={ID}\
