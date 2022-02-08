var dataDictionary = { //The object of all our data, this should be quite easy to push to firebase in this format
    "fieldStartPositionX": 0,
    "fieldStartPositionY": 0,
    "autoShotsMissed": 0,
    "teleShotsMissed": 0,
    "movedOffTarmac": 0,
    "autoUpperHubAmount": 0,
    "autoLowerHubAmount": 0,
    "teleUpperHubAmount": 0,
    "teleLowerHubAmount": 0,
    "playedDefense": false,
    "attemptedClimb": false,
    "levelClimbed": 'none',
    "yellowCard": false,
    "redCard": false
}

//but of course because nothing is easy dictionary cannot store arrays
var autoShortsArrX = [];
var autoShortsArrY = [];
var teleShortsArrX = [];
var teleShortsArrY = [];
var autoPickupArrX = [];
var autoPickupArrY = [];
var telePickupArrX = [];
var telePickupArrY = [];

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

var buttonTracker = [true,false,false,false,false]; //array of which buttons at the top have been clicked

function openPage(pageName) { //Runs when the nav bar buttons are pressed, the button pressed is passed in as a string
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = "tabcontent " + pageName;
    };
    var currentButton = "green";
    var pastButton = "black";
    var futureButton = "gray";

    // Changes the colors of the nav according to their visited status
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


openPage("Pre"); //Starts the page by openeing the pre match page

console.log(localStorage.getItem("robotToScout"));  //Gets the robot you are scouting from local storage

function hasCargo(cargoTest){ //Changes the color for the 'starting with cargo' button on pre match page
    if (cargoTest == "yesButton"){
        document.getElementById("yesButton").style.backgroundColor = '#7CFC00' ;
        document.getElementById("noButton").style.backgroundColor = '#4fbdba' ;
    } else {
        document.getElementById("yesButton").style.backgroundColor = '#4fbdba';
        document.getElementById("noButton").style.backgroundColor = '#7CFC00';
    }
}

//Creates usable variables for both images
var autoImage = document.querySelector("#autoField");
var teleImage = document.querySelector("#teleopField");

//coords are global for the mouse postion
var x;
var y;

function getMousePosition(event){ //Gets the position of the mouse !!only works when run from an onclick and passing in event!!
    var rect = event.target.getBoundingClientRect();
    x = Math.round(((event.clientX - rect.left) / autoImage.clientWidth) * 2068); //adjusts for any screen size, converts coords to a standard size, used for heatmap and data
    y = Math.round(((event.clientY - rect.top) / teleImage.clientWidth) * 1058);
    xRel = Math.round(event.clientX - rect.left); //gets the relative position of the mouse, used for placing the popup and icons
    yRel = Math.round(event.clientY - rect.top);
    //console.log(x + " " + y);
    //console.log(xRel + " " + yRel);
}

var popupOpen = false; //popup open is global

function togglePopup(page){ //Toggles the popup on tele or auto, takes in a string of 'auto' or 'teleop' and places it where the use clicked
    var autoPopup = document.querySelector('#autoDropdown');
    var telePopup = document.querySelector('#teleopDropdown');

    if(page == "auto"){
        if(popupOpen){
            document.getElementById("autoDropdown").style.display = "none";
            popupOpen = false;
        }else{
            document.getElementById("autoDropdown").style.display = "block";
            if(xRel>(autoImage.clientWidth - autoPopup.clientWidth) && yRel > (autoImage.clientHeight - autoPopup.clientHeight)){
                document.getElementById("autoDropdown").style.transform = "translate(" + (autoImage.clientWidth - autoPopup.clientWidth) + "px," + (autoImage.clientHeight - autoPopup.clientHeight) + "px)";
                popupOpen = true;
            }else if(xRel>(autoImage.clientWidth - autoPopup.clientWidth)){
                document.getElementById("autoDropdown").style.transform = "translate(" + (autoImage.clientWidth - autoPopup.clientWidth) + "px," +  yRel + "px)";
                popupOpen = true;
            }else if(yRel>(autoImage.clientHeight - autoPopup.clientHeight)) {
                document.getElementById("autoDropdown").style.transform = "translate(" + xRel + "px," + (autoImage.clientHeight - autoPopup.clientHeight) + "px)";
                popupOpen = true;
            }else{
                document.getElementById("autoDropdown").style.transform = "translate(" + xRel + "px," +  yRel + "px)";
                popupOpen = true;
            }
        }
    }else{
        if(popupOpen){
            document.getElementById("teleopDropdown").style.display = "none";
            popupOpen = false;
        }else{
            document.getElementById("teleopDropdown").style.display = "block";
            if(xRel>(teleImage.clientWidth - telePopup.clientWidth) && yRel > (teleImage.clientHeight - telePopup.clientHeight)){
                document.getElementById("teleopDropdown").style.transform = "translate(" + (teleImage.clientWidth - telePopup.clientWidth) + "px," + (teleImage.clientHeight - telePopup.clientHeight) + "px)";
                popupOpen = true;
            }else if(xRel>(teleImage.clientWidth - telePopup.clientWidth)){
                document.getElementById("teleopDropdown").style.transform = "translate(" + (teleImage.clientWidth - telePopup.clientWidth) + "px," +  yRel + "px)";
                popupOpen = true;
            }else if(yRel>(teleImage.clientHeight - telePopup.clientHeight)) {
                document.getElementById("teleopDropdown").style.transform = "translate(" + xRel + "px," + (teleImage.clientHeight - telePopup.clientHeight) + "px)";
                popupOpen = true;
            }else{
                document.getElementById("teleopDropdown").style.transform = "translate(" + xRel + "px," +  yRel + "px)";
                popupOpen = true;
            }
        }
    }
}


function launchedCargo(points, autoOrTeleop){ //runs when any of the launched buttons are clicked from the popup, passes in the point values and wheather it is auto or tele
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

function pickupCargo(autoOrTeleop){ //runs when the pickup cargo button is pressed from the popup, passes in 'auto' or 'teleop'
    if(autoOrTeleop == "teleop"){
        //push to where ever the data is being held that one ball was picked up at mousePosition during teleop
        console.log("teleop pickup");
    }else{
        //push to where ever the data is being held that one ball was picked up at mousePosition during auto
        console.log("auto pickup");
    }
}

function attemptedClimb(climbTest){ //Changes the color of the attempted climb buttons to show which is selected
    if (climbTest == "yesButton"){
        document.getElementById("yesButtonClimb").style.backgroundColor = '#7CFC00' ;
        document.getElementById("noButtonClimb").style.backgroundColor = '#4fbdba' ;
    } else {
        document.getElementById("yesButtonClimb").style.backgroundColor = '#4fbdba';
        document.getElementById("noButtonClimb").style.backgroundColor = '#7CFC00';
    }
}

function playedDefense(defenseTest){ //Changes the color of the played defense buttons to show which is selected
    if (defenseTest == "yesButton"){
        document.getElementById("yesButtonDefense").style.backgroundColor = '#7CFC00' ;
        document.getElementById("noButtonDefense").style.backgroundColor = '#4fbdba' ;
    } else {
        document.getElementById("yesButtonDefense").style.backgroundColor = '#4fbdba';
        document.getElementById("noButtonDefense").style.backgroundColor = '#7CFC00';
    }
}

function barSelect(currentBar){  //Changes the color of the climb level buttons and highlights the bar selected 
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