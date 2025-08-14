const mongoose = require('mongoose');
mongoose.connect('');

const modelSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});
const Todo= mongoose.model('Todo',modelSchema);

module.exports = { Todo };