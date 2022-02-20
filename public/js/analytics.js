/*
██████   █████  ████████  █████      ██     ██ ██   ██ ███████ ███████ ██      
██   ██ ██   ██    ██    ██   ██     ██     ██ ██   ██ ██      ██      ██      
██   ██ ███████    ██    ███████     ██  █  ██ ███████ █████   █████   ██      
██   ██ ██   ██    ██    ██   ██     ██ ███ ██ ██   ██ ██      ██      ██      
██████  ██   ██    ██    ██   ██      ███ ███  ██   ██ ███████ ███████ ███████ 
*/

var currentTable = 1;
var numberOfTables = 4;
var mediaQueries = window.matchMedia('(min-width:1250px)');
var isDesktop;
if(window.innerWidth >= 1250){
    isDesktop = true;
    //console.log("is desktop");
}else{
    isDesktop = false;
    //console.log("is mobile");
}
function screenTest(e){
    if(e.matches){
        isDesktop = true;
        changeDataSlide("right");
        changeDataSlide("left");
    }else{
        isDesktop = false;
        changeDataSlide("right");
        changeDataSlide("left");
    }
}

mediaQueries.addListener(screenTest);

function changeDataSlide(leftOrRight){
    //console.log(leftOrRight);
    if(leftOrRight == "left"){
        if(currentTable == 1){
            currentTable = numberOfTables;
        }else{
            currentTable -= 1;
        }
    }else{
        if(currentTable == numberOfTables){
            currentTable = 1;
        }else{
            currentTable += 1;
        }
    }
    //console.log(currentTable);
    var tables = document.getElementsByClassName("dataTable");
    var lable = document.getElementById("head")
    switch(currentTable){
        case 1:
            lable.innerHTML = "CATT Score";
            tables[0].style.backgroundColor = "rgba(231, 231, 231, 1)";
            tables[1].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[2].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[3].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[0].style.color = "rgba(0, 0, 0, 1)";
            tables[1].style.color = "rgba(0, 0, 0, 0.7)";
            tables[2].style.color = "rgba(0, 0, 0, 0.7)";
            tables[3].style.color = "rgba(0, 0, 0, 0.7)";
            if(isDesktop){
                tables[0].style.transform = "perspective(1000px) translate3d(0vw, 0vw, 0vw)";
                tables[1].style.transform = "perspective(1000px) translate3d(-75vw, -3.5vw, -100px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-140vw, -3.5vw, -100px)";
                tables[3].style.transform = "perspective(1000px) translate3d(-172vw, -3.5vw, -100px)";
            }else{
                tables[0].style.transform = "perspective(1000px) translate3d(0vw, 0vw, 0vw)";
                tables[1].style.transform = "perspective(1000px) translate3d(-24vw, 0vw, -75px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-30vw, 0vw, -75px)";
                tables[3].style.transform = "perspective(1000px) translate3d(-40vw, 0vw, -100px)";
            }
            break;
        case 2:
            lable.innerHTML = "Auto Weighted Worth";
            tables[0].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[1].style.backgroundColor = "rgba(231, 231, 231, 1)";
            tables[2].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[3].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[0].style.color = "rgba(0, 0, 0, 0.7)";
            tables[1].style.color = "rgba(0, 0, 0, 1)";
            tables[2].style.color = "rgba(0, 0, 0, 0.7)";
            tables[3].style.color = "rgba(0, 0, 0, 0.7)";
            if(isDesktop){
                tables[0].style.transform = "perspective(1000px) translate3d(-35vw, -3.5vw, -100px)";
                tables[1].style.transform = "perspective(1000px) translate3d(-100vw, 0vw, 0vw)";
                tables[2].style.transform = "perspective(1000px) translate3d(-185vw, -3.5vw, -100px)";
                tables[3].style.transform = "perspective(1000px) translate3d(-250vw, -3.5vw, -100px)";
            }else{
                tables[0].style.transform = "perspective(1000px) translate3d(-83vw, 0vw, -75px)";
                tables[1].style.transform = "perspective(1000px) translate3d(-100vw, 0vw, 0vw)";
                tables[2].style.transform = "perspective(1000px) translate3d(-132vw, 0vw, -75px)";
                tables[3].style.transform = "perspective(1000px) translate3d(-140vw, 0vw, -75px)";
            }
            break;
        case 3:
            lable.innerHTML = "Tele Weighted Worth";
            tables[0].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[1].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[2].style.backgroundColor = "rgba(231, 231, 231, 1)";
            tables[3].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[0].style.color = "rgba(0, 0, 0, 0.7)";
            tables[1].style.color = "rgba(0, 0, 0, 0.7)";
            tables[2].style.color = "rgba(0, 0, 0, 1)";
            tables[3].style.color = "rgba(0, 0, 0, 0.7)";
            if(isDesktop){
                tables[0].style.transform = "perspective(1000px) translate3d(-80vw, -3.5vw, -100px)";
                tables[1].style.transform = "perspective(1000px) translate3d(-145vw, -3.5vw, -100px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-200vw, 0vw, 0vw)";
                tables[3].style.transform = "perspective(1000px) translate3d(-295vw, -3.5vw, -100px)";
            }else{
                tables[0].style.transform = "perspective(1000px) translate3d(-200vw, 0vw, -75px)";
                tables[1].style.transform = "perspective(1000px) translate3d(-191vw, 0vw, -75px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-200vw, 0vw, 0vw)";
                tables[3].style.transform = "perspective(1000px) translate3d(-239vw, 0vw, -75px)";
            }
            break;
        case 4:
            lable.innerHTML = "Climb Weighted Worth";
            tables[0].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[1].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[2].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[3].style.backgroundColor = "rgba(231, 231, 231, 1)";
            tables[0].style.color = "rgba(0, 0, 0, 0.7)";
            tables[1].style.color = "rgba(0, 0, 0, 0.7)";
            tables[2].style.color = "rgba(0, 0, 0, 0.7)";
            tables[3].style.color = "rgba(0, 0, 0, 1)";
            if(isDesktop){
                tables[0].style.transform = "perspective(1000px) translate3d(-150vw, -3.5vw, -100px)";
                tables[1].style.transform = "perspective(1000px) translate3d(-190vw, -3.5vw, -100px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-255.2vw, -3.5vw, -100px)";
                tables[3].style.transform = "perspective(1000px) translate3d(-300vw, 0vw, 0px)";
            }else{
                tables[0].style.transform = "perspective(1000px) translate3d(-200vw, 0vw, -75px)";
                tables[1].style.transform = "perspective(1000px) translate3d(-250vw, 0vw, -75px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-299vw, 0vw, -75px)";
                tables[3].style.transform = "perspective(1000px) translate3d(-300vw, 0vw, 0vw)";
            }
            break;
        default:
            console.log("something went wrong");
    }
}
window.changeDataSlide = changeDataSlide;


