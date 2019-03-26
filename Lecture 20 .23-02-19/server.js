var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use('/',express.static('public'));
server.listen(5000,function(){
    console.log('running 5000');
})
io.on('connection',function(socket){
    console.log(socket.id);
    socket.on('NewMsg',(data)=>{
        console.log(data.key);
        io.emit('broadcast',data.key)
    })
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
// socket.broadcast.emit - sabko dikhega mere alava
//io.emit - sabko emit
// socket.emit - mujhe dikhega , event yaega to inout isse lo server pe bhejo vaha se upar wale do use karlo