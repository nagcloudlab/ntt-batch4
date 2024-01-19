
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
    user_id: Number
});


const Todo = mongoose.model('Todo', TodoSchema,"todos");

module.exports = Todo;