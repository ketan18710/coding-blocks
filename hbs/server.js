const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');
app.get('/',(req,res)=>{
    res.render('index',{data : 'ye hai data'})
})
app.listen(5000,()=>{
    console.log('listening at port 5000')
})
app.engine('handlebars',expbs({
    layoutsDir: path.join(__dirname,'views')
}))
app.set('view engine','handlebars')