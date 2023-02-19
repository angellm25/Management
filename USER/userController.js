
const UserService = require('./userServices');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.getUsers = async function (req, res, next) {
    const page = req.params.page ? req.params.page: 1
    const limit = req.params.limit ? req.params.limit : 10
    try {
        const users = await UserService.getUsers({}, page, limit)
        return res.status(200).send({status: 200, data: users, message: " Users Retrieved Successfully"})
    } catch(e) {
        return res.status(400).send({status: 400, message: e.message})
    }
}
