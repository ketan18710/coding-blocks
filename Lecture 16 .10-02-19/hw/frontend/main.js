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
        display(data)
    })
})
function display(data){
    let text = document.createTextNode(data);
    let li = document.createElement('li');
    let del_btn = document.createElement('button');
    del_btn.click(function(){
        content.removeChild(this.parent);
        $.get(`/del`)
    })
    li.appendChild(text);
    li.appendChild(del_btn);
    content.appendChild(li);
}