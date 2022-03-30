const express = require('express');
const CategoryController = require('../controllers/CategoryController')
const CategoryRouter = express.Router();



CategoryRouter
        .route('/list')
        .get(async (req, res) => CategoryController.getCategory(req, res))
CategoryRouter
        .route('/create')
        .post(async (req, res) => CategoryController.createCategory(req, res))

CategoryRouter
        .route('/update/:id')
        .put(async (req, res) => CategoryController.updateCategory(req, res))
CategoryRouter
        .route('/delete/:id')
        .delete(async (req, res) => CategoryController.deleteCategory(req, res))






module.exports = CategoryRouter;