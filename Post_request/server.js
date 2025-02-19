const express = require("express");
const path = require("path"); // Import path module
const app = express();
const port = 4500;

app.get("/addUser", (req, res) => {
    res.sendFile(path.join(__dirname, "rp.html")); // Correct usage of __dirname
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
