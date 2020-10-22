const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{type: String, required: true},
    brand:{type: String},
    price:{type: Number, default: '0'},

},{
    timestamps: true
})

module.exports = mongoose.model('Products',productSchema)