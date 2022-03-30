const express = require('express');
const ProductController = require('../controllers/ProductController')
const ProductRouter = express.Router();
const multer = require('multer')

const upload = multer();



ProductRouter
        .route('/list')
        .get(ProductController.getProduct)
ProductRouter
        .route('/create')
        .post(upload.fields([{ name: 'image', maxCount: 1 }]), ProductController.createProduct)
ProductRouter
        .route('/update/:id')
        .put(ProductController.updateProduct)

ProductRouter
        .route('/delete/:id')
        .delete(ProductController.deleteProduct)






module.exports = ProductRouter;