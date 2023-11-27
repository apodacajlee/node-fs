const fs = require("fs");

fs.readFile("./HelloWorld.txt", (err, data) => {
    if (err) {
        return console.log(err);
    }
    else {
        let contents = data.toString();
        return console.log(contents);
    }
});