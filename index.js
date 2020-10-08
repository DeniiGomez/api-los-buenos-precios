'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if(err){
        return console.log(`Error to connection DB: ${err} `)
    }

    console.log('Connection succesfull to DB... ')
    
    app.listen(config.port, () => {
        console.log(`App listen at port ${config.port}`)
    })
})