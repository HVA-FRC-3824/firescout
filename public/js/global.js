function navDropdown() {
    var x = document.getElementById("navbar");
    if (x.style.overflow === "visible") {
        x.style.overflow = "hidden";
    } else {
        x.style.overflow = "visible";
    }

}

window.onload = function() {
    const mobile_bars = document.querySelector('.dropdown');
    const mobile_menu = document.querySelector('.nav-mobile');
    const header = document.querySelector('.navbar');

    const watermark = document.querySelector('.spline-watermark');

    mobile_bars.addEventListener('click', function () {
        mobile_bars.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        header.classList.toggle('is-active');
    });
}

