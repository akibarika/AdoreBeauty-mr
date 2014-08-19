/**
 * Created by Akiba on 2014/8/19.
 */

    // Can also be used with $(document).ready()
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        prevText: '',
        nextText: ''
    });
    $(window).resize(function(){
        $('.flexslider .flex-direction-nav').css('width',$('body').width());
    });
    $('.flexslider .flex-direction-nav').css('width',$('body').width());
});



