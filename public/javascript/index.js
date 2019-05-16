function redirect(url) {
    window.location.replace(url);
}



function deleteCookie() {

    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }

}

/*
$(document).ready(function(){ 
    let rate = Math.round(parseFloat(document.querySelector('.js-rating').textContent)),
        stars = document.querySelectorAll('.js-rate__star');
    
        

    for(let i = 0, j = 2; i < stars.length; i++, j+=2){
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
*/