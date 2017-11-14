const express = require("express")
const app = express()
const bodyParser = require('body-parser') //Bdoy.Parser plugin 
app.use(bodyParser.urlencoded()) //parse (look into) the body as a json

app.set('view engine', 'pug')

app.get("/", (req, res) => {
    res.render('index')
})

app.post("/login", function(req, res) {
    console.log("Username is: " + (req.body.username))
    console.log("Password is: " + (req.body.password))
  	res.render("index", {isLoggedIn:true, user:(req.body.username) //this is telling the post that if the user is LoggedIn, bring back the req.body.username 
	})
})	
app.get("/", function(req,res){
	res.render("index")
})

app.get("/contact", (req, res) => {
    let list = ["cake", "ducky", "Coke", "pills"] //-list is the var value
    res.render('Contact', {
        isLoggedIn: true,
        shopBasket: list, //-shopBasket is the key, List is the value
    })
})


app.listen(3001, () => {
    console.log("Yes Honey?")
})