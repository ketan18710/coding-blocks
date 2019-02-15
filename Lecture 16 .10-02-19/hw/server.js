const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const port = process.env.PORT|| 5002 ;

 var bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
app.use(bodyParser.text());
const taskArray = [];
/**
 * express.static 
 * @function - It delievers static resources
 * @param {public dir path}
 * @param {__dirname} - It is the currect directory path of server.js
 */
app.use('/',express.static(path.join(__dirname,'frontend')));
// app.post('/addTodo', (req,res)=>{
//    let task = req.body;
//    console.log(task);
//    key = Object.keys(task)[0]
//    val = Object.values(JSON.parse(task))[0]
// //    console.log(val);
//     db.insertDoc(key,val)
// //    taskArray.push(task);
//    res.sendStatus(200);
// });

// app.get('/data', (req,res)=>{
//     res.send(taskArray);
// })
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
})
app.listen(port, () => {
    console.log(`Listening at ${port}`);
    db.connect();
});