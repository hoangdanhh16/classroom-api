const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    teacher: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    numStudent: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Classes', classSchema);