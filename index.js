const express = require("express");
// const { createNode, readNode } = require("./input.json")
const port = 8000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world")
});

app.get("/users", (req, res) => {
    const users = readNode();
    res.send(users);

});

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port)

});
