const express = require('express');
const UserController = require('../controllers/UserController')
const UserRouter = express.Router();



UserRouter
        .route('/')
        .get(async (req, res)=> UserController.getUser(req, res))
        .post(async (req, res)=> UserController.createUser(req, res))
        
UserRouter
        .route('/:id')
        .delete(async (req, res)=> UserController.deleteUser(req, res))
        .put(async (req, res)=> UserController.updateUser(req, res))






module.exports = UserRouter;