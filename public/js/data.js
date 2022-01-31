function kidnap(newUrl) {
    James = [];
    //These variables store the data returned from the functions.
    let baseUrl = 'https://www.thebluealliance.com/api/v3'; //base TBA url
    //This ajax code requests data from The Blue Alliance
    $.ajax({
        url: baseUrl + newUrl, //This is the url we send to TBA which requests our data
        headers: {
            'X-TBA-Auth-Key': 'sXq0WfqWizhlS2WTDBoYLPFMg7EASbeuwDspHHzn9yO8zdSAGPRMO5oQDyET0G7g' //This header contains Evan Boswell's Blue Alliance authentication key, this will need to be changed for years beyond 2019/2020
        },
        method: 'GET', //This defines the method we use to pull data from Blue Alliance, in this instance we are using GET
        dataType: 'json', //This defines what format the data that is pulled from Blue Alliance will be in, in this instance we are pulling Json files
        async: false,
        success: function(data) { //this function logs our data in the console if it is successfully pulled
            James = data;
            //console.log(James);
            return James;

        },
    });
    $(document).ajaxError(function() { //this function alerts an error if the pulling the data is unsuccessful
        alert("An error occurred!");
    });

    //console.log(James);
}

filteredJames = [];
function filterMatches(){
    //console.log(James);
    James.forEach(i => {
        if(i.comp_level == 'qm'){
            filteredJames.push(i);
        }
    });
    filteredJames.forEach(j => {
        j.key = parseInt(j.key.slice(11));
    });
    filteredJames.sort((a, b) => (a.key > b.key) ? 1 : -1);
    //console.log(filteredJames);
}

sortedJames = [];
function sortTeamsList(){
    for(i=0; i < James.length; i++){
        sortedJames.push(parseInt(James[i].slice(3)));
    }   
    sortedJames.sort(function(a, b) {
        return a - b;
    });
    //console.log(sortedJames);
}

//Find what matches a certain team was in

// take filtered James in and path into the red alliance and then the blue alliance seperately 
// add each match they are in to an array, add the whole match data to the array as well as what side they are going to be on



function findTeamsMatches(teamNum){
    teamTBAData = [];
    filteredJames.forEach(match => {
        match.alliances.blue.team_keys.forEach(currentTeam => {
            if(parseInt(currentTeam.slice(3)) == teamNum){
                teamTBAData.push(match);
            }
        });
        match.alliances.red.team_keys.forEach(currentTeam => {
            if(parseInt(currentTeam.slice(3)) == teamNum){
                teamTBAData.push(match);
            }
        });
    });
    try {
        makeTeamSchedule();
    } catch (error) {
        console.log(error);
    }
}


kidnap("/event/2020scmb/teams/keys");
sortTeamsList();
kidnap("/event/2020scmb/matches");
filterMatches();