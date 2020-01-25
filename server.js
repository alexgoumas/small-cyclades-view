const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();
const clientRoot = path.resolve(__dirname, "dist/");
app.use(express.static(clientRoot));

app.get("/*", (req, res) => {
    res.sendFile(`${clientRoot}/index.html`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`); 
});