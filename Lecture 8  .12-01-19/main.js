var inp = document.querySelector('#inp');
var result = document.querySelector('#result');
var btn = document.querySelector('#btn');

btn.onclick = function(event){
   
    add();
}
inp.onkeypress = function(event){
    console.log(event);
    if(event.keyCode == 13){
        
        add();
    }
}
function add(){
    let val = inp.value;
    let li= document.createElement('li');
    let text = document.createTextNode(val);
    li.appendChild(text);
    result.appendChild(li);
    inp.value = '';
}