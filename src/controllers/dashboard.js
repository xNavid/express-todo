const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Task = require('../models/Task')

router.get('/dashboard', auth, async (req, res) => {
    let response = {
    }
    try {
        const tasks = await Task.find({ owner: req.user._id }).sort({ _id: -1 });

        if (!tasks) {
            res.status(404).send()
        }

        response.totalTasks = tasks.length;
        response.latestTasks = tasks.slice(0, 3)
        response.tasksCompleted = tasks.filter(task => task.completed).length;

        res.send(response)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router