var express = require('express')
var app = express();

//first middleware b4 response is sents
app.use( function(req ,res, next){
    console.log('start');
    next();
})

//route handle that send the response
app.get('/first', function(reg,res, next){
    res.send('middle');
    next()
    
})
 
app.use('/', function(req, res){
    console.log('End');
})

app.listen(3000)
