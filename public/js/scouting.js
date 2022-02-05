var x;
var y;
const buttonTracker = [true,false,false,false,false];
function openPage(pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = "tabcontent " + pageName;
    };
    var currentButton = "green";
    var pastButton = "black";
    var futureButton = "gray";
    if (pageName == 'Pre'){
        document.getElementById("defaultOpen").style.backgroundColor = currentButton ;
        if (buttonTracker[1] == true) {
            document.getElementById("auto").style.backgroundColor = pastButton ;
        } else {
            document.getElementById("auto").style.backgroundColor = futureButton ;
        }
        if (buttonTracker[2] == true) {
            document.getElementById("teleop").style.backgroundColor = pastButton ;
        } else {
            document.getElementById("teleop").style.backgroundColor = futureButton;
        }
        if (buttonTracker[3] == true) {
            document.getElementById("endgame").style.backgroundColor = pastButton ;
        } else {
            document.getElementById("endgame").style.backgroundColor = futureButton ;
        }
    } else if (pageName == "Auto"){
        buttonTracker[1] = true
        document.getElementById("defaultOpen").style.backgroundColor = pastButton ;
        if (buttonTracker[1] == true) {
            document.getElementById("auto").style.backgroundColor = currentButton ;
        } else {
            document.getElementById("auto").style.backgroundColor = futureButton ;
        }
        if (buttonTracker[2] == true) {
            document.getElementById("teleop").style.backgroundColor = pastButton ;
        } else {
            document.getElementById("teleop").style.backgroundColor = futureButton ;
        }
        if (buttonTracker[3] == true) {
            document.getElementById("endgame").style.backgroundColor = pastButton ;
        } else {
            document.getElementById("endgame").style.backgroundColor = futureButton ;
        }
    } else if (pageName == "Teleop"){
        buttonTracker[2] = true
        document.getElementById("defaultOpen").style.backgroundColor = pastButton ;
        if (buttonTracker[1] == true) {
            document.getElementById("auto").style.backgroundColor = pastButton ;
        } else {
            document.getElementById("auto").style.backgroundColor = futureButton ;
        }
        if (buttonTracker[2] == true) {
            document.getElementById("teleop").style.backgroundColor = currentButton ;
        } else {
            document.getElementById("teleop").style.backgroundColor = futureButton ;
        }
        if (buttonTracker[3] == true) {
            document.getElementById("endgame").style.backgroundColor = pastButton ;
        } else {
            document.getElementById("endgame").style.backgroundColor = futureButton ;
        }
    } else if (pageName == "Endgame"){
        buttonTracker[3] = true
        document.getElementById("defaultOpen").style.backgroundColor = pastButton ;
        if (buttonTracker[1] == true) {
            document.getElementById("auto").style.backgroundColor = pastButton ;
        } else {
            document.getElementById("auto").style.backgroundColor = futureButton ;
        }
        if (buttonTracker[2] == true) {
            document.getElementById("teleop").style.backgroundColor = pastButton ;
        } else {
            document.getElementById("teleop").style.backgroundColor = futureButton ;
        }
        if (buttonTracker[3] == true) {
            document.getElementById("endgame").style.backgroundColor = currentButton ;
        } else {
            document.getElementById("endgame").style.backgroundColor = futureButton ;
        }
    }
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


function hasCargo(cargoTest){
    if (cargoTest == "yesButton"){
        document.getElementById("yesButton").style.backgroundColor = '#7CFC00' ;
        document.getElementById("noButton").style.backgroundColor = '#4fbdba' ;
    } else {
        document.getElementById("yesButton").style.backgroundColor = '#4fbdba';
        document.getElementById("noButton").style.backgroundColor = '#7CFC00';
    }
}

function getMousePosition(event){
    var autoImage = document.querySelector("#autoField");
    var teleImage = document.querySelector("#teleopField");
    var rect = event.target.getBoundingClientRect();
    x = Math.round(((event.clientX - rect.left) / autoImage.clientWidth) * 2068);
    y = Math.round(((event.clientY - rect.top) / teleImage.clientWidth) * 1058);
    xRel = event.clientX - rect.left;
    yRel = event.clientY - rect.top;
    console.log(x + " " + y);
    console.log(xRel + " " + yRel);
}


