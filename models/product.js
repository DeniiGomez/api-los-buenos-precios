'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: { type: String, required: true},
    picture: String,
    stock: { type: Number, defuault: 0 },
    description: { type: String, required: true},
    prices: { type: Array, required: true},
    category: { type: Schema.ObjectId, ref: 'Category'},
    provider: { type: Schema.ObjectId, ref: 'Provider'}
})

module.exports = mongoose.model('Product', ProductSchema)