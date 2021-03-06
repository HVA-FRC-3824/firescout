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

//mediaQueries.addListener(screenTest);

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
            lable.innerHTML = "Climb Percent";
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
            lable.innerHTML = "Average Score";
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
            lable.innerHTML = "Auto Accuracy";
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

function generateGraph(robotsArr){
    var currentMatchesArr = [0];
    var currentScoresArr = [0];
    var matchesArr = [];
    var scoresArr = [];
    var highestMatch = 0;
    for(var i = 3; i >= 0 ; i--){
        if(robotsArr[i] == 0){
            robotsArr.splice(i, 1);
        }
    }
    console.log(robotsArr);

    robotsArr.forEach(robot => {
        currentMatchesArr = [0];
        //console.log(currentMatchesArr);
        Object.keys(robotData[robot]).forEach(match => {
            // basically getting per match data which is something we do not do elsewhere and will not need to do elsewhere
            currentMatchesArr.push(Number(match));
            //console.log(currentMatchesArr);
            //console.log(match);
            if (Number(match) > Number(highestMatch)) {
                highestMatch = Number(match);
            }
            Object.keys(robotData[robot][match]).forEach(name => {
                //for each scouter
            });

        });
        matchesArr.push(currentMatchesArr);
    });

    //console.log(matchesArr);
    var xValues = [0];
    var currentScoresArr = [];
    //console.log(highestMatch + " Highest Match");
    for(let i = 0; i < highestMatch; i++){
        xValues.push(i+1);
        currentScoresArr.push(NaN);
    }

    robotsArr.forEach(currentRobot => {
        currentScoresArr = [];
        for(let i = 0; i < highestMatch; i++){
            currentScoresArr.push(NaN);
        }
        var currentRobotScore = 0;
        var currentRobotScouters = 0;
        console.log(currentRobot);
        Object.keys(robotData[currentRobot]).forEach(match => {
            // basically getting per match data which is something we do not do elsewhere and will not need to do elsewhere
            Object.keys(robotData[currentRobot][match]).forEach(name => {
                currentRobotScouters++;
                switch (robotData[currentRobot][match][name]['data']['levelClimbed']) {
                    case 'traversal':
                        climbPoints = 15;
                        break;
                    case 'high':
                        climbPoints = 10;
                        break;
                    case 'middle':
                        climbPoints = 6;
                        break;
                    case 'low':
                        climbPoints = 4;
                        break;
                    default:
                        climbPoints = 0;
                        break;
                    }
                    currentRobotScore = 
                    (robotData[currentRobot][match][name]['data']['autoUpperHubAmount'] * 4) + 
                    (robotData[currentRobot][match][name]['data']['autoLowerHubAmount'] * 2) +
                    (robotData[currentRobot][match][name]['data']['teleUpperHubAmount'] * 2) +
                    (robotData[currentRobot][match][name]['data']['teleLowerHubAmount']) +
                    climbPoints;
            });
            //console.log((Math.round(currentRobotScore/currentRobotScouters)));
            currentScoresArr[match] = (Math.round(currentRobotScore/currentRobotScouters));
            console.log(currentScoresArr[match]);
        });
        //console.log(scoresArr);
        scoresArr.push(currentScoresArr);
    });

    var datasets = [];

    for (var i = 0; i < 4; i++) {
        color = "rgba(" + i*10 + ",100," + i*200/1.3 + ",1)" 
        try {
            datasets.push({
                label: robotsArr[i],
                data: scoresArr[i],
                backgroundColor: "rgba(50,120,0,0.5)",
                borderColor: color,
                borderWidth: "1",
                fill: false,
                lineTension: 0.4,
                pointBackgroundColor:"rgba(0,250,0,1)",
                pointBorderColor:"rgba(255,0,255,1)",
                pointBorderWidth: 2,
                pointHitRadius: 20,
                pointHoverBackgroundColor:"rbga(0,0,0,0.5)"
            });
        } catch (e) {
            console.log(e);
        }
    }
    //console.log(scoresArr);
    //console.log(xValues);
    //console.log(datasets);
    try {
        regenChart();
    } catch (error) {
        console.log("no chart to kill");
    }
    const myChart = new Chart("graphCanvas", {
        type: "line",
        data: {
          labels: xValues,
          datasets: datasets
          },
          options:{
            spanGaps: true
          }
      });
}

function regenChart() {
    document.getElementById('graphCanvas').remove();
    document.getElementById('chartWrapper').insertAdjacentHTML('beforeend',"<canvas id='graphCanvas'></canvas>");
}

