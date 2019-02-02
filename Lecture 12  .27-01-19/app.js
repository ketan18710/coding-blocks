var value = require('./main');
console.log(value.y)
// /on requiring a file it will run main in interpretor mode line by line , so pura main execute hoga
var fs = require('fs');
// fs.readFile('./reads.txt',function(err,data){
//     if(err) return err;
//     console.log(data.toString());
//     // this uses callback function , so like fs ke prototype pe kahi:
//     // fs.prototype.readFile = function(name,cb){
//     //     sara kam fir end mein 
//     //     name=>cb(data)
//     // }
//     // first argumnent of this function is err which is for errors and second is for the actual data , we need to use toString to read it as data itself is in a buffer form
// })
// fs.writeFile('./reads.txt','hi bro',function(err){
//     if(err) return err;
// })
// to ensure write runs after read put wriote file in read file
fs.readFile('./reads.txt',function(err,data){
    if(err) return err;
    console.log(data.toString());
    fs.writeFile('./reads.txt','hi bro',function(err){
        if(err) return err;
    })
})