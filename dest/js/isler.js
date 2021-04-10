// _____________________________ jquery _____________________________________________________________
$(document).ready(function () {

    // <!-- _____________________________ musteri owl _____________________________________________________________ -->
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

    var filterTumu = $(".proje-filter ul").find("#tumu");
    var filterWeb = $(".proje-filter ul").find("#web");
    var filterKurumsal = $(".proje-filter ul").find("#kurumsal");
    var filterLogo = $(".proje-filter ul").find("#logo");
    var filterProduk = $(".proje-filter ul").find("#produk");
    var filterYazilim = $(".proje-filter ul").find("#yazilim");
    var filterSosyal = $(".proje-filter ul").find("#sosyal");

    var cardItems = $(".isler2").find(".is-card");

    // <!-- _____________________________ odemeler/abonelikler geçiş _____________________________________________________________ -->
    filterTumu.click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        cardItems.each(function () {
            $(this).addClass("d-none").removeClass("animate__fadeIn");
        });

        cardItems.each(function () {
            $(this).addClass("animate__fadeIn").removeClass("d-none");
        });
    });

    filterWeb.click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        cardItems.each(function () {
            $(this).addClass("d-none").removeClass("animate__fadeIn");
        });

        cardItems.each(function () {
            if ($(this).hasClass("web")) {
                $(this).addClass("animate__fadeIn").removeClass("d-none");
            }
        });
    });

    filterKurumsal.click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        cardItems.each(function () {
            $(this).addClass("d-none").removeClass("animate__fadeIn");
        });

        cardItems.each(function () {
            if ($(this).hasClass("kurumsal")) {
                $(this).addClass("animate__fadeIn").removeClass("d-none");
            }
        });
    });

    filterLogo.click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        cardItems.each(function () {
            $(this).addClass("d-none").removeClass("animate__fadeIn");
        });

        cardItems.each(function () {
            if ($(this).hasClass("logo")) {
                $(this).addClass("animate__fadeIn").removeClass("d-none");
            }
        });
    });

    filterProduk.click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        cardItems.each(function () {
            $(this).addClass("d-none").removeClass("animate__fadeIn");
        });

        cardItems.each(function () {
            if ($(this).hasClass("produk")) {
                $(this).addClass("animate__fadeIn").removeClass("d-none");
            }
        });
    });

    filterYazilim.click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        cardItems.each(function () {
            $(this).addClass("d-none").removeClass("animate__fadeIn");
        });

        cardItems.each(function () {
            if ($(this).hasClass("yazilim")) {
                $(this).addClass("animate__fadeIn").removeClass("d-none");
            }
        });
    });

    filterSosyal.click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        
        cardItems.each(function () {
            $(this).addClass("d-none").removeClass("animate__fadeIn");
        });

        cardItems.each(function () {
            if ($(this).hasClass("sosyal")) {
                $(this).addClass("animate__fadeIn").removeClass("d-none");
            }
        });
    });
});