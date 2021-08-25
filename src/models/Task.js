const mongoose = require('mongoose')

// Basic task schema
const taskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,

    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task