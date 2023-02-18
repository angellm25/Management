const express = require('express');
const router = express.Router()

const UserControlller = require('../controllers/userController');

router.get('/', UserControlller.getUsers)

module.exports = router