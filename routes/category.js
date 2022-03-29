const express = require('express');
const CategoryController = require('../controllers/CategoryController')
const CategoryRouter = express.Router();



CategoryRouter
        .route('/')
        .get(async (req, res)=> CategoryController.getCategory(req, res))
        .post(async (req, res)=> CategoryController.createCategory(req, res))
        .put(async (req, res)=> CategoryController.updateCategory(req, res))
        
CategoryRouter
        .route('/:id')
        .delete(async (req, res)=> CategoryController.deleteCategory(req, res))






module.exports = CategoryRouter;