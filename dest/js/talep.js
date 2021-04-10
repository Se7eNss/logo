// _____________________________ jquery _____________________________________________________________
$(document).ready(function () {

    // _____________________________ Creating SelectBox _____________________________________________________________
    /* ===== Logic for creating fake Select Boxes ===== */
    $('.sel').each(function () {
        $(this).children('select').css('display', 'none');

        var $current = $(this);

        $(this).find('option').each(function (i) {
            if (i == 0) {
                $current.prepend($('<div>', {
                    class: $current.attr('class').replace(/sel/g, 'sel-box')
                }));

                var placeholder = $(this).text();
                $current.prepend($('<span>', {
                    class: $current.attr('class').replace(/sel/g, 'sel-placeholder'),
                    text: placeholder,
                    'data-placeholder': placeholder,
                }));

                return;
            }

            var value = $(this).val();
            $current.children('.sel-box').append($('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
                text: $(this).text(),
                value: value,
            }));
        });
    });

    // Toggling the `.active` state on the `.sel`.
    $('.sel').click(function () {

        $(this).toggleClass('active');

        var sel_box = $(this).find('.sel-box');
        var sel_box_options = $(this).find('.sel__box__options');

        sel_box.toggleClass("active");
        sel_box_options.toggleClass("animate__fadeIn").css("height", "30px");
    });

    // Toggling the `.selected` state on the options.
    $('.sel__box__options').click(function () {
        var txt = $(this).text();
        var index = $(this).index();

        $(this).siblings('.sel__box__options').removeClass('selected');
        $(this).addClass('selected');

        var $currentSel = $(this).closest('.sel');
        $currentSel.children('.sel-placeholder').text(txt);
        $currentSel.children('select').prop('selectedIndex', index + 1);
    });

    $(window).on("click", ".sel-box",function(){
        alert();
    });

    // _____________________________ select box seçim yapıldı ekle  _____________________________________________________________
    $(".sel-box").click(function(){
        $(this).parent(".sel").addClass("ok").removeClass("invalid");
    });


    // _____________________________ checkbox - radio button  _____________________________________________________________
    $(':radio, :checkbox').each(function () {
        $(this).after('');
        if ($(this).is(':checked')) {
            $(this).parent().addClass('checked');
        }
    });

    $('label').on('click', function (e) {

        // radio
        if ($(':radio', this).length) {
            var name = $(':radio', this).attr('name');
            $('input[name=' + name + ']').parent().removeClass('checked');
            $(this).addClass('checked');
        }

        // checkbox
        if ($(':checkbox', this).length) {
            if ($(':checkbox', this).is(':checked')) {
                $(this).addClass('checked');
            } else {
                $(this).removeClass('checked');
            }
        }

    });
});