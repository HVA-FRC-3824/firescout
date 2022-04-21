/*
██    ██  █████  ██████  ██  █████  ██████  ██      ███████ ███████ 
██    ██ ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██      ██      
██    ██ ███████ ██████  ██ ███████ ██████  ██      █████   ███████ 
 ██  ██  ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██           ██ 
  ████   ██   ██ ██   ██ ██ ██   ██ ██████  ███████ ███████ ███████ 
*/
// TODO: use querySelector arrays instead for performance reasons

var teamNumber = -1;

var botImage;

var tempName;

var fileType;

var renamedbotImage;

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
    "pitScouter": localStorage.getItem("username"),
    "imageFileType": '',
    "autoCargo": '',
    "autoGoal": ''
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
    pitDictionary["autoCargo"] = document.getElementById("autoCargoInput").value;
    pitDictionary["autoGoal"] = document.querySelector('input[name="autoGoalSelect"]:checked').value;
    pitDictionary["autoStart"] = document.querySelector('input[name="startSelect"]:checked').value;
    
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

    if (!(document.getElementById('autoAbilitySwitch').checked)) {
        pitDictionary["autoCargoInput"] = 'N/A'
    }

    if (isNaN(teamNumber) || (teamNumber > 8898 || teamNumber <= 0)) {
        alert("Please input valid team number!");
        return;
    } else if (isNaN(pitDictionary["robotWeight"])) {
        alert("Please input valid robot weight!");
        return;
    } else if (isNaN(pitDictionary["width"])) {
        alert("Please input valid robot width!");
        return;
    } else if (isNaN(pitDictionary["height"])) {
        alert("Please input valid robot height!");
        return;
    } else if (document.getElementById("climbAbilitySwitch").checked && isNaN(pitDictionary["climbTime"])) {
        alert("Please input valid robot climb time!");
        return;
    }

    var preservedObject = document.getElementById('myImageId').files[0];
    tempName = document.getElementById('myImageId').files[0]["name"];
    fileType = tempName.split(".", 2);
    pitDictionary["imageFileType"] = fileType[1];
    renamedbotImage = new File([preservedObject], teamNumber + "." + fileType[1]);
    console.log(renamedbotImage);

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
        pushPitImage(renamedbotImage, fileType[1]);
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
            dropdownElement = document.getElementById('autoInfo');
            break;
        case 5:
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
var climbTracker = 0;
var autoTracker = 0;

function toggleGrey(switchType) {
    if (switchType == 0) {
        document.getElementById('climbSpecifics').classList.toggle('canClimb');

        if (climbTracker == 0) {
            climbTracker = 1;
            return;
        } else if (climbTracker == 1) {
            climbTracker = 0;
            document.getElementById("climbTime").value = '';
            document.getElementById("barSelect50").checked = true;
            return;
        }
    } else if (switchType == 1) {
        document.getElementById('autoSpecifics').classList.toggle('canAuto');

        if (autoTracker == 0) {
            autoTracker = 1;
            return;
        } else if (autoTracker == 1) {
            autoTracker = 0;
            document.getElementById("autoCargoInput").value = '';
            document.getElementById("autoGoalSelect50").checked = true;
            document.getElementById("startSelect50").checked = true;
            return;
        }
    }
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
    document.getElementById('myImageId').value = '';
    document.getElementById('noImageText').style.display = 'block';
    document.getElementById('imageViewer').style.backgroundImage = 'none';
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

document.getElementById('myImageId').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        var img = document.getElementById('imageViewer');

        document.getElementById('noImageText').style.display = 'none';

        img.style.backgroundImage = "url(\"" + URL.createObjectURL(this.files[0]) + "\")"; // set src to blob url
    }
});
