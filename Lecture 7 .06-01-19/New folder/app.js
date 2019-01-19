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
   
}