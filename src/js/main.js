'use strict'


function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

$(document).ready(function () {
    var body = $('body'),
            timer,
            windowHeight = $(window).height(),
            windowWidth = $(window).width()

//Задаем размеры блокам
    var setHeight = function () {

    }
    setHeight();

    $(window).bind('resize', function () {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        setHeight();
    });

    $(window).bind('scroll', function () {

        //отключаем ховер при скроле
        clearTimeout(timer);
        if (!body.hasClass('disable-scroll-hover')) {
            body.addClass('disable-scroll-hover')
        }
        timer = setTimeout(function () {
            body.removeClass('disable-scroll-hover')
        }, 200);

    });
});