var express = require('express');
var app = express();

//a simple request time logger
app.use(function(req, res, next){
    console.log('a new request recieve at ' + Date.now());
    next();
});

app.get("/:id([0-9]{5})", function(req,res){
    res.send('this id' + req.params.id);
})

app.get("/", function(req,res){
    res.send('home page');
})

app.get("/osa/:name/:id", function(req,res){
    res.send('this id' + req.params.id);
})




app.get("*", function(req,res){
    res.send('sorry this is an invalid url');
})





app.listen(3000)