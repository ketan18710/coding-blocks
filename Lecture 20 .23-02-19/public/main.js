window.onload = function(){
var inp = document.getElementById('inp');
var btn = document.getElementById('btn');
var name = document.getElementById('name');
// var socket = io.connect();
var socket = io.connect();
function send(){
    socket.emit('NewMsg',{key : inp.value})
}
socket.on('broadcast',(data)=>{
    console.log(data);
})
btn.onclick = function(){
    send();
}}
socket.on('NewConnect')