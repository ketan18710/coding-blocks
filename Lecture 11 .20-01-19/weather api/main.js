// let inp = document.getElementById('city_name')
// let btn  = document.getElementById('btn')
// let dis  = document.getElementById('display')
// btn.onclick = function(){

// } 
$(document).ready(function(){
    let inp = $('#city_name')
    let btn = $('#button')
    let dis = $('#display')
    console.log('aaa')
    btn.click(function(){
        console.log('ww')
        let city = inp.val()
        let key = '6d7183eed5a64694bcd32919192401'
        $.ajax({
            url :`http://api.apixu.com/v1/current.json?key=${key}&q=${city}`,
            method : 'GET',
            success : function(data){
                console.log(data.current.temp_c)
            },
            error: function(error){
                console.log(error)
            }
        })
    })
})

