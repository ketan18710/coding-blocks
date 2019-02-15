// let inp = document.getElementById('city_name')
// let btn  = document.getElementById('btn')
// let dis  = document.getElementById('display')
// btn.onclick = function(){

// } 
$(document).ready(function(){
    let inp = $('#city_name')
    let btn = $('#button')
    let dis = $('#display')
    let loader = $('.preloader')
    let c_area = $('#main')
    let image = $('#image')
    let content = $('#fc')
    let c_r = $('#fc1')
    let temprature = $('#temp');
    let reset = $('#reset')
    console.log('aaa')
    function change(temp){
        if(temp<13)
        {
        image.attr("src","cold.jpeg")
        }
        else if(temp>=13 && temp <=25)
        {
            image.attr("src","normal.jpeg")
        }
        else
        {
            image.attr("src","hot.jpeg")
        }
        temprature.html(` Temprature : ${temp} degree C `);
    }
    btn.click(function(){
        c_area.css("display", "none");
        loader.css("display", "block");
        console.log('ww')
        let city = inp.val()
        let key = '6d7183eed5a64694bcd32919192401'
        $.ajax({
            url :`https://api.apixu.com/v1/current.json?key=${key}&q=${city}`,
            method : 'GET',
            success : function(data){
                c_area.css("display", "block");
                content.css("display","none");
                c_r.css("display","block");
                change(data.current.temp_c);
                loader.css("display", "none");
                console.log(data)
            },
            error: function(error){
                window.alert("enter a valid city");
                loader.css("display", "none");
                c_area.css("display", "block");
                console.log(error)
            }
        })
    })
    reset.click(function(){
        content.css("display","block");
        c_r.css("display","none");  
        image.attr("src","logo.png")
    })
})

