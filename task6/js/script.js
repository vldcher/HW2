$('#menuToggle').click(() => {
    parseInt($('#menu').css('left')) < 0 ?
        $('#menu').animate({ left: 0 })
        : $('#menu').animate({ left: -100 });
});