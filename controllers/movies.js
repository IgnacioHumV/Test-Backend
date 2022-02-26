
const Movies = require('../models/movies');

const moviesGet = async (req, res) => {
    let movies = await Movies.find();
    res.json({
        movies
    }) 
}

const moviesPost = async (req, res) => {
    let movie = new Movies(req.body);
    try {
        await movie.save();  
    } catch (error) {
        
        return res.status(400).json({
            error:"Error on movie insert, contact your administrator"
        })
    }
    res.json({movie});
}

const moviesPut = async (req, res) => {
    let { id } = req.params;
    let movie = {};
    try {
        movie = await Movies.findByIdAndUpdate(id, req.body,{new: true});
    } catch (error) {
        return res.status(400).json({
            error:"Error on movie update, contact your administrator"
        })
    }
    res.json({movie});
}

const moviesDelete = async(req, res) => {

    const { id } = req.params;
    try {
        await Movies.findByIdAndDelete(id);
    } catch (error) {
        return res.status(400).json({
            error:"Error on movie delete contact your administrator"
        })
    }
    res.json({
        msg:"Movie Deleted"
    }) 
}

module.exports = {
    moviesGet,
    moviesPost,
    moviesPut,
    moviesDelete
}