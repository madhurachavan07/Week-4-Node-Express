const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("Day 2 Middleware Working");
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});