//=========================================================================HEATMAP=========================================================================

function changeHeatIMG(image){
    if(image == 'full'){
        document.getElementById("tarmacIMG").style.display = 'none';
        document.getElementById("fieldIMG").style.display = 'block';
        document.getElementById("fieldHeatMap").style.display = "block"
        document.getElementById("tarmacHeatMap").style.display = "none"
        document.getElementById("fullField").classList.add('is-selected');
        document.getElementById("tarmac").classList.remove('is-selected');
    }else{
        document.getElementById("fieldIMG").style.display = 'none';
        document.getElementById("tarmacIMG").style.display = 'block';
        document.getElementById("fieldHeatMap").style.display = "none"
        document.getElementById("tarmacHeatMap").style.display = "block"
        document.getElementById("fullField").classList.remove('is-selected');
        document.getElementById("tarmac").classList.add('is-selected');
    }
    try {
        setFieldHeatData();
        setTarmacHeatData();
    } catch (e) {
        
    }
}

var heatmapInstanceField;
var heatmapInstanceTarmac;

function generateFieldHeatmap(){
    var fieldConfig = {
        container: document.getElementById('fieldHeatMap'),
        radius: 35,
        maxOpacity: .5,
        minOpacity: 0,
        blur: .75
    };
      // create heatmap with configuration
    heatmapInstanceFieldShots = h337.create(fieldConfig);
    heatmapInstanceFieldPickup = h337.create(fieldConfig);

    //TWO HEATMAP INSTANCES CAN TARGET THE SAME ELEMENT
    //USE THIS TO DO A SEPARATE SHOTS VS PICKUPS HEATMAP FOR EXTRA SICKNESS
}

function setFieldHeatData(robot){
    heatmapInstanceFieldShots.setData({max: 100, min:0, data:[]});
    heatmapInstanceFieldPickup.setData({max: 100, min:0, data:[]});
    var autoPickupsXArr = [];
    var autoPickupsYArr = [];
    var autoShotsXArr = [];
    var autoShotsYArr = [];
    var telePickupsXArr = [];
    var telePickupsYArr = [];
    var teleShotsXArr = [];
    var teleShotsYArr = [];
    var heatData = heatmapDataMaster[robot];
    Object.keys(heatData).forEach(match => {
        Object.keys(heatData[match]).forEach(scouter => {
            autoPickupsXArr = (heatData[match][scouter]["autoPickupsX"]);
            autoPickupsYArr = (heatData[match][scouter]["autoPickupsY"]);
            autoShotsXArr = (heatData[match][scouter]["autoShotsX"]);
            autoShotsYArr = (heatData[match][scouter]["autoShotsY"]);
            telePickupsXArr = (heatData[match][scouter]["telePickupsX"]);
            telePickupsYArr = (heatData[match][scouter]["telePickupsY"]);
            teleShotsXArr = (heatData[match][scouter]["teleShotsX"]);
            teleShotsYArr = (heatData[match][scouter]["teleShotsY"]);
        });
    });

    var fieldX = document.getElementById("fieldIMG").clientWidth;
    var fieldY = document.getElementById("fieldIMG").clientHeight;

    const valueOfHeatPoints = 45;

    //for auto
    var autoPickupsDataArr = [];
    try {
        for (var i = 0; i < autoPickupsXArr.length; i++) {
            autoPickupsDataArr.push({x:(Math.round((autoPickupsXArr[i]/2068)*fieldX)),y:(Math.round((autoPickupsYArr[i]/1058)*fieldY)),value:valueOfHeatPoints});
        };    
    } catch (error) {
        console.log(error);
    }
    
    var autoShotsDataArr = [];
    try {
        for (var i = 0; i < autoShotsXArr.length; i++) {
            autoShotsDataArr.push({x:(Math.round((autoShotsXArr[i]/2068)*fieldX)),y:(Math.round((autoShotsYArr[i]/1058)*fieldY)),value:valueOfHeatPoints});
        };
    } catch (error) {
        console.log(error);
    }

    //for tele
    var telePickupsDataArr = [];
    try {
        for (var i = 0; i < telePickupsXArr.length; i++) {
            telePickupsDataArr.push({x:(Math.round((telePickupsXArr[i]/2068)*fieldX)),y:(Math.round((telePickupsYArr[i]/1058)*fieldY)),value:valueOfHeatPoints});
        };
    } catch (error) {
        console.log(error);
    }

    var teleShotsDataArr = [];
    try {
        for (var i = 0; i < teleShotsXArr.length; i++) {
            teleShotsDataArr.push({x:(Math.round((teleShotsXArr[i]/2068)*fieldX)),y:(Math.round((teleShotsYArr[i]/1058)*fieldY)),value:valueOfHeatPoints});
        };
    } catch (error) {
        console.log(error);
    }
    
    //console.log(teleShotsYArr);
    //console.log(fieldY);
    //console.log(teleShotsData);
    heatmapInstanceFieldShots.addData(teleShotsDataArr);
    heatmapInstanceFieldPickup.addData(telePickupsDataArr);
    heatmapInstanceFieldShots.addData(autoShotsDataArr);
    heatmapInstanceFieldPickup.addData(autoPickupsDataArr);
}

