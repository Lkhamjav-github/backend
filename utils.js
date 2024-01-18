const fs = require("fs")

const readNode = () => {
    const json = fs.readFileSync("products.json", "utf-8");
    const data = JSON.parse(json);
    return data;
};

const createNode = () => {
    const json = fs.readFileSync("products.json", "utf-8");
    const previousData = JSON.parse(json);
    fs.writeFileSync("products.json", JSON.stringify(previousData))
}

module.exports = { createNode, readNode }