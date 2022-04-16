$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        auto: true,
        captions: true,
        pagerSelector: '#id_pager',
        pagerType: 'short',
        slideMargin: 20,
        slideWidth: 500,
        pause: 3000,
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 1
    });
});