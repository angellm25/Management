const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyparser = require('body-parser');
const RoomType = require('./routes/roomType');

const Room = require('./routes/rooms');
const database = require('./database');
const PORT = process.env.PORT || 4111
const cors = require('cors');

const app = express();

app.use(LOGGER)

function LOGGER (req, res, next) {
    console.log('Inside Middleware')
    next()
}


function authorizeUsersAccess(req, res, next) {
    if (req.query.admin === 'true') {
        next()
    } else {
        res.send('ERROR: You must be an admin')
    }
    
}

app.get('/users', authorizeUsersAccess, (req, res) => {
    res.send('Users Page')
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api/v1/rooms-types', Roomtype)
app.use('/api/v1/rooms', Rooms)


app.listen(PORT, console.log('Server is listening on port ' + PORT))