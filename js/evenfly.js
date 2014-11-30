//========================
//CUSTOM SCROLLBAR
//========================
$(document).ready(
    function () {
        $("html").niceScroll({
            mousescrollstep: 70,
            cursorcolor: "#f53f2c",
            cursorwidth: "5px",
            cursorborderradius: "10px",
            cursorborder: "none",
        });
    }
);


//========================
//SMOOTHSCROLL
//========================
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//========================
//SNOW ON THE SCREEN
//========================
$(document).ready(
    function () {
        snowStorm.snowColor = '#dbdbdb';
        snowStorm.flakesMaxActive = 90;
        snowStorm.useTwinkleEffect = true;
    }

);