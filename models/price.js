'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PriceSchema = Schema({
    product: { type: Schema.ObjectId, ref: 'Product', require: true},
    description: String,
    price: { type: Number, default: 0 },
})

module.exports = mongoose.model('Price', PriceSchema)