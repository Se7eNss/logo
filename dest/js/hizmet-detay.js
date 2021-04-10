// _____________________________ jquery _____________________________________________________________
$(document).ready(function () {

    // _____________________________ musteri owl _____________________________________________________________
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

// _____________________________ hizmetler accordion _____________________________________________________________
var acc = document.getElementsByClassName("accordions");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
