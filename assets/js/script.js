$(document).ready(function(){
    $('#owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false,
        lazyLoad: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
                stagePadding: 80
            },
            1000: {
                items: 1,
                stagePadding: 150
            },
            1200: {
                items: 1,
                stagePadding: 150
            },
            1400: {
                items: 1,
                stagePadding: 200
            },
            1600: {
                items: 1,
                stagePadding: 350
            },
            1800: {
                items: 1,
                stagePadding: 400
            }
        }
    })
})