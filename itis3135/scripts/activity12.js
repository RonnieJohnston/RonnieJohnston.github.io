$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        auto: true,
        pagerSelector: '#id_pager',
        pagerType: 'short',
        captions: true,
        pause: 3000,
        slideMargin: 20,
        slideWidth: 500,
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 1
    });
});