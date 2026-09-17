const express = require("express");

const app = express();

// Request Body
app.use(express.json());

// Query String
app.get("/search", (req, res) => {
    res.json({
        query: req.query.name
    });
});

// Route Parameter
app.get("/tasks/:id", (req, res) => {
    res.json({
        taskId: req.params.id
    });
});

// Request Body
app.post("/tasks", (req, res) => {
    res.json({
        message: "Task received",
        task: req.body
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});