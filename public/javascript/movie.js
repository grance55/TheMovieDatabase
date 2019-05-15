$(function(){
    let ocjena = document.querySelector('.ocjena');


    $('.movie').height(
        $( window ).height() - document.querySelector('.navbar').clientHeight
    );
    $('.poster__img').height(
        $( window ).height() - document.querySelector('.navbar').clientHeight
    );
    $('.group__cover').height(
        $( window ).height() - document.querySelector('.navbar').clientHeight
    );
    $('.cover__img').height(
        $( window ).height() - document.querySelector('.navbar').clientHeight
    );
    
})();







