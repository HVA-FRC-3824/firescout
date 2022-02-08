function populateMatches(){ 
    for(i=0; i < filteredJames.length; i++){
        document.getElementById("match").insertAdjacentHTML('beforeend',"<option>Match " + filteredJames[i].match_number + "</option>");
    }
}  

populateMatches();

var usernamesArr = [];
var scoutPositions = [];

function sortOutUsers(){
    //console.log(usersObject);
    for (const user in usersObject) {
        if (Object.hasOwnProperty.call(usersObject, user)) {
            const element = usersObject[user];
            console.log(usersObject[user]["displayName"]["data"]);
            usernamesArr.push(usersObject[user]["displayName"]["data"]);
            scoutPositions.push(usersObject[user]["scoutPosition"]["data"]);
        }
    }
    //console.log(usernamesArr, scoutPositions);
}

var nameSelectors = [];
function displayUsers(){
    nameSelectors = document.getElementsByClassName("namesSelector");
    //console.log(nameSelectors);
    for(i=0; i < nameSelectors.length; i++){
        usernamesArr.forEach(username => {
            nameSelectors[i].insertAdjacentHTML('beforeend', "<option>" + username + "</option>");
        });
    }
}

var usersObject = {};
window.usersObject = usersObject;
setTimeout(() => {
    readData("Users");
    setTimeout(() => {
        sortOutUsers();
        displayUsers();
    }, 1000);    
}, 3000);

function sendData(){
    for (i = 0;i < nameSelectors.length; i++) {
        currentName = nameSelectors[i].value;
        if(currentName != "name"){
            uidToUse = nameSelectors[i].selectedIndex - 1;
            setUserScoutPosition(Object.keys(usersObject)[uidToUse], nameSelectors[i].name);
        }
    }
    alert("data submitted!");
}