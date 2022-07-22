const express = require('express');
const auth_route = express.Router();
const {login, register} = require('../controller/auth_controller')

auth_route.route('/auth/register').post(register);
auth_route.route('/auth/login').post(login);

module.exports = auth_route 