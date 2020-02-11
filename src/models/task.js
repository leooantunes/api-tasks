const mongoose = require('../database');

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;