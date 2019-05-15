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




function changeMenu(x){
    let elem1 = $(x).children('.js-menu__line--first');
    let elem2 = $(x).children('.js-menu__line--middle');
    let elem3 = $(x).children('.js-menu__line--last');
    let menu = document.querySelector('.menuMobile');

    $(elem2).toggleClass('is-activ--midlle');
    $(elem1).toggleClass('is-activ--first');
    $(elem3).toggleClass('is-activ--last');

    $(menu).height(
        $( window ).height() - document.querySelector('.navbar').clientHeight
    );


    $(menu).toggleClass('active-wrapper__menuMobile');
    
    
    $( window ).height();
}