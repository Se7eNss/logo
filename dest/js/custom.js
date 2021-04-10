// _____________________________ get window size _____________________________________________________________
function getWindowSize() {
    var w = window.innerWidth;
    return w;
};

// _____________________________ variables _____________________________________________________________
var navbar = $("#navbar");
var headerBg = $("#navbar .header-bg");
var mobileMenuButton = $("#mobile-menu-button");
var html = $("html");
var mobilSayac = 0;
var navbarFlexRow = $('.navbar .flex-row');
var navbarTekal = $('.navbar .tekal');


// _____________________________ jquery _____________________________________________________________
$(document).ready(function () {
    var w = 1200;

    // _____________________________ resize _____________________________________________________________
    $(window).resize(function () {
        ScrollReveal().clean('.a-slider-image-wrapper');
        ScrollReveal().clean('.a-slider-writing-overflow');
        ScrollReveal().clean('.hizmet');
        ScrollReveal().clean(".isler");
        ScrollReveal().clean('.cagir');
        ScrollReveal().clean('.bakis');
        ScrollReveal().clean('.musteri');
        ScrollReveal().clean('.iletisim');
        ScrollReveal().clean('.footer');
        ScrollReveal().clean('.wrap');
        ScrollReveal().clean('.hiz');
        ScrollReveal().clean('.web');
        ScrollReveal().clean('.section-topic');
        ScrollReveal().clean('.anlaslog');
        ScrollReveal().clean('.anlaspar');
        ScrollReveal().clean('.anlaswrap');

        w = getWindowSize();

        if (w > 1100) {
            navbarFlexRow.css('background-color', "transparent");
            navbarTekal.css('padding-right', "0px");

            headerBg.css({
                "height": "0",
                "transition-delay": "0s",
                "overflow": "hidden",
            });

            html.css({
                "height": "initial",
                "overflow": "initial"
            });
            mobilSayac = 0;
        } else {
            mobilOut();
            mobilSayac = 0;
        }
    });

    // _____________________________ scroll _____________________________________________________________
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            navbar.css({
                "background-color": "#fff",
                "box-shadow": "0 0 10px #808080",
            });

        } else {
            navbar.css({
                "background-color": "transparent",
                "box-shadow": "none",
            });
        }
    });

    // _____________________________ mobil menu click _____________________________________________________________
    mobileMenuButton.click(function (e) {
        e.preventDefault();

        if (mobilSayac == 0) {
            mobilOn();
            mobilSayac = 1;
        } else {
            mobilOut();
            mobilSayac = 0;
        }
    });

    // _____________________________ tel mask _____________________________________________________________
    $("#input-tel").mask("(000) 00 00");

    // _____________________________ ScrollReveal _____________________________________________________________
    window.sr = ScrollReveal();
    sr.reveal('.slider-image-side', {
        // reset: true,
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2,
    });
    sr.reveal('.a-slider-writing-overflow', {
        // reset: true,
        duration: 2000,
        origin: 'right',
        distance: '250px',
        viewFactor: 0.2,
    });
    sr.reveal('.hizmet', {
        // reset: true,
        duration: 2000,
        origin: 'bottom',
        distance: '50px',
        viewFactor: 0.2,
    });
    sr.reveal('.isler', {
        // reset: true,
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0,
    });
    sr.reveal('.cagir', {
        // reset: true,
        duration: 2000,
        origin: 'bottom',
        distance: '50px',
        viewFactor: 0,
    });
    sr.reveal('.bakis', {
        // reset: true,
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0,
    });
    sr.reveal('.musteri', {
        duration: 2000,
        origin: 'bottom',
        distance: '50px',
        viewFactor: 0,
    });
    sr.reveal('.iletisim', {
        duration: 2000,
        origin: 'bottom',
        distance: '50px',
        viewFactor: 0,
    });
    sr.reveal('.footer', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0,
    });
    sr.reveal('.wrap', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0,
    });
    sr.reveal('.hiz', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2,
    });
    sr.reveal('.web', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2,
    });
    sr.reveal('.section-topic', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2,
    });
    sr.reveal('.anlaslog', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2,
    });
    sr.reveal('.anlaspar', {
        duration: 2000,
        origin: 'bottom',
        distance: '50px',
        viewFactor: 0.2,
    });
    sr.reveal('.anlaswrap', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2,
    });
    sr.reveal('.building-writing-sr-ani', {
        duration: 2000,
        origin: 'right',
        distance: '50px',
        viewFactor: 0.2,
    });
    sr.reveal('.building-image', {
        duration: 2000,
        origin: 'left',
        distance: '50px',
        viewFactor: 0.2,
    });
});

var invalidInputsLength = 0;
var invalidInputs;
// var InputsItems = $('form').find("input");
// _____________________________ Form Control _____________________________________________________________
function formControl() {
    invalidInputs = $('form .bar:invalid');
    invalidTextarea = $('form textarea.bar');
    invalidSelect = $('form .sel.bar');
    invalidInputsLength = invalidInputs.length;
    
    if(invalidTextarea.val().length > 0){
        invalidTextarea.addClass("ok");
    }

    if (invalidInputsLength > 0) {
        invalidInputs.addClass("invalid");
        if(!invalidSelect.hasClass("ok")){
            invalidSelect.addClass("invalid");
        }
        if(!invalidTextarea.hasClass("ok")){
            invalidTextarea.addClass("invalid");
        }
    }
};

function formIsFixed() {
    if (invalidInputsLength > 0) {
        invalidInputs.removeClass("invalid");
        invalidSelect.removeClass("invalid");
    }
};

function mobilOn() {
    navbarFlexRow.css('background-color', "#fff");
    navbarTekal.css('padding-right', "1rem");

    headerBg.css({
        "height": "100vh",
        "transition-delay": "0s",
        "overflow": "auto",
    });

    html.css({
        "height": "100%",
        "overflow": "hidden"
    });
};

function mobilOut() {
    navbarFlexRow.css('background-color', "transparent");
    navbarTekal.css('padding-right', "0px");

    headerBg.css({
        "height": "0",
        "transition-delay": "0s",
        "overflow": "hidden",
    });

    html.css({
        "height": "initial",
        "overflow": "initial"
    });
};