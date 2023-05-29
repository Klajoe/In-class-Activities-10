$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        randomStart: true,      // Task 2: Display first image randomly
        moveSlides: 1,          // Task 3: Move one slide at a time
        minSlides: 1,           // Task 4: Display only one image at a time
        maxSlides: 1,           // Task 4: Display only one image at a time
        slideWidth: 250,
        slideMargin: 10,
        pager: true,            // Task 6: Display pager
        pagerCustom: '#pager',  // Task 6: Set pager container
        pause: 3000             // Task 5: Set time between automatic transitions to 3 seconds
    });
});
