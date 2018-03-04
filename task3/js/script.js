$('a[href^="#"]').click(function (e) {
    e.preventDefault();

    $('a').each(function (i) {
            $(this).css({ 'color': 'blue' });
    });

    $(this).css('color', 'red');

    $('html').animate({
        scrollTop: $(this.hash).offset().top
    });
});