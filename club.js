$(function(){
    $("#flip").click(function(e){
    e.preventDefault();
        $("#panel").slideToggle();
         $('html, body').animate({
        

    }, 2500);
    });
});