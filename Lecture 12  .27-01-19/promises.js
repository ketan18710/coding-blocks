var fs = require('fs');
let Data = '';
function readFile(){
    return new Promise((resolve,reject) => {
        fs.readFile('./padh.txt', function(err,data){
            if(err) return err;
            Data += data.toString();
            resolve(Data);
        })
    })
}
function writeFile(){
    return new Promise((res,rej) =>{
        fs.writeFile('./padh.txt',Data + 'naya data',function(err,data){
            if (err) rej(err);
            res('wirtten');
        })
    })
}
readFile().then(writeFile).then((data) =>{
        console.log(data);
}).catch(e=>{
    console.log(e)
})