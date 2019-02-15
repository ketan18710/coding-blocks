let inp = $('#inp');
let btn = $('#btn');
let content = document.getElementById('content');
btn.click(function(){
    console.log('www')
//     $.ajax({
//         url : `/add`,
//         method : 'post',
//         data : JSON.stringify({'k' : 'abc'})
//     })
    $.post('/add',{'data' : inp.val()},function(data){
        display(inp.val())
    })
})
function display(data){
    let text = document.createTextNode(data);
    let li = document.createElement('li');
    let del_btn = document.createElement('button');
    let del_btn_text = document.createTextNode('delete');
    del_btn.appendChild(del_btn_text);
    li.appendChild(text);
    li.appendChild(del_btn);
    content.appendChild(li);
    del_btn.addEventListener('click',function(){
        content.removeChild(this.parentElement);
        $.post('/del',{'data' : data});
    })
}