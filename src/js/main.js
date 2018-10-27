jQuery(document).ready(function () {
    if (jQuery(document).width() > 540) {
        console.log(jQuery(document).width() );
        jQuery('.container').carousel({
            num: 3,
            maxWidth: 400,
            maxHeight: 660,
            distance: 100,
            scale: 0.9,
            animationTime: 1000,
            showTime: 4000
        });
    }
    else {
        console.log(jQuery(document).width());
        jQuery('.container').carousel({
            num: 3,
            maxWidth: 300,
            maxHeight: 450,
            distance: 100,
            scale: 0.9,
            animationTime: 1000,
            showTime: 4000
        });
    }
});
