const mongoose = require('mongoose');

const data_produk = new mongoose.Schema({
    nama_produk : {
        type: String,
        required: true
    },
    jenis_produk : {
        type: String,
        required: true
    },
    jumlah_produk : {
        type: Number,
        required: true
    },
    harga_produk: {
        type: Number,
        required: true
    }
})

const dataProduk = mongoose.model('dataProduk', data_produk)
module.exports = dataProduk