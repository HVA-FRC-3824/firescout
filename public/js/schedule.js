window.onload = function() {
    const mobile_bars = document.querySelector('.dropdown');
    const mobile_menu = document.querySelector('.nav-mobile');

    mobile_bars.addEventListener('click', function () {
        mobile_bars.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}