const User = require('../model/userModel');

exports.getUsers = async function (query, page, limit) {

    try {
        const users = await User.find(query)
        return users;
    } catch (e)  {
        throw Error('Error while Paginating Users')
    }
}