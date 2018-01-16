function initiateSlider() {
    $('.slider__items').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        margin: 30,
        nav: true,
        dots: false,
        navContainer: '.slider__nav',
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            }
        }
    })
}

window.addEventListener('load', initiateSlider);
