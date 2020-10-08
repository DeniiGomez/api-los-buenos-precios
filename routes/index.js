'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const categoryCtrl = require('../controllers/category')
const providerCtrl = require('../controllers/provider')
const priceCtrl = require('../controllers/price')
const searchCtrl = require('../controllers/search')
const api = express.Router()

//routes
//product
api.get('/product', productCtrl.getProducts)
api.get('/product/:id', productCtrl.getProduct)
api.post('/product', productCtrl.saveProduct)
api.put('/product/:id', productCtrl.updateProduct)
api.delete('/product/:id', productCtrl.deleteProduct)

//category
api.get('/category', categoryCtrl.getCategories)
api.get('/category/:id', categoryCtrl.getCategory)
api.post('/category', categoryCtrl.saveCategory)
api.put('/category/:id', categoryCtrl.updateCategory)
api.delete('/category/:id', categoryCtrl.deleteCategory)

//provider
api.get('/provider', providerCtrl.getProviders)
api.get('/provider/:id', providerCtrl.saveProvider)
api.post('/provider', providerCtrl.saveProvider)
api.put('/provider/:id', providerCtrl.updateProvider)
api.delete('/provider/:id', providerCtrl.deleteProvider)

//price
api.get('/price', priceCtrl.getPrices)
api.get('/price/:id', priceCtrl.getPrice)
api.post('/price', priceCtrl.savePrice)
api.put('/price/:id', priceCtrl.updatePrice)
api.delete('/price/:id', priceCtrl.deletePrice)

//search
api.get('/search', searchCtrl.search)


module.exports = api