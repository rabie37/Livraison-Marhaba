const express = require('express');
const Command_ProController = require('../controllers/ComandProController')
const Command_ProRouter = express.Router();



Command_ProRouter
        .route('/')
        .get(async (req, res)=> Command_ProController.getCommand_Pro(req, res))
        .post(async (req, res)=> Command_ProController.createCommand_Pro(req, res))
        .put(async (req, res)=> Command_ProController.updateCommand_Pro(req, res))
        
Command_ProRouter
        .route('/:id')
        .delete(async (req, res)=> Command_ProController.deleteCommand_Pro(req, res))






module.exports = Command_ProRouter;