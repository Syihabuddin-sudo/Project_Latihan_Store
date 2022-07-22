const data_produk = require('../model_schema/produk_schema')
const {createCustomError} = require('../custom_error/custom-error')
const asyncWrapper = require('../middleware/asyn')


const getAllProduk = async (req, res) => {
    const dataProduk = await data_produk.find({})
    res.status(200).json({ dataProduk })
}

const getProduk = asyncWrapper (async (req, res, next) => {
    const { id : produk } = req.params
    const dataProduk = await data_produk.findOne({_id : produk })
    if(!dataProduk){
        return  next(createCustomError(`tidak ada barang dengan id : ${produk}`, 404))
    }
    res.status(200).json({ dataProduk })

})

const postProduk = async (req, res) => {
    try {
        const dataProduk = await data_produk.create(req.body)
        res.status(200).json({ dataProduk })
    } catch (error) {
        res.status(error)
    }

}

const updateProduk = async (req, res) => {
    const { id : barang } = req.params
    const dataProduk = await data_produk.findOneAndUpdate({ _id: barang }, req.body)
    res.status(200).json({dataProduk})
}

const deletedProduk = async (req, res) => {
    const { id : barang } = req.params
    const dataProduk = await data_produk.findOneAndDelete({ _id: barang }, req.body)
    res.status(200).json({dataProduk})
}


module.exports = {
    getAllProduk,
    getProduk,
    postProduk,
    updateProduk,
    deletedProduk
} 