const mongoose = require('mongoose');
const data_auth_user = new mongoose.Schema({
    namauser : {
        type: String,
        required: [true, 'must be only string for name'],
        unique: true,
        maxlength: 25
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    alamat : {
        type: String,
        required: true
    }
})

const Auth_user = mongoose.model('Auth_user', data_auth_user)
module.exports = Auth_user