const moment = require('moment'); 
const { validationResult } = require('express-validator');
const Movies = require('../models/movies');

const validateDate = async ( date ) => {
    if (!moment(date,'DD-MM-YYYY',true).isValid()) {
        throw new Error('Invalid date format');
    }
    formattedDate = moment(date,'DD-MM-YYYY');
    return formattedDate
}

const validateFields = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }
    next();
}
const validateId = async( id ) => {

    const movieId = await Movies.findById(id);
    if ( !movieId ) {
        throw new Error('Invalid movie ID');
    }
}
module.exports = {
    validateDate,
    validateFields,
    validateId

}