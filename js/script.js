$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})


$(document).ready(function(){
    $('.nav_burger').click(function(event){
        $('.nav_burger, .block_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})