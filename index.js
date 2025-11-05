const express = require('express')
const app = express()
const path = require('path')

const port = 3000;
const htmlPath = path.join(__dirname, "public/index.html");
const cssPath = path.join(__dirname, "public/style.css");

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(htmlPath);
})

app.listen(port, (err) => {
    if (err) {
        console.log("Failed to listen on port 3000");
    }
    console.log("Listening on port 3000");
});



