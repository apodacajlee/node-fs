const fs = require("fs");

fs.unlink("HelloWorld.txt", (err) => {
    if (err) {
        return console.log(err);
    }
    else {
        return console.log("Successfully deleted file");
    }
});