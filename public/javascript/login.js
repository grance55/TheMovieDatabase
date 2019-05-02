function handleChangeLabel(input) {

    $(input).children('.loginForm__input').blur(function () {
        if ($(input).children('.loginForm__input').val().length !== 0) {
            $(input).children('.loginForm__label').css({ 'color': 'green', 'font-size': '15px', 'top': '0px' });
        } else {
            $(input).children('.loginForm__label').css({ 'color': 'black', 'font-size': '18px', 'top': '25px' });
        }
    });

    $(input).children('.loginForm__input').focus(function () {
        $(input).children('.loginForm__label').css({ 'color': 'green', 'font-size': '15px', 'top': '0px' });
    });
}