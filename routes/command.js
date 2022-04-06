const express = require('express');
const CommandController = require('../controllers/CommandController')
const CommandRouter = express.Router();
const AuthMiddleware = require("./../middlewares/AuthMiddleware");



CommandRouter
        .route('/list')
        .get(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]), CommandController.getCommand)
CommandRouter
        .route('/create')
        .post(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]), CommandController.createCommand)
CommandRouter
        .route('/update/:id')
        .put(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]), CommandController.updateCommand)

CommandRouter
        .route('/:id')
        .delete(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]), CommandController.getOneCommand)
CommandRouter
        .route('/delete/:id')
        .delete(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]), CommandController.deleteCommand)
CommandRouter
        .route('/:id/set/delivery/:userid')
        .get(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin"]), CommandController.set_delivery)
CommandRouter
        .route('/status/:id/:status')
        .get(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin"]), CommandController.status_change_command)






module.exports = CommandRouter;