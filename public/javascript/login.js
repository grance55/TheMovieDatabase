function handleChangeLabel(element) {
    console.log($(element))
    $(element).children('.js-formInput').blur(function () {
        if ($(element).children('.js-formInput').val().length !== 0) {
            $(element).children('.js-formLabel').css({ 'color': 'green', 'font-size': '15px', 'top': '0px' });
        } else {
            $(element).children('.js-formLabel').css({ 'color': 'black', 'font-size': '18px', 'top': '25px' });
        }
    });

    $(element).children('.js-formInput').focus(function () {
        $(element).children('.js-formLabel').css({ 'color': 'green', 'font-size': '15px', 'top': '0px' });
    });
}