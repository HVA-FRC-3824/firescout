/*
██    ██  █████  ██████  ██  █████  ██████  ██      ███████ ███████ 
██    ██ ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██      ██      
██    ██ ███████ ██████  ██ ███████ ██████  ██      █████   ███████ 
 ██  ██  ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██           ██ 
  ████   ██   ██ ██   ██ ██ ██   ██ ██████  ███████ ███████ ███████ 
*/                                                                  

var dataDictionary = { //The object of all our data, this should be quite easy to push to firebase in this format
    "fieldStartPositionX": 0,
    "fieldStartPositionY": 0,
    "startedWithCargo": false,
    "autoShotsMissed": 0,
    "teleShotsMissed": 0,
    "movedOffTarmac": false,
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
var autoShotsArrX = [];
var autoShotsArrY = [];
var teleShotsArrX = [];
var teleShotsArrY = [];
var autoPickupArrX = [];
var autoPickupArrY = [];
var telePickupArrX = [];
var telePickupArrY = [];

var currentCargo = 0;

//bot number
var robotToScout = -3824;

//Match number
var matchNum = -1;

// Colors
var selectedColor = "#00f3ff";
var buttonColor = "#5295ec";

//Creates usable variables for both images
var autoImage = document.querySelector("#autoField");
var teleImage = document.querySelector("#teleopField");
var tarmacImage = document.querySelector("#tarmacImage");
var startPosIcon = document.querySelector("#startPosIcon");

//coords are global for the mouse postion
var x;
var y;
var xStart;
var yStart;

/*
██████   █████   ██████  ███████     ███    ███  █████  ███    ██  █████   ██████  ███████ ███    ███ ███████ ███    ██ ████████ 
██   ██ ██   ██ ██       ██          ████  ████ ██   ██ ████   ██ ██   ██ ██       ██      ████  ████ ██      ████   ██    ██    
██████  ███████ ██   ███ █████       ██ ████ ██ ███████ ██ ██  ██ ███████ ██   ███ █████   ██ ████ ██ █████   ██ ██  ██    ██    
██      ██   ██ ██    ██ ██          ██  ██  ██ ██   ██ ██  ██ ██ ██   ██ ██    ██ ██      ██  ██  ██ ██      ██  ██ ██    ██    
██      ██   ██  ██████  ███████     ██      ██ ██   ██ ██   ████ ██   ██  ██████  ███████ ██      ██ ███████ ██   ████    ██
*/

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
    var currentButton = "#4f77aa";
    var pastButton = "#1D1C1A";
    var futureButton = "#1D1C1A";

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

/*
██████  ██████  ███████       ███    ███  █████  ████████  ██████ ██   ██ 
██   ██ ██   ██ ██            ████  ████ ██   ██    ██    ██      ██   ██ 
██████  ██████  █████   █████ ██ ████ ██ ███████    ██    ██      ███████ 
██      ██   ██ ██            ██  ██  ██ ██   ██    ██    ██      ██   ██ 
██      ██   ██ ███████       ██      ██ ██   ██    ██     ██████ ██   ██
*/

currentUser = localStorage.getItem("username");
matchNum = localStorage.getItem("matchNum")
robotToScout = localStorage.getItem("robotToScout");  //Gets the robot you are scouting from local storage
document.querySelector('#teamNum').innerHTML = "<i id='lilGuy' class='fas fa-user'></i> " + robotToScout;

try {
    document.querySelector('#teamNumber').innerHTML = robotToScout;
} catch (error) {
    
}
//console.log(robotToScout);

function hasCargo(cargoTest){ //Changes the color for the 'starting with cargo' button on pre match page
    if (cargoTest == "yesButton"){
        document.getElementById("yesButton").style.backgroundColor = selectedColor;
        document.getElementById("noButton").style.backgroundColor = buttonColor;
        if(dataDictionary["startedWithCargo"]){
            //true is already selected
        }else{
            currentCargo += 1;
        }
        dataDictionary["startedWithCargo"] = true;
        updateCurrentCargo();
    } else {
        document.getElementById("yesButton").style.backgroundColor = buttonColor;
        document.getElementById("noButton").style.backgroundColor = selectedColor;
        if(!dataDictionary["startedWithCargo"]){
            //already not holding a cargo
        }else{
            if(currentCargo > 0){
                currentCargo -= 1;
            }
        }
        dataDictionary["startedWithCargo"] = false;
        updateCurrentCargo();
    }
}

function getStartPosition(event){
    var rect = event.target.getBoundingClientRect();
    xStart = Math.round(((event.clientX - rect.left) / tarmacImage.clientWidth) * 820); //adjusts for any screen size, converts coords to a standard size, used for heatmap and data
    yStart = Math.round(((event.clientY - rect.top) / tarmacImage.clientWidth) * 820);
    xStartRel = Math.round(event.clientX - rect.left); //gets the relative position of the mouse, used for placing the popup and icons
    yStartRel = Math.round(event.clientY - rect.top);
    dataDictionary["fieldStartPositionX"] = xStart;
    dataDictionary["fieldStartPositionY"] = yStart;
    //console.log(xStartRel, yStartRel);
    startPosIcon.style.display = "inline-block";
    startPosIcon.style.transform = "translate(" + (xStartRel - startPosIcon.clientWidth/2) + "px," + (yStartRel - startPosIcon.clientHeight/2) + "px)"
}


/*
 █████  ██    ██ ████████  ██████       █████  ███    ██ ██████      ████████ ███████ ██      ███████ 
██   ██ ██    ██    ██    ██    ██     ██   ██ ████   ██ ██   ██        ██    ██      ██      ██      
███████ ██    ██    ██    ██    ██     ███████ ██ ██  ██ ██   ██        ██    █████   ██      █████   
██   ██ ██    ██    ██    ██    ██     ██   ██ ██  ██ ██ ██   ██        ██    ██      ██      ██      
██   ██  ██████     ██     ██████      ██   ██ ██   ████ ██████         ██    ███████ ███████ ███████ 
*/

function toggleTarmac(){
    tarmac = document.getElementById("movedOffTarmac").checked;
    //console.log(!tarmac);
    dataDictionary["movedOffTarmac"] = !tarmac;
}

function updateCurrentCargo(){
    document.getElementById("currentCargoAuto").innerHTML = currentCargo;
    document.getElementById("currentCargoTele").innerHTML = currentCargo;
}

function getMousePosition(event){ //Gets the position of the mouse !!only works when run from an onclick and passing in event!!
    var rect = event.target.getBoundingClientRect();
    x = Math.round(((event.clientX - rect.left) / autoImage.clientWidth) * 2068); //adjusts for any screen size, converts coords to a standard size, used for heatmap and data
    y = Math.round(((event.clientY - rect.top) / teleImage.clientHeight) * 1058);
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

function pushToArr(shotOrPickup, autoOrTeleop, xToPush, yToPush){
    if(shotOrPickup == "pickup"){
        if(autoOrTeleop == "auto"){
            autoPickupArrX.push(xToPush);
            autoPickupArrY.push(yToPush);
        }else{
            telePickupArrX.push(xToPush);
            telePickupArrY.push(yToPush);
        }
    }else{
        if(autoOrTeleop == "auto"){
            autoShotsArrX.push(xToPush);
            autoShotsArrY.push(yToPush);
        }else{
            teleShotsArrX.push(xToPush);
            teleShotsArrY.push(yToPush);
        }
    }
    //console.log(autoShotsArrX, autoShotsArrY);
}

function launchedCargo(points, autoOrTeleop){ //runs when any of the launched buttons are clicked from the popup, passes in the point values and wheather it is auto or tele
    if(autoOrTeleop == "teleop"){
        switch (points) {
            case 2:
                //push to where ever the data is being held that one ball was scored during teleop in the upper hub at mousePosition
                //console.log("teleop upper hub");
                if(currentCargo > 0){
                    currentCargo--;
                    dataDictionary["teleUpperHubAmount"]++;
                    addIconToField('tele', 'teleUpperIcon');
                    pushToArr('shot', 'tele', x, y);
                }else{
                    alert("impossible!");
                }
                break;
            case 1:
                //push to where ever the data is being held that one ball was scored during teleop in the lower hub at mousePosition
                //console.log("teleop lower hub");
                if(currentCargo > 0){
                    currentCargo--;
                    dataDictionary["teleLowerHubAmount"]++;
                    addIconToField('tele', 'teleLowerIcon');
                    pushToArr('shot', 'tele', x, y);
                }else{
                    alert("impossible!");
                }
                break;
            case 0:
                //push to where ever the data is being held that one ball was missed during teleop at mousePosition
                //console.log("teleop miss");
                if(currentCargo > 0){
                    currentCargo--;
                    dataDictionary["teleShotsMissed"]++;
                    addIconToField('tele', 'teleMissIcon');
                    pushToArr('shot', 'tele', x, y);
                }else{
                    alert("impossible!");
                }
                break;
        }
    }else{
        switch (points) {
            case 4:
                //push to where ever the data is being held that one ball was scored during auto in the upper hub at mousePosition
                dataDictionary["autoUpperHubAmount"]++;
                if(currentCargo > 0){
                    currentCargo--;
                    //console.log("auto upper hub");
                    dataDictionary["autoUpperHubAmount"]++;
                    addIconToField('auto', 'autoUpperIcon');
                    pushToArr('shot', 'auto', x, y);
                }else{
                    alert("impossible!");
                }
                break;
            case 2:
                //push to where ever the data is being held that one ball was scored during auto in the lower hub at mousePosition
                if(currentCargo > 0){
                    currentCargo--;
                    //console.log("auto lower hub");
                    dataDictionary["autoLowerHubAmount"]++;
                    addIconToField('auto', 'autoLowerIcon');
                    pushToArr('shot', 'auto', x, y);
                }else{
                    alert("impossible!");
                }
                break;
            case 0:
                //push to where ever the data is being held that one ball was missed during auto at mousePosition
                if(currentCargo > 0){
                    currentCargo--;
                    //console.log("auto miss");
                    dataDictionary["autoShotsMissed"]++;
                    addIconToField('auto', 'autoMissIcon');
                    pushToArr('shot', 'auto', x, y);
                }else{
                    alert("impossible!");
                }
                break;
        }
    }
    updateCurrentCargo();
}

function pickupCargo(autoOrTeleop){ //runs when the pickup cargo button is pressed from the popup, passes in 'auto' or 'teleop'
    if(autoOrTeleop == "teleop"){
        //push to where ever the data is being held that one ball was picked up at mousePosition during teleop
        //console.log("teleop pickup");
        if(currentCargo < 2){
            currentCargo++;
            addIconToField("tele", "telePickupIcon");
            pushToArr('pickup', 'tele', x, y);
        }else{
            alert("impossible!");
        }
    }else{
        //push to where ever the data is being held that one ball was picked up at mousePosition during auto
        //console.log("auto pickup");
        if(currentCargo < 2){
            currentCargo++;
            addIconToField("auto", "autoPickupIcon");
            pushToArr('pickup', 'auto', x, y);
        }else{
            alert("impossible!");
        }
    }
    updateCurrentCargo();
}

var autoIconsAmount = 0;
var teleIconsAmount = 0;

function addIconToField(autoOrTele, whichIcon){
    if(autoOrTele == 'auto'){
        var iconToPlace;
        if(whichIcon == "autoMissIcon"){
            iconToPlace = "❌";
        }else if(whichIcon == "autoUpperIcon"){
            iconToPlace = "⬆️";
        }else if(whichIcon == "autoLowerIcon"){
            iconToPlace = "⬇️";
        }else{
            iconToPlace = "⭕️";
        }
        document.getElementById("autoIcons").insertAdjacentHTML('afterbegin',"<p class='icons' id='" + whichIcon + autoIconsAmount + "'>" + iconToPlace + "</p>");
        //console.log(document.getElementById(whichIcon + autoIconsAmount));
        currentIcon = document.getElementById(whichIcon + autoIconsAmount)
        currentIcon.style.transform = "translate(" + (xRel - currentIcon.clientWidth/2)  + "px, " + (yRel - currentIcon.clientHeight/2) + "px)"
        autoIconsAmount++;
    }else{
        var iconToPlace;
        if(whichIcon == "teleMissIcon"){
            iconToPlace = "❌";
        }else if(whichIcon == "teleUpperIcon"){
            iconToPlace = "⬆️";
        }else if(whichIcon == "teleLowerIcon"){
            iconToPlace = "⬇️";
        }else{
            iconToPlace = "⭕️";
        }
        document.getElementById("teleIcons").insertAdjacentHTML('afterbegin',"<p class='icons' id='" + whichIcon + teleIconsAmount + "'>" + iconToPlace + "</p>");
        //console.log(document.getElementById(whichIcon + teleIconsAmount));
        currentIcon = document.getElementById(whichIcon + teleIconsAmount);
        currentIcon.style.transform = "translate(" + (xRel - currentIcon.clientWidth/2)  + "px, " + (yRel - currentIcon.clientHeight/2) + "px)"
        teleIconsAmount = teleIconsAmount + 1;
    }
}

/*
███████ ███    ██ ██████   ██████   █████  ███    ███ ███████ 
██      ████   ██ ██   ██ ██       ██   ██ ████  ████ ██      
█████   ██ ██  ██ ██   ██ ██   ███ ███████ ██ ████ ██ █████   
██      ██  ██ ██ ██   ██ ██    ██ ██   ██ ██  ██  ██ ██      
███████ ██   ████ ██████   ██████  ██   ██ ██      ██ ███████
*/

function attemptedClimb(climbTest){ //Changes the color of the attempted climb buttons to show which is selected
    if (climbTest == "yesButton"){
        document.getElementById("yesButtonClimb").style.backgroundColor = selectedColor ;
        document.getElementById("noButtonClimb").style.backgroundColor = buttonColor ;
        document.getElementById("climbSelectBox").style.filter = "blur(0px) grayscale(0%)";
        document.getElementById("climbSelectCover").style.display = "none";
        dataDictionary["attemptedClimb"] = true;
    } else {
        document.getElementById("yesButtonClimb").style.backgroundColor = buttonColor;
        document.getElementById("noButtonClimb").style.backgroundColor = selectedColor;
        document.getElementById("traversal").style.backgroundColor = buttonColor ;
        document.getElementById("high").style.backgroundColor = buttonColor ;
        document.getElementById("middle").style.backgroundColor = buttonColor ;
        document.getElementById("low").style.backgroundColor = buttonColor ;
        document.getElementById("traversalDiv").style.backgroundColor = '#00000000';
        document.getElementById("highDiv").style.backgroundColor = '#00000000';
        document.getElementById("midDiv").style.backgroundColor = '#00000000';
        document.getElementById("lowDiv").style.backgroundColor = '#00000000';
        document.getElementById("climbSelectBox").style.filter = "blur(5px) grayscale(100%)";
        document.getElementById("climbSelectCover").style.display = "grid";
        dataDictionary["levelClimbed"] = 'none';
        dataDictionary["attemptedClimb"] = false;
    }
}

function playedDefense(defenseTest){ //Changes the color of the played defense buttons to show which is selected
    if (defenseTest == "yesButton"){
        document.getElementById("yesButtonDefense").style.backgroundColor = selectedColor ;
        document.getElementById("noButtonDefense").style.backgroundColor = buttonColor ;
        dataDictionary["playedDefense"] = true;
    } else {
        document.getElementById("yesButtonDefense").style.backgroundColor = buttonColor;
        document.getElementById("noButtonDefense").style.backgroundColor = selectedColor;
        dataDictionary["playedDefense"] = false;
    }
}

function cardFoul(cardType) {
    var checkVal;
    if (cardType == 0) {
        checkVal = document.querySelector('#redCard').checked;
        dataDictionary["redCard"] = checkVal;
    } else if (cardType == 1) {
        checkVal = document.querySelector('#yellowCard').checked;
        dataDictionary["yellowCard"] = checkVal;
    }
}

function barSelect(currentBar){  //Changes the color of the climb level buttons and highlights the bar selected 
    if (currentBar == "traversal"){
        document.getElementById("traversal").style.backgroundColor = selectedColor ;
        document.getElementById("high").style.backgroundColor = buttonColor ;
        document.getElementById("middle").style.backgroundColor = buttonColor ;
        document.getElementById("low").style.backgroundColor = buttonColor ;
        document.getElementById("fail").style.backgroundColor = buttonColor ;
        document.getElementById("traversalDiv").style.backgroundColor = '#2bc43296';
        document.getElementById("highDiv").style.backgroundColor = '#00000000';
        document.getElementById("midDiv").style.backgroundColor = '#00000000';
        document.getElementById("lowDiv").style.backgroundColor = '#00000000';
        dataDictionary["levelClimbed"] = 'traversal';
    } else if (currentBar == "high") {
        document.getElementById("traversal").style.backgroundColor = buttonColor ;
        document.getElementById("high").style.backgroundColor = selectedColor ;
        document.getElementById("middle").style.backgroundColor = buttonColor ;
        document.getElementById("low").style.backgroundColor = buttonColor ;
        document.getElementById("fail").style.backgroundColor = buttonColor ;
        document.getElementById("traversalDiv").style.backgroundColor = '#00000000';
        document.getElementById("highDiv").style.backgroundColor = '#2bc43296';
        document.getElementById("midDiv").style.backgroundColor = '#00000000';
        document.getElementById("lowDiv").style.backgroundColor = '#00000000';
        dataDictionary["levelClimbed"] = 'high';
    } else if (currentBar == "middle") {
        document.getElementById("traversal").style.backgroundColor = buttonColor ;
        document.getElementById("high").style.backgroundColor = buttonColor ;
        document.getElementById("middle").style.backgroundColor = selectedColor ;
        document.getElementById("low").style.backgroundColor = buttonColor ;
        document.getElementById("fail").style.backgroundColor = buttonColor ;
        document.getElementById("traversalDiv").style.backgroundColor = '#00000000';
        document.getElementById("highDiv").style.backgroundColor = '#00000000';
        document.getElementById("midDiv").style.backgroundColor = '#2bc43296';
        document.getElementById("lowDiv").style.backgroundColor = '#00000000';
        dataDictionary["levelClimbed"] = 'middle';
    } else if (currentBar == "low"){
        document.getElementById("traversal").style.backgroundColor = buttonColor ;
        document.getElementById("high").style.backgroundColor = buttonColor ;
        document.getElementById("middle").style.backgroundColor = buttonColor ;
        document.getElementById("low").style.backgroundColor = selectedColor ;
        document.getElementById("fail").style.backgroundColor = buttonColor ;
        document.getElementById("traversalDiv").style.backgroundColor = '#00000000';
        document.getElementById("highDiv").style.backgroundColor = '#00000000';
        document.getElementById("midDiv").style.backgroundColor = '#00000000';
        document.getElementById("lowDiv").style.backgroundColor = '#2bc43296';
        dataDictionary["levelClimbed"] = 'low';
    }else{
        document.getElementById("traversal").style.backgroundColor = buttonColor ;
        document.getElementById("high").style.backgroundColor = buttonColor ;
        document.getElementById("middle").style.backgroundColor = buttonColor ;
        document.getElementById("low").style.backgroundColor = buttonColor ;
        document.getElementById("fail").style.backgroundColor = selectedColor ;
        document.getElementById("traversalDiv").style.backgroundColor = '#00000000';
        document.getElementById("highDiv").style.backgroundColor = '#00000000';
        document.getElementById("midDiv").style.backgroundColor = '#00000000';
        document.getElementById("lowDiv").style.backgroundColor = '#00000000';
        dataDictionary["levelClimbed"] = 'fail';
    }
}


// = == = = = == = == = = = = == = == = = = == = = = =NEXT MATCH FUNCTION VERY IMPORANTN == = == == ==== = = == = = = = = = == = = =//
function nextMatch(){
    if(offlineMode){
        generateQRCode();
    }else{
        if(confirm("Are you sure you would like to leave this page?")){
        //pushing the data
            pushDataDictionary(robotToScout, matchNum, currentUser);
            location.href = 'schedule.html'; 
        }
    }
}

function generateQRCode(){
    dataDictionary.match = document.getElementById('offlineMatchNum').value;
    dataDictionary.teamNum = document.getElementById('offlineRobotNum').value;
    dataDictionary.scouter = document.getElementById('offlineScouterName').value;

    qrData = JSON.stringify(dataDictionary);
    console.log(qrData);

    //Generate a qr code here some how lol
    //Currently will no support heatmap because it could overflow data
    try{
        qrcode.clear();
        console.log("test");
    }catch(e){

    }
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrData,
        width: 512,
        height: 512,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

}

