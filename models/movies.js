const { Schema, model } = require('mongoose');

const MoviesSchema = Schema({

    name: String,
    releaseDate: Date,
    genre: String,
}, {timestamps: true});

MoviesSchema.methods.toJSON = function() {
    const { __v, ...movies  } = this.toObject();
    return movies;
}
module.exports = model( 'Movies', MoviesSchema );