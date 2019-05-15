function changeMenu(x){
    let elem1 = $(x).children('.js-menu__line--first'),
        elem2 = $(x).children('.js-menu__line--middle'),
        elem3 = $(x).children('.js-menu__line--last'),
        menu = document.querySelector('.menuMobile');

    $(elem2).toggleClass('is-activ--midlle');
    $(elem1).toggleClass('is-activ--first');
    $(elem3).toggleClass('is-activ--last');

    $(menu).height(
        $( window ).height() - document.querySelector('.navbar').clientHeight
    );

    $(menu).toggleClass('active-wrapper__menuMobile');
    
}