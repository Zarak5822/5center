document.querySelectorAll('a[href="#form"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// $(window).on('scroll', () => {
//     if ($(this).scrollTop() >= 600) {
//         $('#return-to-top').fadeIn(300);
//     } else {
//         $('#return-to-top').fadeOut(300);
//     }
// });

// $('#return-to-top').on('click', () => {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 500);
// });

$(() => {
    let date = new Date();
    let hr = date.getHours();

    if (hr < 8 && hr >= 20) {
        $("#opening-status").html("We are closed!");
    }

  

    $(".service-slider").slick({
        slidesToShow: 3,
        autoplay: false,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        variableWidth: true,
        centerMode: true,
    });
})