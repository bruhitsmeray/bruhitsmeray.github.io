$(document).on('click','.update-filter li', function(){
    $(this).addClass('update-filter-active').siblings().removeClass('update-filter-active')
});

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.update-box').show('1000');
        } else {
            $('.update-box').not('.' + value).hide('1000');
            $('.update-box').filter('.' + value).show('1000');
        }
    });
});