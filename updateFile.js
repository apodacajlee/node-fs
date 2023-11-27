const fs = require("fs");

fs.appendFile("HelloWorld.txt", " Here is more text!", (err) => {
    if (err) {
        return console.log(err);
    }
    else {
        return console.log("Successfully appended to file");   
    }
});