const UserService = require('../services/userServices');

exports.getUsers = async function (req, res, next) {

    var page = req.params.page ? req.params.page : 1;
    var limit = req.params.limit ? req.params.limit : 10;
    try {
        var users = await UserService.getUsers({}, page, limit)
        return res.status(200).json({status: 200, data: users, message:"Users Retrieved Successfully"})
    } catch(e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}