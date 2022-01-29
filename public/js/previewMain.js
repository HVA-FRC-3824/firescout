//TODO!!!!! ++++=+= MOVE INTO THE JS PAGE ==========++++++++++++++!!!!!!!!!!// 
document.addEventListener("DOMContentLoaded", function(event) {  
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
}); 

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};

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

    //desktop team data displaying teams numbers
    var i = 0;
    bTeams.forEach(currentTeam => {
        i++;
        team = "team" + i;
        document.getElementById(team).innerHTML = currentTeam.slice(3);
        
    });
}

populateMatches();
