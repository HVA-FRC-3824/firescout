var x;
var y;
function openPage(pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = "tabcontent " + pageName;
    };
}

window.onload = function() {
    const nav = document.querySelector('.navarrow');
    const navbar = document.querySelector('.navBar');
    const arrow = document.querySelector('.arrow');
    const content = document.getElementsByClassName("tabcontent");
    const preMatch = document.querySelector('.preMatch');
    const autoWrapper = document.querySelector('.autoWrapper');
    const teleWrapper = document.querySelector('.teleWrapper');
    const endWrapper = document.querySelector('.endgameWrapper');

    nav.addEventListener('click', function () {
        arrow.classList.toggle('is-active');
        navbar.classList.toggle('is-active');
        preMatch.classList.toggle('is-active');
        autoWrapper.classList.toggle('is-active');
        teleWrapper.classList.toggle('is-active');
        endWrapper.classList.toggle('is-active');
        for (i = 0; i < content.length; i++) {
            content[i].classList.toggle('is-active');
        };
    });
}

openPage("Pre");

console.log(localStorage.getItem("robotToScout"));

function getMousePosition(event){
    var rect = event.target.getBoundingClientRect();
    x = Math.round(event.clientX - rect.left);
    y = Math.round(event.clientY - rect.top);
}


var popupOpen = false;
var mousePosition;
function togglePopup(page){
    if(page == "auto"){
        if(popupOpen){
            document.getElementById("autoDropdown").style.display = "none";
            popupOpen = false;
        }else{
            document.getElementById("autoDropdown").style.display = "block";

            if(x>443.1 && y>150){
                document.getElementById("autoDropdown").style.transform = "translate(443.1px," +  "143.94px)";
                popupOpen = true;
            }else if(x>443.1){
                document.getElementById("autoDropdown").style.transform = "translate(443.1px," +  y + "px)";
                popupOpen = true;
            }else if(y>150) {
                document.getElementById("autoDropdown").style.transform = "translate(" + x + "px," +  "143.94px)";
                popupOpen = true;
            }else{
                document.getElementById("autoDropdown").style.transform = "translate(" + x + "px," +  y + "px)";
                console.log("teest");
                popupOpen = true;
            }
            
        }
    }else{
        if(popupOpen){
            document.getElementById("teleopDropdown").style.display = "none";
            popupOpen = false;
        }else{
            document.getElementById("teleopDropdown").style.display = "block";

            if(x>443.1 && y>150){
                document.getElementById("teleopDropdown").style.transform = "translate(443.1px," +  "143.94px)";
                popupOpen = true;
            }else if(x>443.1){
                document.getElementById("teleopDropdown").style.transform = "translate(443.1px," +  y + "px)";
                popupOpen = true;
            }else if(y>150) {
                document.getElementById("teleopDropdown").style.transform = "translate(" + x + "px," +  "143.94px)";
                popupOpen = true;
            }else{
                document.getElementById("teleopDropdown").style.transform = "translate(" + x + "px," +  y + "px)";
                console.log("teest");
                popupOpen = true;
            }

        }
    }
}

function launchedCargo(points, autoOrTeleop){
    if(autoOrTeleop == "teleop"){
        switch (points) {
            case 2:
                //push to where ever the data is being held that one ball was scored during teleop in the upper hub at mousePosition
                console.log("teleop upper hub");
                break;
            case 1:
                //push to where ever the data is being held that one ball was scored during teleop in the lower hub at mousePosition
                console.log("teleop lower hub");
                break;
            case 0:
                //push to where ever the data is being held that one ball was missed during teleop at mousePosition
                console.log("teleop miss");
                break;
        }
    }else{
        switch (points) {
            case 4:
                //push to where ever the data is being held that one ball was scored during auto in the upper hub at mousePosition
                console.log("auto upper hub");
                break;
            case 2:
                //push to where ever the data is being held that one ball was scored during auto in the lower hub at mousePosition
                console.log("auto lower hub");
                break;
            case 0:
                //push to where ever the data is being held that one ball was missed during auto at mousePosition
                console.log("auto miss");
                break;
        }
    }
}

function pickupCargo(autoOrTeleop){
    if(autoOrTeleop == "teleop"){
        //push to where ever the data is being held that one ball was picked up at mousePosition during teleop
        console.log("teleop pickup");
    }else{
        //push to where ever the data is being held that one ball was picked up at mousePosition during auto
        console.log("auto pickup");
    }
}

