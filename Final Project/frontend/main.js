let ev_name = $('#ev_name');
let ev_des = $('#ev_des');
let sp_name = $('#speaker');
let sp_des = $('#speaker_des');
let con_num = $('#con_num');
let con_em = $('#e_id');
let sp_btn = $('#sp_btn');
let done = $('#done_btn');
let speakers = [];
let speaker_des = [];
sp_btn.click(function(){
    // console.log(sp_name.val());
    let key = sp_name.val();
    speakers.push(key);
    let value = sp_des.val();
    speaker_des.push(value)
    // console.log(obj);
    // $.post('/speakers',obj,function(){
    //     console.log('done');
    // })
    console.log(speakers);
    // sp_name.val() = "";
})
done.click(function(){
     ev_name = ev_name.value;
     ev_des = ev_des.val();
     con_em = con_em.val();
     con_num = con_num.val();
     let key = sp_name.val();
     let value = sp_des.val();
     speakers.push(key);
     speaker_des.push(value)
     console.log(speakers);
    //  location.reload();
     $.post('/input',{speakers :speakers,sp_des : speaker_des,ev_name: ev_name,ev_des:ev_des,con_num:con_num,con_em:con_em},function(){
        // console.log('done');
        
     })
})