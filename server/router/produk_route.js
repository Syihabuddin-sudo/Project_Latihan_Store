const express = require('express');
const produk_route = express.Router();
const {
    getAllProduk,
    getProduk,
    postProduk,
    updateProduk,
    deletedProduk
} = require('../controller/produk_controller')

produk_route.route('/produk').get(getAllProduk).post(postProduk)
produk_route.route('/produk/:id').get(getProduk).patch(updateProduk).delete(deletedProduk)

module.exports = produk_route