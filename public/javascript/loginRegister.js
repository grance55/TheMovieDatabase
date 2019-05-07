function handleChangeLabel(element) {

    $(element).children('.js-formInput').blur(function () {
        if ($(element).children('.js-formInput').val().length !== 0) {
            $(element).children('.js-formLabel').css({ 'color': '#0c80aee6', 'font-size': '15px', 'top': '0px' });
        } else {
            $(element).children('.js-formLabel').css({ 'color': 'white', 'font-size': '18px', 'top': '25px' });
        }
    });

    $(element).children('.js-formInput').focus(function () {
        $(element).children('.js-formLabel').css({ 'color': '#0c80aee6', 'font-size': '15px', 'top': '0px' });
    });
}