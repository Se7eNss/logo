$(document).ready(function () {

    var musteriOwl = $('#musteriwrap-owl');

    musteriOwl.owlCarousel({
        center: true,
        loop: true,
        nav: false,
        margin: 10,
        responsive: {
            0: {
                items: 2,
                margin: 20,

            },
            510: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

});