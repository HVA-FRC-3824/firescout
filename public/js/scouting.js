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

    nav.addEventListener('click', function () {
        arrow.classList.toggle('is-active');
        navbar.classList.toggle('is-active');
        for (i = 0; i < content.length; i++) {
            content[i].classList.toggle('is-active');
        };
    });
}

openPage("Pre");

console.log(localStorage.getItem("robotToScout"));

function getMousePosition(){
    //get the users mouse position :)
}

var popupOpen = false;
var mousePosition;
function togglePopup(page){
    //mousePosition = getMousePosition    //TODO make this function :)
    if(page == "auto"){
        if(popupOpen){
            document.getElementById("autoDropdown").style.display = "none";
            popupOpen = false;
        }else{
            //TODO MOVE autoDropdown to the mousePosition
            document.getElementById("autoDropdown").style.display = "block";
            popupOpen = true;
        }
    }else{
        if(popupOpen){
            document.getElementById("teleopDropdown").style.display = "none";
            popupOpen = false;
        }else{
            //TODO MOVE teleDropdown to the mousePosition
            document.getElementById("teleopDropdown").style.display = "block";
            popupOpen = true;
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

