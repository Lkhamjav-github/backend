const fs = require("node:fs");

fs.readFile("input.txt", function (err, data = 1) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(JSON.stringify(data));
    const write = JSON.stringify({ ip: "1234.22.11", port: 5000 });
    data.push(JSON.parse(write));
    fs.writeFile("input.json", write, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })

}
)