var input = document.getElementById('inp');
var res = document.getElementById('abc');
var res1 = document.getElementById('abc1');
var a  = [];
function add(){
    a.push(input.value);
    console.log(a);
    console.log(input.value);
     res.innerHTML = `<p> ${res.innerHTML} ${input.value}`;
     //this clears whole text in the box ansd rewrites
    res1.innerHTML += ` ${input.value}`; 
}
// after defining array a use a.push to push elemnts in array