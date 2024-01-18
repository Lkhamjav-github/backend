const express = require("express");

const PORT = 8080;
const app = express();
app.get("/", (req, res) => {
    res.send("Hello world!")
})
app.get("/products", (req, res) => {
    const products = [];
    res.send(products);
})

app.listen(PORT, () => {

})