const { Router } = require('express');
const { moviesGet, moviesPost, moviesPut, moviesDelete } = require('../controllers/movies');
const { validateDate, validateFields, validateId} = require('../middlewares/validateMovies');
const { check } = require('express-validator');
const router = Router();

router.get('/', moviesGet );
router.post('/',[
    check('name', 'Name is empty').not().isEmpty(),
    check('releaseDate','Release date is empty').not().isEmpty().customSanitizer( validateDate ),
    check('genre','Genre is empty').not().isEmpty(),
    validateFields
],moviesPost );
router.put('/:id',[
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom( validateId ),
    check('name', 'Name is empty').optional().not().isEmpty(),
    check('releaseDate','Release date is empty').optional().not().isEmpty().customSanitizer( validateDate ),
    check('genre','Genre is empty').optional().not().isEmpty(),
    validateFields
],moviesPut );
router.delete('/:id',[
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom( validateId ),
    validateFields
],moviesDelete );

module.exports = router;