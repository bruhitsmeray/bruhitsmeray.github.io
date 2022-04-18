$(document).on('click','.welcome-filter li', function(){
    $(this).addClass('welcome-filter-active').siblings().removeClass('welcome-filter-active')
});

$(document).ready(function(){
    $('.wlist').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.welcome-box').show('1000');
        } else {
            $('.welcome-box').not('.' + value).hide('1000');
            $('.welcome-box').filter('.' + value).show('1000');
        }
    });
});