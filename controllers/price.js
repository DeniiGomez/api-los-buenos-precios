'use strict'

const Price = require('../models/price')

const getPrice = (req,res) => {
    let id = req.params.id
    
    Price.findById(id, (err, price) => {
        if(err) return res.status(500).send({ message: `Error to get price ${err}` })
        if(!price) return res.status(404).send({ message: `Price not found` })
        
        res.status(200).send(price)
    })
}

const getPrices = (req, res) => {
    Price.find({}, (err, prices) => {
        if(err) return res.status(500).send({ message: `Error to get prices ${err}` })
        if(!prices) return res.status(404).send({ message: 'Prices not found' })

        res.status(200).send(prices)
    })
}

const savePrice = (req, res) => {
    let price = new Price()
    price.product = req.body.product
    price.price = req.body.price
    price.description = req.body.description

    price.save((err, priceStored) => {
        if(err) res.status(500).send({ message: `Error to save price ${err}` })

        res.status(200).send({price: priceStored})
    })
}

const updatePrice = (req, res) => {
    let id = req.params.id
    let query = req.body

    Price.findByIdAndUpdate(id, query, (err, priceUpdate) => {
        if(err) res.status(500).send({ message: `Error to update price ${err}` })

        res.status(200).send({
            message: `Succesfull update price`,
            price: priceUpdate
        })
    })

}

const deletePrice = (req, res) => {
    let id = req.params.id
    
    Price.findById(id, (err, price) => {
        if(err) res.status(500).send({ message: `Error to delete price ${err}` })

        price.remove(err => {
            if(err) res.status(500).send({ message: `Error to delete price ${err}` })

            res.status(200).send({ message: `price delete` })
        })
    })
}

module.exports = {
    getPrice,
    getPrices,
    savePrice,
    updatePrice,
    deletePrice
}