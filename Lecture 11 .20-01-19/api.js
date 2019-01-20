// var xhttp = new XMLHttpRequest();
// var inp = document.getElementById('inp')
// var enter  = document.getElementById('aa')
// var loader = document.getElementById('loader')
// // xhttp.open('GET', 'http://numbersapi.com/28')
// // xhttp.onreadystatechange = function(){
// //     if(this.readyState == 4 && this.status == 200){
// //         console.log(xhttp.responseText);
// //     }
// // }
// // xhttp.send()

// function number(){
//     loader.style.display = 'block';
//     enter.style.display = 'none';
//     let num = inp.value;
//     console.log(num)
//     console.log(`http://numbersapi.com/${num}`)
//     xhttp.open('GET','http://numbersapi.com/' + num)
//      xhttp.onreadystatechange = function(){
//              if(this.readyState == 4 && this.status == 200){
//             //  console.log(xhttp.responseText);
//              enter.innerHTML  +=`<p>${xhttp.responseText}`;
//              loader.style.display = 'none';
//              enter.style.display = 'block';
//              }
//             }     
   
//         xhttp.send();
       
    

// }
$(document).ready(function(){
    let inp = $('inp');
    let enter = $('aa');
    let loader = $('loader');
    
})
