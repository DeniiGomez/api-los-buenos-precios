'use strict'

const Category = require('../models/category')

const getCategory = (req, res) => {
    let id = req.params.id
    
    Category.findById(id, (err, category) => {
        if(err) return res.status(500).send({ message: `Error to get category ${err}` })
        if(!category) return res.status(404).send({ message: `Category not found` })
        
        res.status(200).send(category)
    })
}

const getCategories = (req, res) => {
    Category.find({}, (err, categories) => {
        if(err) return res.status(500).send({ message: `Error to get categories ${err}` })
        if(!categories) return res.status(404).send({ message: 'Categories not found' })

        res.status(200).send(categories)
    })
}

const saveCategory = (req, res) => {
    let category = new Category()
    category.name = req.body.name
    category.picture = req.body.picture
    category.description = req.body.description

    category.save((err, categoryStored) => {
        if(err) res.status(500).send({ message: `Error to save category ${err}` })

        res.status(200).send({category: categoryStored})
    })
}

const updateCategory = (req, res) => {
    let id = req.params.id
    let query = req.body

    Category.findByIdAndUpdate(id, query, (err, categoryUpdate) => {
        if(err) res.status(500).send({ message: `Error to update category ${err}` })

        res.status(200).send({
            message: `Succesfull update category`,
            category: categoryUpdate
        })
    })

}

const deleteCategory = (req, res) => {
    let id = req.params.id
    
    Category.findById(id, (err, category) => {
        if(err) res.status(500).send({ message: `Error to delete category ${err}` })

        category.remove(err => {
            if(err) res.status(500).send({ message: `Error to delete category ${err}` })

            res.status(200).send({ message: `Category delete` })
        })
    })
}

module.exports = {
    getCategory,
    getCategories,
    saveCategory,
    updateCategory,
    deleteCategory
}