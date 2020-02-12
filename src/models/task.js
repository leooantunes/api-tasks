const mongoose = require('../database');

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
    },
    done: {
        type: Boolean,
        require: true,
    },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;