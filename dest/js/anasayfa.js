// _____________________________ Youtube API _____________________________________________________________  
var iframeItem;
var tag = document.createElement('script');
var firstScriptTag = document.getElementsByTagName('script')[0];

var players = [];
var iframes = $(".item").find(".iframe");

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    for (var i = 0; i < iframes.length; i++) {
        iframeItem = iframes[i];

        players[i] = new YT.Player(iframeItem, {
            suggestedQuality: 'hd720',
            events: {
                'onReady': onPlayerReady,
            }
        });
    }
}

function onPlayerReady(event) {
    event.target.pauseVideo();
    // event.target.clearVideo();
    // event.target.stopVideo();
}

var sliderOwlImg = $('.a-slider-carousel-img');

$(document).ready(function () {
    // _____________________________ slider-owl video start - stop _____________________________________________________________

    var anasayfaSlider = $('.anasayfa-slider');
    var sliderOwl = $('.a-slider-carousel');
    var sliderOwlNextBtn = $("#sliderOwlNextBtn");
    var sliderOwlPrevBtn = $("#sliderOwlPrevBtn");
    var carouselCustomDots = $("#carousel-custom-dots");
    var sliderOwlItemCount = $(".a-slider-carousel-img").find(".item").length;
    var prevVideo = $("video");
    var activeOwlItem, activeCardItem;
    
    
    sliderOwlImg.on('translated.owl.carousel', function () {
        prevVideo.trigger('pause');

        for (var i = 0; i < players.length; ++i) {
            players[i].pauseVideo();
        }

        activeOwlItem = sliderOwlImg.find(".owl-item"); 
        activeCardItem = activeOwlItem.siblings(".active").find(".a-slider-image");
        
        if (activeCardItem.hasClass("has-video")) {
            currentVideoByClass = activeCardItem.find(".slider-video");
            currentVideoId = currentVideoByClass.attr("id");
            
            var currentVideoById = $(currentVideoId);

            var iframeId = currentVideoId.split("-");

            sliderOwlImg.trigger('stop.owl.autoplay');

            if (iframeId[0] == "iframe") {
                players[iframeId[1]].playVideo();

                players[iframeId[1]].addEventListener("onStateChange", function () {
                    if (players[iframeId[1]].getPlayerState() == 0) {
                        players[iframeId[1]].stopVideo();
                        sliderOwlImg.trigger('play.owl.autoplay');
                    }
                });
            } else {
                setTimeout(() => {
                    
                    currentVideoByClass.trigger('play');
                }, 100);
                // currentVideoByClass.trigger('play');
            }

            currentVideoByClass.on('ended', function () {
                sliderOwlImg.trigger('play.owl.autoplay');
            });

            prevVideo = currentVideoByClass;
        } else {
            sliderOwlImg.trigger('play.owl.autoplay');
        }
    });


    // _____________________________ Writing and the ımg sync _____________________________________________________________
    sliderOwlImg.on('translate.owl.carousel', function (e) {
        var dot_i = e.page.index;
        $("#carousel-custom-dots").find('.owl-dot').eq(dot_i).addClass("active").siblings().removeClass("active");
        sliderOwl.trigger('to.owl.carousel', e.page.index);
    });

    // _____________________________ slider-owl / writing setup _____________________________________________________________
    sliderOwl.owlCarousel({
        loop: false,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 666,
        responsive: {
            0: {
                items: 1
            },
            510: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // _____________________________ slider-owl / image side setup _____________________________________________________________
    sliderOwlImg.owlCarousel({
        rewind: true,
        loop: false,
        nav: false,
        margin: 0,
        videoWidth: false,
        videoHeight: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 666,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            510: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    for (let index = 0; index < sliderOwlItemCount; index++) {
        if (index == 0) {
            carouselCustomDots.append($('<li>', {
                class: "owl-dot active",
            }));
        } else {
            carouselCustomDots.append($('<li>', {
                class: "owl-dot",
            }));
        }
    }

    anasayfaSlider.find('.owl-dot').click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        sliderOwlImg.trigger('to.owl.carousel', [$(this).index(), 666]);
        sliderOwlImg.trigger('stop.owl.autoplay');
        sliderOwlImg.trigger('play.owl.autoplay');
    });

    sliderOwlNextBtn.click(function () {
        sliderOwl.trigger('next.owl.carousel', [666]);
        sliderOwlImg.trigger('next.owl.carousel', [666]);

    });

    sliderOwlPrevBtn.click(function () {
        sliderOwl.trigger('prev.owl.carousel', [666]);
        sliderOwlImg.trigger('prev.owl.carousel', [666]);
    });


    // _____________________________ hizmetler-owl _____________________________________________________________
    var hizmetlerOwl = $('.hizmetler-carousel');
    var hizmetlerOwlNextBtn = $("#hizmetlerOwlNextBtn");
    var hizmetlerOwlPrevBtn = $("#hizmetlerOwlPrevBtn");


    hizmetlerOwl.owlCarousel({
        loop: true,
        nav: false,
        margin: 5,
        responsive: {
            0: {
                items: 2,
            },
            510: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    hizmetlerOwlNextBtn.click(function () {
        hizmetlerOwl.trigger('next.owl.carousel', [666]);
    });

    hizmetlerOwlPrevBtn.click(function () {
        hizmetlerOwl.trigger('prev.owl.carousel', [666]);
    });

    // _____________________________ bakış-owl _____________________________________________________________
    var bakisOwl = $('#bakisOwl');
    var bakisOwlMobil = $('#bakisOwlMobil');
    var bakisOwlNextBtn = $("#bakisOwlNextBtn");
    var bakisOwlPrevBtn = $("#bakisOwlPrevBtn");

    bakisOwl.owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            510: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    bakisOwlMobil.owlCarousel({
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

    bakisOwlNextBtn.click(function () {
        bakisOwl.trigger('next.owl.carousel', [666]);
    });

    bakisOwlPrevBtn.click(function () {
        bakisOwl.trigger('prev.owl.carousel', [666]);
    });

    // _____________________________ işler-owl _____________________________________________________________
    var isOwl = $('.iswrap-mobil');

    isOwl.owlCarousel({
        center: true,
        loop: true,
        autoWidth: true,
        margin: 7,
        responsive: {
            0: {
                items: 1,
            },
            510: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // _____________________________ müşteri-owl _____________________________________________________________
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