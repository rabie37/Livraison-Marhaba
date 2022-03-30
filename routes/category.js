const express = require('express');
const CategoryController = require('../controllers/CategoryController')
const CategoryRouter = express.Router();



CategoryRouter
        .route('/list')
        .get(CategoryController.getCategory)
CategoryRouter
        .route('/create')
        .post(CategoryController.createCategory)

CategoryRouter
        .route('/update/:id')
        .put(CategoryController.updateCategory)
CategoryRouter
        .route('/delete/:id')
        .delete(CategoryController.deleteCategory)






module.exports = CategoryRouter;