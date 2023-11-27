const fs = require("fs");

fs.writeFile("./HelloWorld.txt", "Hello, World!", (err) => {
    if (err) {
        return console.log(err);
    }
    else {
        return console.log("Successfully created Hello World file.");
    }
});