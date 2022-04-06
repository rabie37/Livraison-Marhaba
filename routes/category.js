const express = require('express');
const CategoryController = require('../controllers/CategoryController')
const CategoryRouter = express.Router();
const AuthMiddleware = require("./../middlewares/AuthMiddleware");



CategoryRouter
        .route('/list')
        .get(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]), CategoryController.getCategory)
CategoryRouter
        .route('/create')
        .post(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin"]), CategoryController.createCategory)

CategoryRouter
        .route('/update/:id')
        .put(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin"]), CategoryController.updateCategory)
CategoryRouter
        .route('/delete/:id')
        .delete(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin"]), CategoryController.deleteCategory)
CategoryRouter
        .route('/:id')
        .get(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]), CategoryController.getOneCategory)






module.exports = CategoryRouter;