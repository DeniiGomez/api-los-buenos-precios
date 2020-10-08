'use strict'

const Product = require('../models/product')

const getProduct = (req,res) => {
    let id = req.params.id
    
    // Product.findById(id, (err, product) => {
    //     if(err) return res.status(500).send({ message: `Error to get product ${err}` })
    //     if(!product) return res.status(404).send({ message: `Product not found` })
        
    //     res.status(200).send(product)
    // })

    Product.findById(id)
    .populate('category')
    .populate('provider')
    .exec((err, product) => {
        if(err) return res.status(500).send({ message: `Error to get product ${err}` })
        if(!product) return res.status(404).send({ message: `Product not found` })
        
        res.status(200).send(product)
    })
}

const getProducts = (req, res) => {
    // Product.find({}, (err, products) => {
    //     if(err) return res.status(500).send({ message: `Error to get products ${err}` })
    //     if(!products) return res.status(404).send({ message: 'Products not found' })
        
    //     //res.send(200, { products })

    //     Category.populate(products, { path: 'category' }, (err, products) => {
    //         if(err) return res.status(500).send({ message: `Error to get products ${err}` })
    //         if(!products) return res.status(404).send({ message: 'Products not found' })
            
    //         Provider.populate(products, { path: 'provider' }, (err, products) => {
    //             if(err) return res.status(500).send({ message: `Error to get products ${err}` })
    //             if(!products) return res.status(404).send({ message: 'Products not found' })
    
    //             Price.populate(products, { path: 'product' }, (err, products) => {
    //                 res.status(200).send(products)
    //             })
    //         })
    //     })
        
    // })

    Product.find({})
    .populate('provider')
    .populate('category')
    .exec((err, products) => {
        if(err) return res.status(500).send({ message: `Error to get products ${err}` })
        if(!products) return res.status(404).send({ message: 'Products not found' })
        res.status(200).send(products)
    })

}

const saveProduct = (req, res) => {
    try {
        let product = new Product()

        product.name = req.body.name
        product.picture = req.body.picture
        product.stock = req.body.stock
        product.category = req.body.category
        product.description = req.body.description
        product.provider = req.body.provider
        product.prices = req.body.prices

        product.save((err, productStored) => {
            if(err) res.status(500).send({ message: `Error to save product ${err}` })
            res.status(200).send({product: productStored})
        })
    } catch (error) {
        res.status(500).send({message: `Error server`})
    }
}

const updateProduct = (req, res) => {
    let id = req.params.id
    let query = req.body

    Product.findByIdAndUpdate(id, query, (err, productUpdate) => {
        if(err) res.status(500).send({ message: `Error to update product ${err}` })

        res.status(200).send({
            message: `Succesfull update product`,
            product: productUpdate
        })
    })

}

const deleteProduct = (req, res) => {
    let id = req.params.id
    
    Product.findById(id, (err, product) => {
        if(err) res.status(500).send({ message: `Error to delete product ${err}` })

        product.remove(err => {
            if(err) res.status(500).send({ message: `Error to delete product ${err}` })

            res.status(200).send({ message: `Product delete` })
        })
    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}