function updateHeatmaps(){
    heatmapInstanceField.setDataMax(200);
}

function togglePickupHeatmap(){
    if(document.getElementById("togglePickupSwitch").checked){
        document.querySelector("#fieldHeatMap").getElementsByClassName('heatmap-canvas')[1].style.display = 'block';
    }else{
        document.querySelector("#fieldHeatMap").getElementsByClassName('heatmap-canvas')[1].style.display = 'none';
    }
}

function toggleLaunchesHeatmap(){
    if(document.getElementById("toggleLaunchSwitch").checked){
        document.querySelector("#fieldHeatMap").getElementsByClassName('heatmap-canvas')[0].style.display = 'block';
    }else{
        document.querySelector("#fieldHeatMap").getElementsByClassName('heatmap-canvas')[0].style.display = 'none';
    }
}


function displayPitData(selectedRobot) {
    var robotWeight = 0;
    var robotLang = 'None';
    var driveTrain = 'None';
    var width = 0;
    var height = 0;
    var climbAbility = 'No';
    var climbTime = 0;
    var climbLevel = 'Low';
    var chamberSize = 'None';
    var intakeLevel = 'None';
    var goalLevel = 'Neither';
    var driverExp = 0;
    var scouter = 'None';
    var dataPresent = false;

    document.getElementById('pitTable').classList.remove('noData');
    document.getElementById('noData').classList.remove('noData');
    
    Object.keys(pitScoutingDataMaster).forEach(robot => {
        if (robot == selectedRobot) {
            dataPresent = true;
            Object.keys(pitScoutingDataMaster[robot]["data"]).forEach(data => {
                switch(data) {
                    case 'chamberSize':
                        chamberSize = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'climbAbility':
                        climbAbility = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'climbLevel':
                        driveTrain = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'climbTime':
                        climbTime = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'driveTrain':
                        driveTrain = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'driverExp':
                        driverExp = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'goalLevel':
                        goalLevel = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'height':
                        height = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'intakeLevel':
                        intakeLevel = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'pitScouter':
                        scouter = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'robotLang':
                        robotLang = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'robotWeight':
                        robotWeight = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'width':
                        width = pitScoutingDataMaster[robot]["data"][data];
                        break;
                    case 'imageFileType':
                        fileType = pitScoutingDataMaster[robot]["data"][data];
                        break;
                }
            })
        }
    });

    if (dataPresent == true) {
        console.log("testing display")
        document.getElementById('pitWeight').innerHTML = robotWeight + " lbs.";
        document.getElementById('pitLang').innerHTML = robotLang;
        document.getElementById('pitWidth').innerHTML = width + " in.";
        document.getElementById('pitDriveTrain').innerHTML = driveTrain;
        document.getElementById('pitHeight').innerHTML = height + " in.";
        document.getElementById('pitClimb').innerHTML = climbAbility;
        document.getElementById('pitTime').innerHTML = climbTime + " sec.";
        document.getElementById('pitClimbLevel').innerHTML = climbLevel;
        document.getElementById('pitChamber').innerHTML = chamberSize;
        document.getElementById('pitGoalLevel').innerHTML = goalLevel;
        document.getElementById('pitExpLevel').innerHTML = driverExp;
        
        pullPitImage(selectedRobot, fileType);
    } else {
        document.getElementById('pitTable').classList.add('noData');
        document.getElementById('noData').classList.add('noData');
        pullPitImage(selectedRobot, fileType);
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
        //document.getElementById("tbaTeamNum").insertAdjacentHTML('beforeend',"<option>" + sortedJames[i] + "</option>");
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

// new design //

/* function buttonClick(button) {

} */