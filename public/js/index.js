// Set the date we're counting down to
var countDownDate = new Date("Apr 19, 2022 18:00:00").getTime();

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

// Output the result in an element with id="countDown"
    document.getElementById("cDays").innerHTML = days;
    document.getElementById("cHours").innerHTML = hours;
    document.getElementById("cMins").innerHTML = minutes
    document.getElementById("cSecs").innerHTML = seconds;

// If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownWrapper").innerHTML = "ITS TIME";
        document.getElementById("countdownWrapper").style.fontWeight = 900;
        document.getElementById("countdownWrapper").style.fontSize = "70px";

    }
}, 1000);



