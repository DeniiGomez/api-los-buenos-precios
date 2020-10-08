'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = Schema({
    name: { type: String, required: true},
    picture: String,
    description: { type: String, required: true}
})

module.exports = mongoose.model('Category', CategorySchema)