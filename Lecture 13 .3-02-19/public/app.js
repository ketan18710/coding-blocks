$('#btn').click(function(){
    $.ajax({
        url : `\on`,
        method : `GET`,
        success : function(data){
            console.log(data);
        }
    })
})