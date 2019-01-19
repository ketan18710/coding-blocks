var input = document.getElementById('inp');
// use qyery selector for both id and class
// document.querySelector()
/*
    Add to cart functionality
    @param{}
*/
var dis = document.getElementById('dis');
var a = [];
function abc(){
    a.push(input.value);
    console.log(a);
    console.log(dis.innerHTML); 
    dis.innerHTML =``;
    // for(i = 0;i< a.length ;i++){
    //     dis.innerHTML += `${a[i]}`;
    dis.innerHTML += `${a}`;
    }

/*
    // alternate method
    btn.onlcik = function(){
        let val = inp.value;
        let.li= document.createElement('li');
        // assuming we were putting inputs in list,so we have a ul or ol in 
        //step 1:we created a text node
        let text = documnet.createTextNode(val);
        step 2: we created text node
        li.appendChild(text);
        //Putting Text Inside element
        result.appendChild(li);
    }
*/
