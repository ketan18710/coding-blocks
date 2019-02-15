var mysql = require('mysql');
var connection = {};
function connectDb(){
    connection = mysql.createConnection({
        host : `127.0.0.1`,
        user : `Kanav`,
        password : `password`,
        database : `toDolist`
    });
    connection.connect(function(err){
        if (err) throw err;
        console.log(connection.threadId);
        findList();
    })
}
function findList(){
    connection.query(`Select * from todo`,function(err,data){
        console.log(data);
    })
}
module.exports = {
    connectDb
}