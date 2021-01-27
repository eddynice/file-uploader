var express = require('express');
var app =  express()
const fileUpload = require('express-fileupload');
const cors = require('cors');
var bodyParser = require('body-parser');


app.use(fileUpload())
app.use(cors());
app.use(bodyParser.json());
//upload Endpoint
app.post('/upload', (req, res)=>{
    if(req.files === null){
        return res.status(400).json({
            msg:"no file upload"
        });

    }
    const file = req.files.file;
    file.mv(`${__dirname}/public/uploads/${file.name}`, err=>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
    })
})

app.listen(5000, ()=> console.log("server stater"))

//router.get('/', function(req, res){
    //res.send('Get rote on things');

//})

//router.post('/', function(req, res){
//    res.send('Post route on things');
    
//})

//module.exports = router