/*
 ██████  ██████   █████  ██████  ██   ██ 
██       ██   ██ ██   ██ ██   ██ ██   ██ 
██   ███ ██████  ███████ ██████  ███████ 
██    ██ ██   ██ ██   ██ ██      ██   ██ 
 ██████  ██   ██ ██   ██ ██      ██   ██ 
 */

var xValues = [1,5,12,13,16,19,40,46,50,52,56];
var yValues = [7,8,12,15,23,20,19,22];
var yValues2 = [20,23,29,25,28];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        label: "auto Accuracy",
        data: yValues,
        backgroundColor: "rgba(50,120,0,0.5)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: "1",
        fill: false,
        lineTension: 0.4,
        pointBackgroundColor:"rgba(0,250,0,1)",
        pointBorderColor:"rgba(255,0,255,1)",
        pointBorderWidth: 2,
        pointHitRadius: 20,
        pointHoverBackgroundColor:"rbga(0,0,0,0.5)"
    },{
        label: "tele Accuracy",
        data: yValues2,
        backgroundColor: "rgba(50,120,0,0.5)",
        borderColor: "rgba(255,0,0,1)",
        borderWidth: "1",
        fill: false,
        lineTension: 0.4,
        pointBackgroundColor:"rgba(0,250,0,1)",
        pointBorderColor:"rgba(255,0,255,1)",
        pointBorderWidth: 2,
        pointHitRadius: 20,
        pointHoverBackgroundColor:"rbga(0,0,0,0.5)"
    }]
    },
    options:{

    }
});

var graphTeamsNum = 1;

function addTeam(){
    if(graphTeamsNum < 3){
        graphTeamsNum += 1;
        document.getElementById("selectors").insertAdjacentHTML('beforeend',"<select class='teamSelect' id='selector" + graphTeamsNum +"'><option>3824</option><option>279</option><option>254</option><option>4020</option></select>");
    }
}

function removeTeam(){
    if(graphTeamsNum > 1){
        document.getElementById("selector" + graphTeamsNum).remove();
        graphTeamsNum -= 1;    
    }
}

/*
████████ ██████   █████  
   ██    ██   ██ ██   ██ 
   ██    ██████  ███████ 
   ██    ██   ██ ██   ██ 
   ██    ██████  ██   ██
*/

function populateTeams(){
    //console.log(sortedJames);
    for(i=0; i < sortedJames.length; i++){
        //console.log(sortedJames[i]);
        document.getElementById("teamNum").insertAdjacentHTML('beforeend',"<option>" + sortedJames[i] + "</option>");
        document.getElementById("tbaTeamNum").insertAdjacentHTML('beforeend',"<option>" + sortedJames[i] + "</option>");
    }
}

populateTeams();

function makeTeamSchedule(){
    document.getElementById("teamSchedule").remove();
    //console.log("removed");
    document.getElementById("outterTableSchedule").insertAdjacentHTML('beforeend',"<tbody id='teamSchedule'></tbody>");
    teamTBAData.forEach(match => {
        //Creates the table of the matches the team is in
        document.getElementById("teamSchedule").insertAdjacentHTML('beforeend',"<tr><td>" + match.match_number + ":</td><td id='red'>" + match.alliances.red.team_keys[0].slice(3) + "</td>" + " <td id='red'>" + match.alliances.red.team_keys[1].slice(3) + " </td><td id='red'>" + match.alliances.red.team_keys[2].slice(3) + " </td><td>vs.</td><td id='blue'>" + match.alliances.blue.team_keys[0].slice(3) + "</td>" + " <td id='blue'>" + match.alliances.blue.team_keys[1].slice(3) + " </td><td id='blue'>" + match.alliances.blue.team_keys[2].slice(3) + " </td></tr>");
    });
}
