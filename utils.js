const fs = require("fs");
const readNode = () => {
    const data = fs.readFileSync("product.json", "utf-8");
    return JSON.parse(data);
};
const id = Math.floor(Math.random() * 100);
const createNode = (data) => {
    fs.readFile("product.json", "utf-8", function (err, json) {
        if (err) {
            console.error(err);
            return;
        }
        const previousData = JSON.parse(json);
        previousData.push(data);
        fs.writeFile("product.json", JSON.stringify(previousData), (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
};

const updateNode = (id, node) => {
    fs.readFile("product.json", "utf-8", (err, json) => {
        if (err) return console.error(err);
        const previousData = JSON.parse(json);
        const nodeToUpdate = previousData.find((element) => element.id === id);
        const newArray = previousData.filter((element) => element.id !== id);
        newArray.push({ ...nodeToUpdate[nodeToUpdate], ...node });
        fs.writeFile("product.json", JSON.stringify(newArray), (err) => {
            if (err) return console.error(err);
        });
    });
};

const deleteNode = (id) => {
    fs.readFile("product.json", "utf-8", (err, json) => {
        if (err) return console.error(err);
        const previousData = JSON.parse(json);
        const newArray = previousData.filter((element) => element.id == id);

        fs.writeFile("product.json", JSON.stringify(newArray), (err) => {
            if (err) return console.error(err);
        });
    });
};

module.exports = { readNode, createNode, updateNode, deleteNode };
