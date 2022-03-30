const express = require('express');
const UserController = require('../controllers/UserController')
const UserRouter = express.Router();



UserRouter
        .route('/list')
        .get(UserController.getUser)

UserRouter
        .route('/create')
        .post(UserController.createUser)

UserRouter
        .route('/update/:id')
        .put(UserController.updateUser)
UserRouter
        .route('/delete/:id')
        .delete(UserController.deleteUser)






module.exports = UserRouter;