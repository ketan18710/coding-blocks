<link rel="shortcut icon" href="#" />
let id = $('#em');
let password = $('#password');
let btn = $('#btn');
btn.click(function(){
    console.log('abc');
   
   $.ajax({
       'url':'/t',
       'method': `post`,
       'data': JSON.stringify({'val':id.val()}),
       'success': function(data){
           console.log(data)
       }
   })
})