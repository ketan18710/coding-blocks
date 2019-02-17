const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const port = process.env.PORT|| 5003 ;

 var bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
app.use(bodyParser.text());
const taskArray = [];

app.use('/',express.static(path.join(__dirname,'frontend')));

app.post('/add',(req,res)=> {
    data = req.body;
    taskArray.push(Object.values(data)[0]);
    db.insertDoc(data);
    res.send(taskArray);
})
app.post('/del',(req,res)=>{
    console.log(taskArray);
    data = Object.values(req.body)[0];
    let index = taskArray.indexOf(data);
    taskArray.splice(index,1);
    console.log(taskArray);
    db.delDoc(data);

})
app.post('/update',(req,res)=>{
    console.log(taskArray);
    o_data = Object.values(req.body)[0];
    u_data = Object.values(req.body)[1];
    let index = taskArray.indexOf(o_data);
    taskArray[index] = u_data;
    db.udtDoc(o_data,u_data);
    console.log(taskArray);
})
app.get('/in_display',(req,res)=>{
    res.send(taskArray);
})
app.listen(port, () => {
    console.log(`Listening at ${port}`);
    db.connect(function(){
        fill_list();
    });
    
});
function fill_list(){
    db.getValues(function(data){
        for(i = 0;i<data.length;i++){
            taskArray.push(data[i]);
        }
    })
}
