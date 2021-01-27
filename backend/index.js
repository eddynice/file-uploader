var express = require('express');
var app = express();

const things = require('./things.js');
app.use('/things',things)

var put = require('./put.js');
app.use('/put',put)

app.listen(5000);