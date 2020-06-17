$(document).on('click', '#accordion a', function () {
    let trigger = $(this);
    let icon = trigger.find('i');

    trigger.parents('.card').siblings('.card').find('a i.rotate').removeClass('rotate');

    if ($(this).children('i').hasClass('rotate')) {
        icon.removeClass('rotate');
        // alert(1);
    } else {
        icon.addClass('rotate');
    }
})