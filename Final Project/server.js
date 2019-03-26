const express = require('express');
const app = express();
const path = require('path');
const expbs = require('express-handlebars');
const db = require('./db');
const port = process.env.PORT|| 5000 ;
app.set('view engine', 'hbs');
app.engine('handlebars',expbs({
    layoutsDir: path.join(__dirname,'frontend')
}))
app.set('views', path.join(__dirname, 'frontend'));
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use('/',express.static(path.join(__dirname,'frontend')));
app.post('/input',(req,res)=>{
    data = req.body;
    console.log(data);
    // let speakers = Object.values(data)[0];
    // let speaker_des = Object.values(data)[1];
    // let ev_name = Object.values(data)[2];
    // let ev_des = Object.values(data)[3];
    // let con_num = Object.values(data)[4];
    // let con_em = Object.values(data)[5];
    // console.log(speakers);
    res.render('index',{speaker : ['a','b'] },(err,html)=>{
        if(err) throw err;
        console.log('dddddd');
    })
    // res.render('index', {
    // speaker_names : speakers,
    // speaker_des : speaker_des,
    // ev_name :ev_name,
    // ev_des : ev_des,
    // con_num:con_num,
    // con_em:con_em
    //  },function(err,data){
    //      if (err) throw err;
    //      console.log(data);
    //  })
})
app.listen(port, () => {
    console.log(`Listening at ${port}`);
    db.connect(function(){
        console.log('done');
    })
})