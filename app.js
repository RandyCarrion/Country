const express = require("express")
const app = express()
const bodyParser = require('body-parser') //Bdoy.Parser plugin 
app.use(bodyParser.urlencoded()) //parse (look into) the body as a json
app.use(bodyParser.json())
var fs = require("fs")

app.set('view engine', 'pug')

app.get("/", (req, res)=>{
    fs.readFile('./users.json', 'utf8', function(err, data) {
            if (err) {
                throw err;
            }
            var read = JSON.parse(data)
            res.render('index', { read: read })
    })
})

app.post("/", (req, res) => {
    if (req.body.firstname !== "" && req.body.lastname !== "" && req.body.email !== "") {
        fs.readFile('./users.json', 'utf8', function(err, data) {
            if (err) {
                throw err;
            }
            var read = JSON.parse(data)
            read.push(req.body)
            fs.writeFile("users.json", JSON.stringify(read), function(err) {
                if (err) {
                    throw err;
                }
                fs.readFile("users.json", "utf8", function(err) {
                    if (err) {
                        throw err;
                    }
                    var write1 = JSON.parse(data)
                    console.log(JSON.stringify(write1) + "++")
                })
                res.render('index',{read:read})
            })
        })
    }
})
function validateForm() {
    var x = document.forms["firstname"]["lastname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}console.log("oh babe")

app.post("/search", function(req, res) {
    fs.readFile('./users.json', 'utf8', function(err, data) {
        if (err) {
            throw err;
        }
        var read = JSON.parse(data)
        for (var i = 0; i < read.length; i++) {
            if (req.body.firstname == read[i].firstname || req.body.lastname == read[i].lastname || req.body.email == read[i].email) {
                res.render('search', {read:read})
            } //this tells it to pull the string in body 'first'
        }
    })
})



app.listen(3001, () => {
    console.log("Yes Honey?")
})


// fs.readFile('./users2.json', 'utf8', function(err, data){
//     var oldList=JSON.parse(data)
//     if (err) {
//         throw err;
//     } var newList= JSON.parse(data)
//         var  
//        var firstname=(req.body.first)
//        var lastname=(req.body.last)
//        var email=(req.body.email)

// app.get("/", function(req, res) {
//     res.render("index")
// })

// app.get("/contact", (req, res) => {
//     let list = ["cake", "ducky", "Coke", "pills"] //-list is the var value
//     res.render('Contact', {
//         isLoggedIn: true,
//         shopBasket: list, //-shopBasket is the key, List is the value
//     })
// })