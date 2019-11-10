$(function() {
    $('#reserve').on('mouseover', function() {
        $(this).text('Keep seat');
    })
    $('#reserve').on('mouseleave', function() {
        $(this).text('Reserve');
    })
});

$(function() {
    $('.btn').on('click', function() {

        // スクロールさせないようにする
        $('body').addClass('modal-open');

        // モーダルを表示
        $('.modal-content').fadeIn(1000);

        // 黒い画面を表示
        $('#modal-bg').fadeIn(1000);
    })

    $('.js-modal-close').on('click', function() {

        // スクロールできるようにする
        $('body').removeClass('modal-open');

        // モーダルを非表示にする
        $('.modal-content').fadeOut(1000);

        // 黒い画面を非表示にする
        $('#modal-bg').fadeOut(1000);
    })
});