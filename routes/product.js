const express = require('express');
const ProductController = require('../controllers/ProductController')
const ProductRouter = express.Router();
const AuthMiddleware = require("./../middlewares/AuthMiddleware");
const multer = require('multer')

const upload = multer();



ProductRouter
        .route('/list')
        .get(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin"]), ProductController.getProduct)
ProductRouter
        .route('/create')
        .post(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin"]), upload.fields([{ name: 'image', maxCount: 1 }]), ProductController.createProduct)
ProductRouter
        .route('/update/:id')
        .put(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin"]), ProductController.updateProduct)

ProductRouter
        .route('/delete/:id')
        .delete(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin"]), ProductController.deleteProduct)
ProductRouter
        .route('/:id')
        .get(AuthMiddleware.isLogin, AuthMiddleware.hasRole(['admin']), ProductController.getOneProduct)






module.exports = ProductRouter;