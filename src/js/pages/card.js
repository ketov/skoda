$(document).ready(function () {
    var sudoSlider = $(".card__menu-slider").sudoSlider({
        slideCount: 10,
        continuous: true,
        speed: 150,
        autoWidth: false,
        nextHtml: '<div class="card__slider-arrow card__slider-arrow--right"></div>',
        prevHtml: '<div class="card__slider-arrow card__slider-arrow--left"></div>'
    });

    var sudoSlider1 = $(".card__slider").sudoSlider({
        slideCount: 1,
        continuous: true,
        speed: 350,
        autoWidth: false,
        prevHtml: '<div class="product-slider__nav product-slider__nav--prev"><div class="product-slider__nav-img product-slider__nav-img--prev product-slider__nav-img--prev-normal"></div><div class="product-slider__nav-img product-slider__nav-img--prev product-slider__nav-img--prev-active"></div></div>',
        nextHtml: '<div class="product-slider__nav product-slider__nav--next"><div class="product-slider__nav-img product-slider__nav-img--next product-slider__nav-img--next-normal"></div><div class="product-slider__nav-img product-slider__nav-img--next product-slider__nav-img--next-active"></div></div>'
    });

    $(".card__slide").fancybox({
        afterLoad: function () {
            this.title = '<div style="background-image: url(' + this.element.data('bg') + ');"' + 'class="fancybox-image-company-gallery"></div>' +
                    '<div class="fancybox-text fancybox-text--company-gallery">' + this.element.data('text') + '</div>';
        },
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
                css: {
                    'background': 'rgba(0, 0, 0, 0.7)'
                }
            }
        },
        beforeShow: function () {
            $.extend(this, {
                tpl: {
                    closeBtn: '<div class="popup-description__close-container"><div class="popup-description__close-img popup-description__close-img--normal"></div><div class="popup-description__close-img popup-description__close-img--hover"></div></div>',
                    next: '<div class="product-slider__nav product-slider__nav--zindex product-slider__nav--next"><div class="product-slider__nav-img product-slider__nav-img--next product-slider__nav-img--next-normal"></div><div class="product-slider__nav-img product-slider__nav-img--next product-slider__nav-img--next-active"></div></div>',
                    prev: '<div class="product-slider__nav product-slider__nav--zindex product-slider__nav--prev"><div class="product-slider__nav-img product-slider__nav-img--prev product-slider__nav-img--prev-normal"></div><div class="product-slider__nav-img product-slider__nav-img--prev product-slider__nav-img--prev-active"></div></div>'
                }
            }); // extend
        }
    });

    $('.card__tab--description').on('click', function () {
        var el = $(this);
        cardInfo(el, '.card__info-block--description');
    });
    $('.card__tab--tech').on('click', function () {
        var el = $(this);
        cardInfo(el, '.card__info-block--tech');
    });
    $('.card__tab--scope').on('click', function () {
        var el = $(this);
        cardInfo(el, '.card__info-block--scope');
        setTimeout(function () {
            var sudoSlider = $(".product-slider__slider").sudoSlider({
                slideCount: 1,
                continuous: true,
                speed: 300,
                controlsAttr: 'class="product-slider__controls"',
                prevHtml: '<div class="product-slider__nav product-slider__nav--prev"><div class="product-slider__nav-img product-slider__nav-img--prev product-slider__nav-img--prev-normal"></div></div>',
                nextHtml: '<div class="product-slider__nav product-slider__nav--next"><div class="product-slider__nav-img product-slider__nav-img--prev product-slider__nav-img--prev-active"></div></div>'
            });
        }, 2000);
    });
    $('.card__tab--downloads').on('click', function () {
        var el = $(this);
        cardInfo(el, '.card__info-block--downloads');
    });
    $('.card__tab--gallery').on('click', function () {
        var el = $(this);
        cardInfo(el, '.card__info-block--gallery');
    });


    function cardInfo(el, elShow) {
        if (el.hasClass('card__tab--active')) {
            return;
        } else {
            //$('.card__info-block--active').removeClass('card__info-block--active');
            $('.card__tab--active').removeClass('card__tab--active');
            el.addClass('card__tab--active');
            $('.card__info-block--active').stop(true, true).fadeOut(300);
            $('.card__info-block--active').removeClass('card__info-block--active');
            $(elShow).stop(true, true).fadeIn(500);
            $(elShow).addClass('card__info-block--active');



            /*setTimeout(function () {
             
             }, 650);
             setTimeout(function () {
             
             }, 1300);*/
            //$(elShow).addClass('card__info-block--active');
        }
    }
});