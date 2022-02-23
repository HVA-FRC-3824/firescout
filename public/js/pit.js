/*
██    ██  █████  ██████  ██  █████  ██████  ██      ███████ ███████ 
██    ██ ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██      ██      
██    ██ ███████ ██████  ██ ███████ ██████  ██      █████   ███████ 
 ██  ██  ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██           ██ 
  ████   ██   ██ ██   ██ ██ ██   ██ ██████  ███████ ███████ ███████ 
*/

var teamNumber = -1;

var pitDictionary = {
    "robotWeight": 8909889,
    "robotLang": 'nothing',
    "driveTrain": 'nothing',
    "width": 8909889,
    "height": 8909889,
    "climbAbility": false,
    "climbTime": 8909889,
    "climbLevel": 'nothing',
    "chamberSize": 8909889,
    "intakeLevel": 'nothing',
    "goalLevel": 'nothing',
    "driverExp": 8909889
}

var errors = [];

/* 
  █████  ███████ ████████     ██████   █████  ████████  █████  
██       ██         ██        ██   ██ ██   ██    ██    ██   ██ 
██   ███ █████      ██        ██   ██ ███████    ██    ███████ 
██    ██ ██         ██        ██   ██ ██   ██    ██    ██   ██ 
 ██████  ███████    ██        ██████  ██   ██    ██    ██   ██ 
*/

function setPitData() {
    teamNumber = document.getElementById("teamInput").value;
    console.log(teamNumber);
    pitDictionary[0] = document.getElementById("massInput").value;
    console.log(pitDictionary[0]);
    pitDictionary[1] = document.getElementById("langInput").value;
    console.log(pitDictionary[1]);
    pitDictionary[2] = document.getElementById("driveSelect").value;
    console.log(pitDictionary[2]);
    pitDictionary[3] = document.getElementById("widthInput").value;
    console.log(pitDictionary[3]);
    pitDictionary[4] = document.getElementById("heightInput").value;
    console.log(pitDictionary[4]);
    pitDictionary[5] = document.getElementById("yellowCard").value;
    console.log(pitDictionary[5]);
    pitDictionary[6] = document.getElementById("climbTime").value;
    console.log(pitDictionary[6]);
    try {
        pitDictionary[7] = document.querySelector('input[name="barSelect"]:checked').value;
    } catch (e) {
        console.log(e);
    }
    pitDictionary[8] = document.querySelector('input[name="chamberSelect"]:checked').value;
    console.log(pitDictionary[8]);
    pitDictionary[9] = document.querySelector('input[name="intakeSelect"]:checked').value;
    console.log(pitDictionary[9]);
    pitDictionary[10] = document.querySelector('input[name="goalSelect"]:checked').value;
    console.log(pitDictionary[10]);
    pitDictionary[11] = document.querySelector('input[name="expSelect"]:checked').value;
    console.log(pitDictionary[11]);
}

/* 
 ██████ ██   ██ ███████  ██████ ██   ██     ███████ ██████  ██████   ██████  ██████  ███████ 
██      ██   ██ ██      ██      ██  ██      ██      ██   ██ ██   ██ ██    ██ ██   ██ ██      
██      ███████ █████   ██      █████       █████   ██████  ██████  ██    ██ ██████  ███████ 
██      ██   ██ ██      ██      ██  ██      ██      ██   ██ ██   ██ ██    ██ ██   ██      ██ 
 ██████ ██   ██ ███████  ██████ ██   ██     ███████ ██   ██ ██   ██  ██████  ██   ██ ███████ 
*/


function submitPitData() {
    for (let i = 0; i < pitDictionary.length; i++) {
        if (typeof(pitDictionary[i]) == 'string') {
            if (pitDictionary[i] == 'nothing') {
                errors.push(Object.keys(pitDictionary)[i]);
            }
        } else if (typeof(pitDictionary[i]) == 'number') {
            if (pitDictionary[i] == -8909889) {
                errors.push(Object.keys(pitDictionary)[i]);
            }
        }
    }

    if (errors.length != 0) {
        alert("Please fill in " + errors);
    } else {
        console.log("Success")
    }
}































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