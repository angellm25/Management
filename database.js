const mongoose = require('mongoose');
const constants = require('./constants');


function database() {
    mongoose
        .connect(constants.DATABASE_URL, {

        })

        .then(() => {
            console.log('mongo DB is connected')
        })
        .catch((err) => {
            console.log('An error occured while connecting to the database.')
        })
}

module.exports = database
