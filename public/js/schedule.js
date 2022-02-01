function populateMatches(){
    //console.log(filteredJames);
    for(i=0; i < filteredJames.length; i++){
        document.getElementById("match").insertAdjacentHTML('beforeend',"<option>Match " + filteredJames[i].match_number + "</option>");
    }
}
populateMatches();

function displayMatchTeams(matchNum){
    r1 = document.getElementById("redTeam1");
    r2 = document.getElementById("redTeam2");
    r3 = document.getElementById("redTeam3");
    b1 = document.getElementById("blueTeam1");
    b2 = document.getElementById("blueTeam2");
    b3 = document.getElementById("blueTeam3");
    r1.innerHTML = filteredJames[matchNum-1].alliances.red.team_keys[0].slice(3);
    r2.innerHTML = filteredJames[matchNum-1].alliances.red.team_keys[1].slice(3);
    r3.innerHTML = filteredJames[matchNum-1].alliances.red.team_keys[2].slice(3);
    b1.innerHTML = filteredJames[matchNum-1].alliances.blue.team_keys[0].slice(3);
    b2.innerHTML = filteredJames[matchNum-1].alliances.blue.team_keys[1].slice(3);
    b3.innerHTML = filteredJames[matchNum-1].alliances.blue.team_keys[2].slice(3);
}

setTimeout(() => {
    getScoutPosition();
}, 2400);
