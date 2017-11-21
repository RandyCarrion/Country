const express = require("express")
const app = express()
const bodyParser = require('body-parser') //Bdoy.Parser plugin 
app.use(bodyParser.urlencoded()) //parse (look into) the body as a json
app.use(bodyParser.json())
var fs = require("fs")

app.set('view engine', 'pug')

app.get("/", (req, res) => {
    fs.readFile('./users.json', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        var read = JSON.parse(data)
        res.render('index', { read: read })
    })
})
app.post("/signup", (req,res)=> {
    fs.readFile('./users.json', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        var read = JSON.parse(data)
        read.push(req.body)
        fs.writeFile("users.json", JSON.stringify(read), function(err) { //
            if (err) {
                throw err;
            }
            console.log("reached")
            res.redirect('/')
        })
    })
})
app.get("/signup", (req, res) => {
    fs.readFile('./users.json', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        var read = JSON.parse(data)
        res.render('signup', { read: read })
    })
})

// function validateForm() {
//     var x = document.forms["firstname"]["lastname"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }
app.get("/search", function(req, res){ ///page is thre page URL and 'page' is the route 
    res.render('search')
})

app.post("/search", function(req, res) {
    fs.readFile('./users.json', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        var read = JSON.parse(data)
        // console.log(req.body)
        var match = []
        for (var i = 0; i < read.length; i++) {
            if (req.body.search1 == read[i].firstname || req.body.search1 == read[i].lastname || req.body.search1 == read[i].email) {
                // console.log(read[i])
                match.push(read[i])
            } //this tells it to pull the string in body 'first'
        }res.render('searchResults', {match:match})
    })
})

// app.post("/searchResults", function(req, res) {
//     fs.readFile('./users.json', 'utf8', function(err, data) {
//         if (err) {
//             throw err;
//         }
//         res.render('searchResults')
//     })
// })x  
// app.get("/contact", (req, res) => {
//     res.render('Contact', {
//         isLoggedIn: true,
//         read.firstname, //-shopBasket is the key, List is the value
//     })
// })


app.listen(3001, () => {
    console.log("Yes Honey?")
})
