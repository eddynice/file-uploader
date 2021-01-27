var http = require('http')
var express = require('express')
var app = express();

app.use('/admins', function(req, res, next) { 
    console.log('%s %s — %s', (new Date).toString(), req.method, req.url);  
    return next(); 
});

app.get('/', function(reg,res){
    res.send('helo world');
    
})


app.use(logger)

app.get('/helo', function(reg,res){
    res.send('heloeee world');
    
})
function logger(req, res, next){
    console.log("log")
    next()
}
app.get('/name/:user_name', function(req,res) {
      res.status(200); 
       res.set('Content-type', 'text/html'); 
        res.end('<html><body>' + 
         '<h1>Hello ' + req.params.user_name + '</h1>' + 
          '</body></html>' ); 
        
        });

        app.get('/admin', function(req, res, next) { 
             if (!req.query._token)
              return next(new Error('no token provided')); 
             }, function(req, res, next) { 
             res.render('admin');  }); 



http.createServer(app).listen(8080)