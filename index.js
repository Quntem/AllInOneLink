var express = require("express")
var app = express()
var fs = require("fs")
var path = require("path")
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src'));
var port = 5500
var currentfile = ""

app.use(express.json());

app.use("/", express.static("src"))

app.get('/:name', (req, res) => {
    fs.readFile("linkindex/" + req.params.name + ".json", 'utf8', (err, data) => {
        if (!err) {
            currentfile = JSON.parse(data)
            res.render('useraiolpage', { username: req.params.name, pagefile: currentfile })
        } else {
            res.sendFile(path.join(__dirname, '/src/404.html'))
        }
    });
})

app.get('/api/page/:name/links/list', (req, res) => {
    fs.readFile("linkindex/" + req.params.name + ".json", 'utf8', (err, data) => {
        if (!err) {
            currentfile = JSON.parse(data)
            res.json(currentfile.links)
        }
    });
})

app.get('/api/page/:name/colors/get', (req, res) => {
    fs.readFile("linkindex/" + req.params.name + ".json", 'utf8', (err, data) => {
        if (!err) {
            currentfile = JSON.parse(data)
            res.json(currentfile.theme)
        }
    });
})

app.post('/api/page/create/', (req, res) => {
    fs.writeFile("linkindex/" + req.query.pagename + ".json", JSON.stringify({
        "name": req.query.pagename,
        "userid": req.query.userid,
        "theme": {
            "bgcolor": "#1a1a1a",
            "cardcolor": "#535353",
            "textcolor": "#ffffff"
        },
        "links": [

        ]
    }), err => {
        if (!err) {
            res.status(200).send("Success")
        }
    })
})

app.post('/api/page/links/add/', (req, res) => {
    fs.readFile("linkindex/" + req.query.pagename + ".json", 'utf8', (err, data) => {
        if (!err) {
            currentfile = JSON.parse(data)
            currentfile.links.push({
                "id": new Date().toString(),
                "name": req.query.name,
                "url": req.query.url
            })
            fs.writeFile("linkindex/" + req.query.pagename + ".json", JSON.stringify(currentfile), err => {
                if (!err) {
                    res.status(200).send("Success")
                }
            })
        }
    });
})

app.post('/api/page/:name/colors/update', (req, res) => {
    fs.readFile("linkindex/" + req.params.name + ".json", 'utf8', (err, data) => {
        if (!err) {
            currentfile = JSON.parse(data)
            currentfile.theme = req.body
            fs.writeFile("linkindex/" + req.params.name + ".json", JSON.stringify(currentfile), err => {
                if (!err) {
                    res.status(200).send("Success")
                }
            })
        }
    });
})

app.listen(5500, () => {
    console.log("Listening on " + port)
})