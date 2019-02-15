var inp = document.querySelector('#inp');
var result = document.querySelector('#result');
var button = document.querySelector('#click');
let taskList = JSON.parse(localStorage.getItem('todoArray')) || [];
display();
button.onclick = function(event){
   
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
    generateNode(val);
    taskList.push(val);
    saveLocalStorage(taskList);
    inp.value = '';
}
function display() {
  
    let data = localStorage.getItem('todoArray')  
    let res = JSON.parse(data) || [];
    res.forEach((val)=>{
         generateNode(val);
    })
 }
 function removeVal(index) {
    taskList.splice(index,1);
    saveLocalStorage(taskList);
    
 }
 function saveLocalStorage(arr) {
    localStorage.setItem('todoArray', JSON.stringify(arr)); 
 } 
function generateNode(val){
    let li= document.createElement('li');
    let text = document.createTextNode(val);
    li.appendChild(text);
    let btn = document.createElement('button');
    let btnText = document.createTextNode('remove');
    btn.appendChild(btnText)
    li.appendChild(btn);
    result.appendChild(li);
    btn.addEventListener('click', function(){
        let index =  taskList.indexOf(val);
        removeVal(index);
        result.removeChild(this.parentElement);
    })
}