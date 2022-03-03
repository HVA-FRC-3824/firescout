var isBlueMobile = true;  //is true if the currently displayed color at the bottom is blue, false if red
var currentTeamMobile = 0;  //will be a value from 0 - 6, corrosponding to b1,b2,b3,r1,r2,r3
var currentTeamsArr = [];   //an array of all the team numbers for this match, will be more useful for getting firebase data



//poopulates matches in the selector box at the top of the page
function populateMatches(){ 
    for(i=0; i < filteredJames.length; i++){
        document.getElementById("match").insertAdjacentHTML('beforeend',"<option>Match " + filteredJames[i].match_number + "</option>");
    }
}   

function refreshData(){
    pullAllMatchScouting();
    setTimeout(generateCATTScores(),750);
    document.getElementById('refreshButton').style.display = "none";
}

//takes whichever match you have selected and populates the team numbers in the top section and makes a call to populate the bottom section with b1/blue
function displayMatchTeams(match){
    matchInt = parseInt(match);
    bTeams = filteredJames[matchInt - 1].alliances.blue.team_keys;
    var i = 0;
    bTeams.forEach(currentTeam => {
        i++;
        team = "blueTeam" + i;
        stats = "blueData" + i;
        score = 0;
        teamNumber = currentTeam;
        for (let i = 0; i < robotWorths.length; i++) { 
            if (robotWorths[i]["team"] == currentTeam) {
                score = robotWorths[i]["worth"];
            }
          }
        document.getElementById(team).innerHTML = currentTeam;
        if (score == 0){
            score = "N/a";
        }
        document.getElementById(stats).innerHTML = score;
        bTeams[currentTeam] = teamNumber
    });
    rTeams = filteredJames[matchInt - 1].alliances.red.team_keys;
    var i = 0;
    rTeams.forEach(currentTeam => {
        i++;
        team = "redTeam" + i;
        stats = "redData" + i;
        score = 0;
        teamNumber = currentTeam;
        for (let i = 0; i < robotWorths.length; i++) { 
            if (robotWorths[i]["team"] == currentTeam) {
                score = robotWorths[i]["worth"];
            }
        }
        document.getElementById(team).innerHTML = currentTeam;
        if (score == 0){
            score = "N/a";
        }
        document.getElementById(stats).innerHTML = score;
        rTeams[currentTeam] = teamNumber
    });
    currentTeamsArr = bTeams.concat(rTeams);
    for (let i=0; i<6; i++){
        currentTeamsArr[i] = currentTeamsArr[i].slice( 3);
    }
    currentTeamMobile = currentTeamsArr[0];
    updateTeamMobile();
    updateTeamDesktop();
}
//runs populateMatches upon page load
populateMatches();
function updateTeamDesktop(){
    if(currentTeamMobile == 0){
        document.getElementById("team1").innerHTML = currentTeamsArr[0];
        document.getElementById("team2").innerHTML = currentTeamsArr[1];
        document.getElementById("team3").innerHTML = currentTeamsArr[2];
    }else{
        document.getElementById("team1").innerHTML = currentTeamsArr[3];
        document.getElementById("team2").innerHTML = currentTeamsArr[4];
        document.getElementById("team3").innerHTML = currentTeamsArr[5];
    }

}

