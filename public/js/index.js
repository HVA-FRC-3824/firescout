// Set the date we're counting down to
var countDownDate = new Date("Jan 8, 2022 11:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    
// Get today's date and time
    var currentTime = new Date().getTime();

// Find the distance between now and the count down date
    var distance = countDownDate - currentTime;

// Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="demo"
    //document.getElementById("countDown").innerHTML = "Time until Kickoff: " + days + "d " + hours + "h "
    //+ minutes + "m " + seconds + "s ";

// If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "ITS TIME";
    }
}, 1000);

window.onload = function() {
    const mobile_bars = document.querySelector('.dropdown');
    const mobile_menu = document.querySelector('.nav-mobile');

    mobile_bars.addEventListener('click', function () {
        mobile_bars.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}

