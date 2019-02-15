const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('./db');
const port = process.env.PORT || 5000;
const app = express();
console.log('ketan');
app.use('/',express.static('frontend'))
// /app.get('/',function(req,res){
//      res.send('home');
// })
app.use(parser.urlencoded({extended: false}))
app.use(parser.text());
app.post('/t',function(req,res){
    console.log('hh');
    let c = (req.body);
    console.log(c);
})
 app.listen(port,function(){
     console.log('server on');
     db.connect();
 })