var express = require('express');
var router =  express.Router();

router.get('/', function(req, res){
    res.send('Get roqutdde on put');

})

router.post('/', function(req, res){
    res.send('Post rodute on put');
    
})

module.exports = router