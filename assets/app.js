let text = document.getElementById('textp');
text.addEventListener('mouseover', function() {
    text.textContent = 'For...';
    // text.style.textShadow = '5px', '5px', '1px', 'gray';
});
text.addEventListener('mouseleave', function() {
    text.textContent = 'for...';
})

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
})

$(function(){
    $('.dropdwn li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.dropdwn_menu", this).slideUp();
    });
});

$(function() {
    $('#copy').on('mouseover', function() {
        $(this).css('color', 'grey');
    })
    $('#copy').on('mouseleave', function() {
        $(this).css('color', 'black');
    })
});