'use strict'

const Product = require('../models/product')

const search = (req, res) => {
    console.log(req.query.query)
    let regex = new RegExp(escapeRegex(req.query.query), 'gi')

    Product.find({name: regex}, (err, products) => {
        if(err) return res.status(500).send({ message: `Error to get product ${err}` })
        
        if(products.length == 0){
            return res.status(200).send({ result: `No se han encontrado productos` })
        }else{
            return res.status(200).send(products)
        }

    })

}

const escapeRegex = query => {
    return query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports = {
    search
}