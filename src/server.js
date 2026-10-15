const express = require("express");


const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.post("/tasks", (req,res) => {
    const title = req.body.title;

    if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
            error: "Task title is required"
        })
    }

    return res.status(201).json({
        id: 1,
        title: title.trim(),
        completed: false,
    })
})

if (require.main === module) {
    const port = Number(process.env.PORT || 3000);
    app.listen(port, "0.0.0.0", () => {
        console.log(`Server running on port ${port}`)
    })
}

module.exports = app;