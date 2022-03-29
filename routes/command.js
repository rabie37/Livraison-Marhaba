const express = require('express');
const CommandController = require('../controllers/Comand_ProController')
const CommandRouter = express.Router();



CommandRouter
        .route('/')
        .get(async (req, res)=> CommandController.getCommand(req, res))
        .post(async (req, res)=> CommandController.createCommand(req, res))
        .put(async (req, res)=> CommandController.updateCommand(req, res))
        
CommandRouter
        .route('/:id')
        .delete(async (req, res)=> CommandController.deleteCommand(req, res))






module.exports = CommandRouter;