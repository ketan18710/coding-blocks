const express = require('express');
const app = express();
console.log('ketan');
app.use('/',express.static('frontend'))
// /app.get('/',function(req,res){
//      res.send('home');
// })
app.post('/t',function(req,res){
    console.log('hh');
    let c = (req.body);
    console.log(c);
})
 app.listen(5001,function(){
     console.log('server on');
 })