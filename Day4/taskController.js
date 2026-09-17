const getTasks = (req, res) => {
    res.json([
        { id: 1, title: "Learn Node.js" },
        { id: 2, title: "Learn Express.js" }
    ]);
};

module.exports = { getTasks };