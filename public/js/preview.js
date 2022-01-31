var currentColorMobile = true;
var currentTeamMobile = 0;
function populateMatches(){
    for(i=0; i < filteredJames.length; i++){
        document.getElementById("match").insertAdjacentHTML('beforeend',"<option>Match " + filteredJames[i].match_number + "</option>");
    }
}   

function displayMatchTeams(match){
    matchInt = parseInt(match);
    bTeams = filteredJames[matchInt - 1].alliances.blue.team_keys;
    var i = 0;
    bTeams.forEach(currentTeam => {
        i++;
        team = "blueTeam" + i;
        document.getElementById(team).innerHTML = currentTeam.slice(3);
        
    });
    rTeams = filteredJames[matchInt - 1].alliances.red.team_keys;
    var i = 0;
    rTeams.forEach(currentTeam => {
        i++;
        team = "redTeam" + i;
        document.getElementById(team).innerHTML = currentTeam.slice(3);
    });
    mobileDisplayTeams(match)
    //desktop team data displaying teams numbers

}
function leftArrow(match){
    if (currentTeamMobile == 1){
        currentTeamMobile = 0;
    } else if (currentTeamMobile == 0){
        currentTeamMobile = 2;
    } else {
        currentTeamMobile = 1;
    }
    mobileDisplayTeams(match);
}
function rightArrow(match){
    if (currentTeamMobile == 1){
        currentTeamMobile = 2;
    } else if (currentTeamMobile == 0){
        currentTeamMobile = 1;
    } else {
        currentTeamMobile = 0;
    }
    mobileDisplayTeams(match);
}
function colorChange(match){
    if (currentColorMobile == true){
        currentColorMobile = false;
        document.getElementById("colorButton").innerHTML = "Red";
        document.getElementById("colorButton").style.color = "#ed1c2385";
    } else {
        currentColorMobile = true;
        document.getElementById("colorButton").innerHTML = "Blue";
        document.getElementById("colorButton").style.color = "#0166b37c" ;
    }
    mobileDisplayTeams(match);
}
function mobileDisplayTeams(match){
    matchInt = parseInt(match);
    if (currentColorMobile == true){
        bTeams = filteredJames[matchInt - 1].alliances.blue.team_keys;
        if (currentTeamMobile == 0){
            currentTeam = bTeams[0];
            document.getElementById("teamMobile").innerHTML = currentTeam.slice(3);
        } else if (currentTeamMobile == 1){
            currentTeam = bTeams[1];
            document.getElementById("teamMobile").innerHTML = currentTeam.slice(3);
        } else {
            currentTeam = bTeams[2];
            document.getElementById("teamMobile").innerHTML = currentTeam.slice(3);
        }
        var i = 0;
        bTeams.forEach(currentTeam => {
            i++;
            team = "team" + i;
            document.getElementById(team).innerHTML = currentTeam.slice(3);
        });
    
    } else {
        rTeams = filteredJames[matchInt - 1].alliances.red.team_keys;
        if (currentTeamMobile == 0){
            currentTeam = rTeams[0];
            document.getElementById("teamMobile").innerHTML = currentTeam.slice(3);
        } else if (currentTeamMobile == 1){
            currentTeam = rTeams[1];
            document.getElementById("teamMobile").innerHTML = currentTeam.slice(3);
        } else {
            currentTeam = rTeams[2];
            document.getElementById("teamMobile").innerHTML = currentTeam.slice(3);
        }
        var i = 0;
        rTeams.forEach(currentTeam => {
            i++;
            team = "team" + i;
            document.getElementById(team).innerHTML = currentTeam.slice(3);
        });
    
    }
}
populateMatches();
