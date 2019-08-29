function toggle() {
    var navbar = $('nav'),
        button = $('.navbar-toggler')

    if (navbar.hasClass('toggle')){
        navbar.removeClass('toggle')
    }else{
        navbar.addClass('toggle');
    }

    if (button.hasClass('crossed')){
        button.removeClass('crossed')
    }else{
        button.addClass('crossed')
    }
}