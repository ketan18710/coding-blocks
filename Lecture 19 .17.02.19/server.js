const express = require('express');
const app = express();
const path = require('path');
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'public'));
app.get('/add',function(req,res){
    res.render('index',{
        todo: 'homework'
    })
})