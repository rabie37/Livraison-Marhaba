const express = require('express');
const CommandController = require('../controllers/Comand_ProController')
const CommandRouter = express.Router();
const AuthMiddleware = require("./../middlewares/AuthMiddleware");



CommandRouter
        .route('/list')
        .get(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]),CommandController.getCommand)
CommandRouter
        .route('/create')
        .post(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]),CommandController.createCommand)
CommandRouter
        .route('/update/:id')
        .put(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]),CommandController.updateCommand)

CommandRouter
        .route('/update/:id')
        .delete(AuthMiddleware.isLogin, AuthMiddleware.hasRole(["admin", "client", "delivery"]),CommandController.deleteCommand)






module.exports = CommandRouter;