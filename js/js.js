
$(document).ready(function() {
    $('.btn-menu').on('click', () => {
        $('.btn-menu').toggleClass('btn-menu-active');
        $('.global').toggleClass('global_active');
        $('.menu').toggleClass('menu_active');
    });

    $('.menu_nav_link').on('click', () => {
        $('.btn-menu').removeClass('btn-menu-active');
        $('.global').removeClass('global_active');
        $('.menu').removeClass('menu_active');
    });

    $(function(){
        $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                    return false;
                }
            }
        });
    });

    $('.owl-carousel').owlCarousel({
        items:1,
        navText: ["<img class='owl-but' src='img/left.svg'>", "<img class='owl-but'src='img/right.svg'>"],
        margin:10,
        nav:true
    });

    $('.tab2').on('click', () => {
        $('.block-2').addClass('con-8_block-2_active');
        $('.block-1').removeClass('con-8_block-2_active');
        $('.toggle-block').css('margin-left', '124px');
        $('.toggle-block').addClass('toggle-block_active');
        $('.tab2').addClass('tab_active');
        $('.tab1').removeClass('tab_active');
    });
    $('.tab1').on('click', () => {
        $('.block-1').addClass('con-8_block-2_active');
        $('.block-2').removeClass('con-8_block-2_active');
        $('.toggle-block').css('margin-left', '-126px');
        $('.toggle-block').removeClass('toggle-block_active');
        $('.tab1').addClass('tab_active');
        $('.tab2').removeClass('tab_active');
    });
});
