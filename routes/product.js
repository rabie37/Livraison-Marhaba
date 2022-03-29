const express = require('express');
const ProductController = require('../controllers/ProductController')
const ProductRouter = express.Router();



ProductRouter
        .route('/')
        .get(async (req, res)=> CategoryController.getProduct(req, res))
        .post(async (req, res)=> CategoryController.createProduct(req, res))
        .put(async (req, res)=> CategoryController.updateProduct(req, res))
        
ProductRouter
        .route('/:id')
        .delete(async (req, res)=> ProductController.deleteProduct(req, res))






module.exports = ProductRouter;