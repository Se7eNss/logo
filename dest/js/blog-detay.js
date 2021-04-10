// _____________________________ jquery _____________________________________________________________
$(document).ready(function () {
    var bakisOwl = $('#bakisOwl');
    var bakisOwlMobil = $('#bakisOwlMobil');

    bakisOwl.owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    bakisOwlMobil.owlCarousel({
        // center: true,
        loop: true,
        margin: 20,
        stagePadding: 50,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});


