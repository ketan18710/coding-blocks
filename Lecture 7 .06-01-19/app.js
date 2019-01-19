function shoppingList(){
    alert (['apple','kiwi','orange']);
}
// alert stops execution jabtak koi use padh nahi leta
function enterUsername(){
    var name = prompt('enter username');
    alert('username : ' + name);
}
function confirmEvent(){
    var name = confirm('do you agree');
    if (name){
        alert('done')
    }
    else{ 
        alert('fail')

    }
    // 'var' is hoist at compiler phase so interpretor phase pe use pata hoga ki ek variable hai koi but usko value nahin pata till it reaches that line so it shows undeclared instead of errpor
    //'let' is not hoisted , basically works like the variable we use in our normal programming languages
    var b
    var b = 5;
    function a()
    {
        var k =6;
        if(true)
        {
            let k  = 7;
        }
        consule.log(k)
        return k;
    }

}
console.log(b());
var b = function(){}
// here we will have an error as in interpretor phase var b is an undefined func(because compiler phase pe use sirf pata hai ki var b hai )and calling undefied func is an error
//shows undefined in log
console.log(b());
let b = function(){}
//shows an error because iske liye b bana hi nahi kahi 