'use strict'

const Provider = require('../models/provider')

const getProvider = (req,res) => {
    let id = req.params.id
    
    Provider.findById(id, (err, provider) => {
        if(err) return res.status(500).send({ message: `Error to get provider ${err}` })
        if(!provider) return res.status(404).send({ message: `Provider not found` })
        
        res.status(200).send(provider)
    })
}

const getProviders = (req, res) => {
    Provider.find({}, (err, providers) => {
        if(err) return res.status(500).send({ message: `Error to get providers ${err}` })
        if(!providers) return res.status(404).send({ message: 'Providers not found' })

        res.status(200).send(providers)
    })
}

const saveProvider = (req, res) => {
    let provider = new Provider()
    provider.name = req.body.name
    provider.picture = req.body.picture
    provider.price = req.body.price
    provider.category = req.body.category
    provider.description = req.body.description

    provider.save((err, providerStored) => {
        if(err) res.status(500).send({ message: `Error to save provider ${err}` })

        res.status(200).send({provider: providerStored})
    })
}

const updateProvider = (req, res) => {
    let id = req.params.id
    let query = req.body

    Provider.findByIdAndUpdate(id, query, (err, providerUpdate) => {
        if(err) res.status(500).send({ message: `Error to update provider ${err}` })

        res.status(200).send({
            message: `Succesfull update provider`,
            provider: providerUpdate
        })
    })

}

const deleteProvider = (req, res) => {
    let id = req.params.id
    
    Provider.findById(id, (err, provider) => {
        if(err) res.status(500).send({ message: `Error to delete provider ${err}` })

        provider.remove(err => {
            if(err) res.status(500).send({ message: `Error to delete provider ${err}` })

            res.status(200).send({ message: `provider delete` })
        })
    })
}

module.exports = {
    getProvider,
    getProviders,
    saveProvider,
    updateProvider,
    deleteProvider
}