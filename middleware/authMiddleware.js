const jwt = require('jsonwebtoken');
const asynchandler = require('express-async-handler');
const path = require('path')
const User = require('../USER/user')
const routes = require('../USER/userRoute');

const authenticate = asynchandler(async (req, res, next) => {
    const token = req.headers['x-access-token']
    if(!token) {
        return res.status(401).send({message: "No token provided"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req._id = decoded._id
        next()
    } catch(error) {
        return res.status(401).send({message: "Token is not valid"})
    }
})

module.exports = { authenticate }

// const protect = (req, res, next) => {
//     req.user = 'User'
//     next()
// }

