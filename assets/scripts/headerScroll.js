$(document).ready(function () {

    'use strict';


    var c, currentScrollTop = 0,
        navbar = $('nav'),
        header = $('header')



    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        currentScrollTop = scroll;

        if (currentScrollTop == 0) {
            header.removeClass('fixed');
            header.css({
                "transition": "none"
            });
            navbar.removeClass('fixed')
            navbar.css({
                "top": "0"
            });
            $('main').css("margin-top","0");
        }else {
            header.addClass('fixed');
            navbar.addClass('fixed');
            navbar.css({
                "top": "40px"
            });
            $('main').css("margin-top","40px");

            if (currentScrollTop > 40) {

                if (c < currentScrollTop) {
                    header.css({
                        "top": "-40px",
                        "transition": "all 0.3s "
                    });
                    navbar.css({
                        "top": "0px"
                    });

                } else if (c > currentScrollTop) {
                    header.css({
                        "top": "0",
                        "transition": "all 0.3s "
                    });
                    navbar.css({
                        "top": "40px"
                    });
                }
            }

        }

        c = currentScrollTop;
    });

});