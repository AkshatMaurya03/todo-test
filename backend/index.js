const express = require (' express');
const { Todo } = require('./db');
const { todoSchema, updatetodoSchema } = require('./zod/schema');
const app=express();
app.use(express.json());

app.post('/enterTodos', async function (req,res){
    const todo = req.body;
    const isvalid = todoSchema.safeParse(todo);
    if (!isvalid.success) {
        return res.status(400).json({ error: isvalid.error.errors });
    }
    await Todo.create({
        title:todo.title,
        description:todo.description,
        completed:todo.completed
    })
    res.json({ message: 'Todo created successfully' });
})
app.get('/showtodos', async function (req, res) {
    const todos = await Todo.find();
    res.json(todos);
});

app.put("updateTodo", async function (req, res) {
    const { id } = req.body;    
    const isvalid= updatetodoSchema.safeParse(req.body);
    if (!isvalid.success) {
        res.status(400).json({ error: isvalid.error.errors });
        return;
    }
    await Todo.updateOne(
        { _id: id },
        { $set: { completed: req.body.completed } }
    );
    res.json({ message: 'Todo updated successfully' });     
});


app.listen(3000);