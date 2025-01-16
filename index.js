var express = require("express")
var app = express()
var port = 5500

app.use("/", express.static("src"))

app.listen(5500, () => {
    console.log("Listening on " + port)
})