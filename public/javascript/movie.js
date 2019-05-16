

$(function(){
    

    /*
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
    */
    
});

$(document).ready(function(){ 
    let rate = Math.round(parseFloat(document.querySelector('.js-rating').textContent)),
        stars = document.querySelectorAll('.js-rate__star');

    console.log(stars);

    
    for(let i = 0, j = 2; i < 5; i++, j+=2){
        if(rate >= j){
            $(stars[i]).addClass('fas fa-star');
        }else if(rate % 2 !== 0){
            $(stars[i]).addClass('fas fa-star-half-alt');
            break;
        }else{
            break;
        }   
    }
}); 






