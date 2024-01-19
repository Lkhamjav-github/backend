const fs = require("fs");
const readNode = () => {
    const data = fs.readFileSync("product.json", "utf-8");
    return JSON.parse(data);
};

const createNode = (data) => {
    try {
        const json = fs.readFileSync("product.json", "utf-8");

        const previousData = JSON.parse(json);

        const id = Math.floor(Math.random() * 100);
        data.id = id;

        previousData.push(data);

        fs.writeFileSync("product.json", JSON.stringify(previousData));
        console.log("Data added successfully!");

        return data;
    } catch (err) {
        console.error("Error creating node:", err);
        throw err;
    }
};
const updateNode = (id, node) => {
    try {
        const json = fs.readFileSync("product.json", "utf-8");
        const previousData = JSON.parse(json);
        const nodeToUpdate = previousData.find((element) => element.id === id);
        const newArray = previousData.filter((element) => element.id !== id);

        newArray.push({ ...nodeToUpdate, ...node });
        fs.writeFileSync("product.json", JSON.stringify(newArray));

        console.log("Data update successfully!");
        return id, node;
    } catch (err) {
        console.error("Error creating node:", err);
        throw err;
    }
};

const deleteNode = (id) => {
    try {
        const json = fs.readFile("product.json", "utf-8");

        const previousData = JSON.parse(json);

        const newArray = previousData.filter((element) => element.id == id);

        fs.writeFile("product.json", JSON.stringify(newArray));
        console.log("Data update successfully!");

        return id;
    } catch (err) {
        console.error("Error creating node:", err);
        throw err;
    }
};

module.exports = { readNode, createNode, updateNode, deleteNode };
