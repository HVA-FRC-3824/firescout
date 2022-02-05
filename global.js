function navDropdown() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function addNav(){
    document.getElementById("topnav").innerHTML = 
    "<img src='pics/Logo-Small-Square.png' alt='3824logo' onclick='location.replace('./index.html')'>" + 
    <div id='myLinks'> 
        <a href='schedule.html'>Match Scouting</a>
        <a href='pit.html'>Pit Scouting</a> 
        <a href='analytics.html'>Analytics</a>
        <a href='preview.html'>Match Preview</a>
        <a href='settings.html'>Settings</a>
        <a href='login.html' id='loginButton'>Login</a>
    </div>

    "<a href='javascript:void(0);' class='icon' onclick='navDropdown()'>" +
        "<i class='fa fa-bars'></i>" +
    "</a>"
}
