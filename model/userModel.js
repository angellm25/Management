const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: String
})

const User = mongoose.modell('User', UserSchema)

module.exports = User;