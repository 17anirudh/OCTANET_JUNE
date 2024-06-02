var typed = new Typed('.ani', {
    strings: ["Trade?", "Buy Stocks?", "Invest?", "Real Estate?"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 300,
    loop: true,
});
var ty = new Typed('.ad', {
    strings: [" ", "Stokify"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    cursorChar: ' ',
    loop: false,
});
var t = new Typed('.fingertips', {
    strings: [" ", "Stoky AI 😎"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    cursorChar: ' ',
    loop: false,
});

function scrollAbout() {
    var element = document.querySelector('.about');
    element.scrollIntoView(
        { 
            behavior: 'smooth',
        });
}