var popupOpen = false;
var mousePosition;
function togglePopup(page){
    var autoPopup = document.querySelector('#autoDropdown');
    var telePopup = document.querySelector('#teleopDropdown');
    if(page == "auto"){
        if(popupOpen){
            document.getElementById("autoDropdown").style.display = "none";
            popupOpen = false;
        }else{
            document.getElementById("autoDropdown").style.display = "block";

            if(x>443.1 && y > 150){
                document.getElementById("autoDropdown").style.transform = "translate(" + autoImage.clientWidth + " +  )";
                popupOpen = true;
            }else if(x>443.1){
                document.getElementById("autoDropdown").style.transform = "translate(443.1px," +  y + "px)";
                popupOpen = true;
            }else if(y>150) {
                document.getElementById("autoDropdown").style.transform = "translate(" + x + "px," +  "143.94px)";
                popupOpen = true;
            }else{
                document.getElementById("autoDropdown").style.transform = "translate(" + x + "px," +  y + "px)";
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
            }else if(xRel>443.1){
                document.getElementById("teleopDropdown").style.transform = "translate(443.1px," +  y + "px)";
                popupOpen = true;
            }else if(yRel>150) {
                document.getElementById("teleopDropdown").style.transform = "translate(" + x + "px," +  "143.94px)";
                popupOpen = true;
            }else{
                document.getElementById("teleopDropdown").style.transform = "translate(" + x + "px," +  y + "px)";
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

function attemptedClimb(climbTest){
    if (climbTest == "yesButton"){
        document.getElementById("yesButtonClimb").style.backgroundColor = '#7CFC00' ;
        document.getElementById("noButtonClimb").style.backgroundColor = '#4fbdba' ;
    } else {
        document.getElementById("yesButtonClimb").style.backgroundColor = '#4fbdba';
        document.getElementById("noButtonClimb").style.backgroundColor = '#7CFC00';
    }
}

function playedDefense(defenseTest){
    if (defenseTest == "yesButton"){
        document.getElementById("yesButtonDefense").style.backgroundColor = '#7CFC00' ;
        document.getElementById("noButtonDefense").style.backgroundColor = '#4fbdba' ;
    } else {
        document.getElementById("yesButtonDefense").style.backgroundColor = '#4fbdba';
        document.getElementById("noButtonDefense").style.backgroundColor = '#7CFC00';
    }
}

function barSelect(currentBar){
    if (currentBar == "traversal"){
        document.getElementById("traversal").style.backgroundColor = '#7CFC00' ;
        document.getElementById("high").style.backgroundColor = '#4fbdba' ;
        document.getElementById("middle").style.backgroundColor = '#4fbdba' ;
        document.getElementById("low").style.backgroundColor = '#4fbdba' ;
        document.getElementById("traversalDiv").style.backgroundColor = '#2bc43296';
        document.getElementById("highDiv").style.backgroundColor = '#00000000';
        document.getElementById("midDiv").style.backgroundColor = '#00000000';
        document.getElementById("lowDiv").style.backgroundColor = '#00000000';
    } else if (currentBar == "high") {
        document.getElementById("traversal").style.backgroundColor = '#4fbdba' ;
        document.getElementById("high").style.backgroundColor = '#7CFC00' ;
        document.getElementById("middle").style.backgroundColor = '#4fbdba' ;
        document.getElementById("low").style.backgroundColor = '#4fbdba' ;
        document.getElementById("traversalDiv").style.backgroundColor = '#00000000';
        document.getElementById("highDiv").style.backgroundColor = '#2bc43296';
        document.getElementById("midDiv").style.backgroundColor = '#00000000';
        document.getElementById("lowDiv").style.backgroundColor = '#00000000';
    } else if (currentBar == "middle") {
        document.getElementById("traversal").style.backgroundColor = '#4fbdba' ;
        document.getElementById("high").style.backgroundColor = '#4fbdba' ;
        document.getElementById("middle").style.backgroundColor = '#7CFC00' ;
        document.getElementById("low").style.backgroundColor = '#4fbdba' ;
        document.getElementById("traversalDiv").style.backgroundColor = '#00000000';
        document.getElementById("highDiv").style.backgroundColor = '#00000000';
        document.getElementById("midDiv").style.backgroundColor = '#2bc43296';
        document.getElementById("lowDiv").style.backgroundColor = '#00000000';
    } else {
        document.getElementById("traversal").style.backgroundColor = '#4fbdba' ;
        document.getElementById("high").style.backgroundColor = '#4fbdba' ;
        document.getElementById("middle").style.backgroundColor = '#4fbdba' ;
        document.getElementById("low").style.backgroundColor = '#7CFC00' ;
        document.getElementById("traversalDiv").style.backgroundColor = '#00000000';
        document.getElementById("highDiv").style.backgroundColor = '#00000000';
        document.getElementById("midDiv").style.backgroundColor = '#00000000';
        document.getElementById("lowDiv").style.backgroundColor = '#2bc43296';

    }
}