const express = require('express');
const app = express();
app.use('/',express.static('public'))
// /app.get('/',function(req,res){
//      res.send('home');
// })
app.get('/on',function(req,res){
    res.send('its on');
})
 app.listen(8888,function(){
     console.log('server on');
 })
// port number > 2000 as usse phle walo pe ke os ke apne run karte hain