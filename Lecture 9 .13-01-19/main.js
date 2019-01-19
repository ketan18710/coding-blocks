/*function foo(){
    console.log('Foo');
    setTimeout(function(){
        imangeProcessing(function(){
            console.log('done');
        });
    },0)
    console.log('bar');
}

foo();
// when function is passed as a parameter in a fuction than the passed function is called callback of the other function
function imangeProcessing(cb){
    let x = 5;
    console.log(x);
    cb();
}*/
function foo(){
    console.log('Foo');
    setTimeout(function(){
        imangeProcessing(function(y){
            setImageValue(y,function(z){
                console.log(y+z);
            })
        });
    },0)
    console.log('bar');
}
function imangeProcessing(cb){
    let x = 5;
    // console.log(x);
    cb(x);
}
function setImageValue(y,cb){
    setTimeout(function(){
        console.log('async setValue');
        cb(y+1);
    },)
    console.log('still processing');
}
foo();