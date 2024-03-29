const express = require("express");
const app = express();
const { readNode, createNode, updateNode, deleteNode } = require("./index");
const PORT = 8080;
const cors = require("cors");
app.use(cors("http://localhost:3000/products"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/products", (req, res) => {
    const users = readNode();
    res.send(users);
});

app.post("/products", (req, res) => {
    const product = req.body;
    createNode(product);
    res.status(201).send("Success");
});

app.put("/products/:id", (req, res) => {
    const id = req.params.id;
    const node = req.body;
    updateNode(Number(id), node);
    res.send("success update");
});

app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    deleteNode(Number(id));
    res.send("success delete");
});

app.listen(PORT, () => {
    console.log("server is running on http://localhost:" + PORT);
});
