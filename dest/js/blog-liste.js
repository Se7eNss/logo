$(function () {
    var dahaFazla = $("#daha-fazla");
    var items = $(".bakiswrap .bakisnes");

    let d_i = 0;

    dahaFazla.click(function () {

        if (d_i == 0) {
            items.css({
                "height": "max-content",
                "padding-top": "2rem",
                "padding-bottom": "2rem",
            });

            dahaFazla.text("Daha Az Göster");

            d_i++;
        } else {
            items.each(function () {
                var that = $(this);
                if (that.hasClass("stay")) {

                } else {
                    that.css({
                        "height": "0",
                        "padding-top": "0",
                        "padding-bottom": "0",
                    });
                }
            });

            dahaFazla.text("Daha Fazla");
            d_i--;
        }
        return false;
    });
})