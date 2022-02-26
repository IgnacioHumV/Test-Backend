# Install 
This project uses Node.js and npm, use 'npm install' and 'node app.js' in cmd.
[MongoDB](https://www.mongodb.com/try/download/community) needs to be running locally with defaults ports
.env was upload just for test purpose

# Usage
Body must be a JSON and dates must be DD-MM-YYYY format

GET /api/movies

returns :
{
    movies:[
        {
            _id: ObjectId,
            name: String,
            releaseDate: Date,
            genre: String"
        }
    ]
}

POST /api/movies - Fields are required

Input Body
{
    name: String,
    releaseDate: String,
    genre: String
}

returns:
{
    movie: {
        name: String,
        releaseDate: Date,
        genre: String,
        _id: ObjectId,
        createdAt: Date,
        updatedAt: Date
    }
}

PUT /api/movies/id - Fields are optional

Input Body:
{
    name: String,
    releaseDate: String,
    genre: String
}

returns:
{
    movie: {
        name: String,
        releaseDate: Date,
        genre: String,
        _id: ObjectId,
        createdAt: Date,
        updatedAt: Date
    }
}

DELETE /api/movies/id

returns:
{
    "msg": "Movie Deleted"
}