//cycles through the teams on mobile
function changeTeams(isRightArrow){
    //First checks if blue or red is currently active
    if(isBlueMobile){
        //then checks if the right or left arrow is pressed
        if(isRightArrow){
            //lastly checks if we are at the end of our array, if so then wrap us around to the start of it
            if(currentTeamMobile == currentTeamsArr[2]){
                currentTeamMobile = currentTeamsArr[0];
            }else if (currentTeamMobile ==currentTeamsArr[1]){
                currentTeamMobile = currentTeamsArr[2];
            } else {
                currentTeamMobile = currentTeamsArr[1]
            }
        }else{
            //this runs if the left arrow is pressed, therefore has to check if we are at the leftmost element in the array
            //and move us around to the end accordingly
            if(currentTeamMobile == currentTeamsArr[2]){
                currentTeamMobile = currentTeamsArr[1];
            }else if (currentTeamMobile ==currentTeamsArr[1]){
                currentTeamMobile = currentTeamsArr[0];
            } else {
                currentTeamMobile = currentTeamsArr[2]
            }
        }
    }else{
        //this code runs when trying to display red alliance information, same as above but all array numebrs are +3
        //Yes you could just have two seperate arrays for red and blue but this array of all six will become useful when pulling from firebase
        if(isRightArrow){
            //lastly checks if we are at the end of our array, if so then wrap us around to the start of it
            if(currentTeamMobile == currentTeamsArr[5]){
                currentTeamMobile = currentTeamsArr[3];
            }else if (currentTeamMobile ==currentTeamsArr[4]){
                currentTeamMobile = currentTeamsArr[5];
            } else {
                currentTeamMobile = currentTeamsArr[4]
            }
        }else{
            //this runs if the left arrow is pressed, therefore has to check if we are at the leftmost element in the array
            //and move us around to the end accordingly
            if(currentTeamMobile == currentTeamsArr[5]){
                currentTeamMobile = currentTeamsArr[4];
            }else if (currentTeamMobile ==currentTeamsArr[4]){
                currentTeamMobile = currentTeamsArr[3];
            } else {
                currentTeamMobile = currentTeamsArr[5]
            }
        }
    }
    updateTeamMobile();
}

//takes whatever our "cursor" (currentTeamMobile value) is at in the currentTeamsArr and displays it to the bottom section on mobile
function updateTeamMobile(){
    document.getElementById("teamMobile").innerHTML = currentTeamMobile;
    for (let i = 0; i < robotWorths.length; i++) { 
        if (robotWorths[i]["team"] == currentTeamMobile) {
            document.getElementById("mobile1").innerHTML = "Average Score" + robotWorths[i]["averageScore"];
            document.getElementById("mobile2").innerHTML = "Climb Percent" + robotWorths[i]["climbPercent"];
            document.getElementById("mobile3").innerHTML = "Tele Accuracy" + robotWorths[i]["teleAccuracy"];
        }
      }
    
}

//Changes all the html elements that need to ba changed from red to blue and back
function changeColor(){
    if(document.getElementById("teamColor").innerHTML == "Blue" || document.getElementById("teamColorDesktop").innerHTML == "Blue"){
        document.getElementById("teamColor").innerHTML = "Red";
        document.getElementById("teamColorDesktop").style.color = "red";
        document.getElementById("teamColorDesktop").innerHTML = "Red";
        document.getElementById("teamColor").style.color = "red";
        document.getElementById("listViewMobile").style.backgroundColor = "#ed1c2385";
        document.getElementById("listViewDesktop").style.backgroundColor = "#ed1c2385";
        //moves the "cursor" in the array of current teams up three, effectively switching to red but keeping which team you are looking at
        //ex. if you are looking at blue 2 you will be looking at red 2
        for(let i = 0; i<3; i++){
            if (currentTeamsArr[i] == currentTeamMobile){
                temp = currentTeamsArr[i+3];
                currentTeamMobile = temp;
            };
        };
        isBlueMobile = false;
        updateTeamMobile();
        updateTeamDesktop();

    }else{
        document.getElementById("teamColor").innerHTML = "Blue";
        document.getElementById("teamColor").style.color = "blue";
        document.getElementById("teamColorDesktop").innerHTML = "Blue";
        document.getElementById("teamColorDesktop").style.color = "blue";
        document.getElementById("listViewMobile").style.backgroundColor = "#0166b37c";
        document.getElementById("listViewDesktop").style.backgroundColor = "#0166b37c";
        //same as above but steps backwards in the array to go from red to blue
        for(let i = 0; i<currentTeamsArr.length; i++){
            if (currentTeamsArr[i] == currentTeamMobile){
                temp = currentTeamsArr[i-3];
                currentTeamMobile = temp;
            };
        };
        isBlueMobile = true;
        updateTeamMobile();
        updateTeamDesktop();
    }
}