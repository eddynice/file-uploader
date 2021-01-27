
var express = require('express');
//const { response } = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function (req, res){
    res.sendFile( __dirname + "/" + "index.html");
 
}) 


//middleware function to log request protocol
//app.use('/first', function(req ,res, next){
   // console.log('a request of things');
    //next();
//})

//route handle that send the response
app.get('/process_get', function(req, res){
    response ={
        First_Name:req.query.First_Name,
        Last_Name:req.query.Last_Name
    };
    console.log(response); 
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
    var host= server.address().address
    var port =server.address().port
    console.log("Example", host, port)
})

/**app.get('/process_get', function(req,res){
    res.send('helo ssssworld');
})

app.get('/llll', function(reg,res){
    res.send('helo world');
})

app.delete('./list_us',function(req, res){
    res.send('pagee')
})


app.listen(5000);
**/