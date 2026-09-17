const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const taskRoutes = require("./controllers/routes/taskRoutes");

app.use("/", taskRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.listen(5000, () => {
    console.log("Day 4 server running on http://localhost:5000");
});