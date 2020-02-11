const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const tasks = await Task.find();
        return res.send({tasks});
    } catch (err) {
        return res.status(400).send({error: 'Erro list tasks'});
    }
});

router.post('/', async (req,res) => {
    try {
        const task = await Task.create(req.body);
        return res.send({task});
    } catch (err) {
        return res.status(400).send({error: 'Erro create task'});
    }
});

router.delete('/:taskId', async (req,res) => {
    try {
        const task = await Task.findByIdAndRemove(req.params.taskId);
        return res.send();
    } catch (err) {
        return res.status(400).send({error: 'Erro delete task'});
    }
});

module.exports = app => app.use('/tasks', router);