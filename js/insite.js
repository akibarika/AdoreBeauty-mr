/**
 * Created by Akiba on 2014/8/19.
 */
$(window).load(function() {
    $('.first-slider').flexslider({
        animation: "slide",
        prevText: '',
        nextText: ''
    });
    $(window).resize(function(){
        $('.first-slider .flex-direction-nav').css('width',$('body').width());
    });
    $('.first-slider .flex-direction-nav').css('width',$('body').width());
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        slideshow: false,
        itemWidth: 160,
        itemMargin: 18,
        directionNav: false
    });
});
