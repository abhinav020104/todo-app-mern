const mongoose = require("mongoose");
//mongodb+srv://developerchinmay08:NE4PXHoxN01w9chW@cluster0.rh71mth.mongodb.net/todos
mongoose.connect("mongodb+srv://developerchinmay08:NE4PXHoxN01w9chW@cluster0.rh71mth.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}