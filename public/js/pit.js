/*
██    ██  █████  ██████  ██  █████  ██████  ██      ███████ ███████ 
██    ██ ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██      ██      
██    ██ ███████ ██████  ██ ███████ ██████  ██      █████   ███████ 
 ██  ██  ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██           ██ 
  ████   ██   ██ ██   ██ ██ ██   ██ ██████  ███████ ███████ ███████ 
*/
// TODO: use querySelector arrays instead for performance reasons

var teamNumber = -1;

var pitDictionary = {
    "robotWeight": 8909889,
    "robotLang": '',
    "driveTrain": '',
    "width": 8909889,
    "height": 8909889,
    "climbAbility": false,
    "climbTime": 8909889,
    "climbLevel": '',
    "chamberSize": 8909889,
    "intakeLevel": '',
    "goalLevel": '',
    "driverExp": '',
    "pitScouter": localStorage.getItem("username")
}

var keys = Object.keys(pitDictionary);

var errors = [];

/* 
  █████  ███████ ████████     ██████   █████  ████████  █████  
██       ██         ██        ██   ██ ██   ██    ██    ██   ██ 
██   ███ █████      ██        ██   ██ ███████    ██    ███████ 
██    ██ ██         ██        ██   ██ ██   ██    ██    ██   ██ 
 ██████  ███████    ██        ██████  ██   ██    ██    ██   ██ 
*/

function setPitData() {
    teamNumber = parseInt(document.getElementById("teamInput").value);
    pitDictionary["robotWeight"] = parseInt(document.getElementById("massInput").value);
    pitDictionary["robotLang"] = document.getElementById("langInput").value;
    pitDictionary["driveTrain"] = document.querySelector('input[name="trainSelect"]:checked').value;
    pitDictionary["width"] = parseInt(document.getElementById("widthInput").value);
    pitDictionary["height"] = parseInt(document.getElementById("heightInput").value);
    pitDictionary["climbAbility"] = document.getElementById("climbAbilitySwitch").checked;
    pitDictionary["climbTime"] = parseInt(document.getElementById("climbTime").value);
    pitDictionary["climbLevel"] = document.querySelector('input[name="barSelect"]:checked').value;
    pitDictionary["chamberSize"] = document.querySelector('input[name="chamberSelect"]:checked').value;
    pitDictionary["intakeLevel"] = document.querySelector('input[name="intakeSelect"]:checked').value;
    pitDictionary["goalLevel"] = document.querySelector('input[name="goalSelect"]:checked').value;
    pitDictionary["driverExp"] = document.querySelector('input[name="expSelect"]:checked').value;

    submitPitData();
}

/* 
 ██████ ██   ██ ███████  ██████ ██   ██     ███████ ██████  ██████   ██████  ██████  ███████ 
██      ██   ██ ██      ██      ██  ██      ██      ██   ██ ██   ██ ██    ██ ██   ██ ██      
██      ███████ █████   ██      █████       █████   ██████  ██████  ██    ██ ██████  ███████ 
██      ██   ██ ██      ██      ██  ██      ██      ██   ██ ██   ██ ██    ██ ██   ██      ██ 
 ██████ ██   ██ ███████  ██████ ██   ██     ███████ ██   ██ ██   ██  ██████  ██   ██ ███████ 
*/


function submitPitData() {
    errors = [];

    if (!(document.getElementById('climbAbilitySwitch').checked)) {
        pitDictionary["climbTime"] = 'N/A'
    }

    if (isNaN(teamNumber)) {
        alert("Please input team number!");
        return;
    } else if (teamNumber > 8898 || teamNumber <= 0) {
        alert("Please input valid team number!");
        return;
    }

    for (let i = 0; i < Object.keys(pitDictionary).length-1; i++) {
        if (typeof(pitDictionary[keys[i]]) == 'string') {
            if (pitDictionary[i] === '') {
                errors.push(keys[i] + ' ');
                console.log("found string error");
            }
        } else if (typeof(pitDictionary[i]) === 'number') {
            if (isNaN(pitDictionary[i])) {
                errors.push(keys[i] + ' ');
                console.log("found number error");
            }
        }
    }

    if (errors.length != 0) {
        alert("Please fill in " + errors);
    } else {
        alert("Success");
        pushPitDictionary(teamNumber);
    }
}

/*
██████  ██████   ██████  ██████  ██████   ██████  ██     ██ ███    ██ 
██   ██ ██   ██ ██    ██ ██   ██ ██   ██ ██    ██ ██     ██ ████   ██ 
██   ██ ██████  ██    ██ ██████  ██   ██ ██    ██ ██  █  ██ ██ ██  ██ 
██   ██ ██   ██ ██    ██ ██      ██   ██ ██    ██ ██ ███ ██ ██  ██ ██ 
██████  ██   ██  ██████  ██      ██████   ██████   ███ ███  ██   ████ 
*/

function dropdown(id) {
    var dropdownElement;

    switch (id) {
        case 1:
            dropdownElement = document.getElementById('stats');
            break;
        case 2:
            dropdownElement = document.getElementById('climb');
            break;
        case 3:
            dropdownElement = document.getElementById('cargoInfo');
            break;
        case 4:
            dropdownElement = document.getElementById('misc');
            break;
        default:
            console.log("default");
            break;
    }
    dropdownElement.classList.toggle('active');
}

/* 
███████ ██     ██ ██ ████████  ██████ ██   ██ 
██      ██     ██ ██    ██    ██      ██   ██ 
███████ ██  █  ██ ██    ██    ██      ███████ 
     ██ ██ ███ ██ ██    ██    ██      ██   ██ 
███████  ███ ███  ██    ██     ██████ ██   ██ 
*/
var tracker = 0;

function toggleGrey() {
    document.getElementById('climbSpecifics').classList.toggle('canClimb');
}

/* 
██████  ███████ ███████ ███████ ████████ 
██   ██ ██      ██      ██         ██    
██████  █████   ███████ █████      ██    
██   ██ ██           ██ ██         ██    
██   ██ ███████ ███████ ███████    ██    
*/

function resetPitData() {
    if (document.getElementById("climbAbilitySwitch").checked) {
        toggleGrey();
    }
    document.getElementById("teamInput").value = '';
    document.getElementById("massInput").value = '';
    document.getElementById("langInput").value = '';
    document.getElementById("trainSelect50").checked = true;
    document.getElementById("widthInput").value = '';
    document.getElementById("heightInput").value = '';
    document.getElementById("climbAbilitySwitch").checked = false;
    document.getElementById("climbTime").value = '';
    document.getElementById("barSelect50").checked = true;
    document.getElementById("chamberSelect50").checked = true;
    document.getElementById("intakeSelect50").checked = true;
    document.getElementById("goalSelect50").checked = true;
    document.getElementById("expSelect50").checked = true;
}

