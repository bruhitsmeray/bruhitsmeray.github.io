$(document).on('click','.video-filter li', function(){
    $(this).addClass('video-filter-active').siblings().removeClass('video-filter-active')
});

$(document).ready(function(){
    $('.vlist').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.video-box').show('1000');
        } else {
            $('.video-box').not('.' + value).hide('1000');
            $('.video-box').filter('.' + value).show('1000');
        }
    });
});