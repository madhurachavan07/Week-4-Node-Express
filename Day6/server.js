const express = require("express");

const app = express();

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// In-memory task list
let tasks = [
    { id: 1, title: "Learn Node.js", completed: false },
    { id: 2, title: "Learn Express.js", completed: false }
];

// GET - Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// POST - Add a new task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// PUT - Toggle task completion
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.completed = !task.completed;

    res.json(task);
});

// DELETE - Remove a task
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const taskExists = tasks.some(task => task.id === id);

    if (!taskExists) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: "Task deleted successfully"
    });
});

// 404 error handling
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Start server
app.listen(5000, () => {
    console.log("Day 6 Task Tracker API running on http://localhost:5000");
});