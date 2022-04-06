const express = require('express');
const UserController = require('../controllers/UserController')
const UserRouter = express.Router();
const AuthMiddleware = require("./../middlewares/AuthMiddleware");



UserRouter
        .route('/list')
        .get(AuthMiddleware.isLogin, AuthMiddleware.hasRole(['admin']),UserController.getUser)

UserRouter
        .route('/create')
        .post(AuthMiddleware.isLogin, AuthMiddleware.hasRole(['admin']),UserController.createUser)

UserRouter
        .route('/update/:id')
        .put(AuthMiddleware.isLogin, AuthMiddleware.hasRole(['admin']),UserController.updateUser)
UserRouter
        .route('/delete/:id')
        .delete(AuthMiddleware.isLogin, AuthMiddleware.hasRole(['admin']),UserController.deleteUser)
UserRouter
        .route('/status/change/:id/:status')
        .get(AuthMiddleware.isLogin, AuthMiddleware.hasRole(['admin']),UserController.status_change)



module.exports = UserRouter;