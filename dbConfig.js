const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log('DB ready');
    } catch (error) {
        console.log('DB error');
    }
}
module.exports = {
    dbConnection
}