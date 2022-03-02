//
//
//
//
//
//
//
//===========================================================================================================================
// ALL FUNCTIONS THAT REFERENCE ANY FIREBASE SYSTEM WILL BE PLACED HERE, COMMENT YOUR CODE WELL
//===========================================================================================================================
//
//
//
//
//
//
//
//
//
// https://firebase.google.com/docs/web/setup#available-libraries

/*
██ ███    ██ ██ ████████ ██  █████  ██          ███████ ███████ ████████ ██    ██ ██████  
██ ████   ██ ██    ██    ██ ██   ██ ██          ██      ██         ██    ██    ██ ██   ██ 
██ ██ ██  ██ ██    ██    ██ ███████ ██          ███████ █████      ██    ██    ██ ██████  
██ ██  ██ ██ ██    ██    ██ ██   ██ ██               ██ ██         ██    ██    ██ ██      
██ ██   ████ ██    ██    ██ ██   ██ ███████     ███████ ███████    ██     ██████  ██    
*/ 

const firebaseConfig = {
  apiKey: "AIzaSyAkfcVtNcyDlW0yiTH2i5rYdmBJ_z1O57M",
  authDomain: "firescout3824.firebaseapp.com",
  databaseURL: "https://firescout3824-default-rtdb.firebaseio.com",
  projectId: "firescout3824",
  storageBucket: "firescout3824.appspot.com",
  messagingSenderId: "246498824596",
  appId: "1:246498824596:web:efc2c0cbc94999559d3f81",
  measurementId: "G-7SBQ64VMNP"
};

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyAkfcVtNcyDlW0yiTH2i5rYdmBJ_z1O57M",
    authDomain: "firescout3824.firebaseapp.com",
    databaseURL: "https://firescout3824-default-rtdb.firebaseio.com",
    projectId: "firescout3824",
    storageBucket: "firescout3824.appspot.com",
    messagingSenderId: "246498824596",
    appId: "1:246498824596:web:efc2c0cbc94999559d3f81",
    measurementId: "G-7SBQ64VMNP"
};
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();
var auth = firebase.auth();
var storage = firebase.storage();
var analytics = firebase.analytics();

/*
 █████  ██    ██ ████████ ██   ██ 
██   ██ ██    ██    ██    ██   ██ 
███████ ██    ██    ██    ███████ 
██   ██ ██    ██    ██    ██   ██ 
██   ██  ██████     ██    ██   ██ 
*/
try {
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  ui.start('#firebaseui-auth-container', {
    signInOptions: {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      requireDisplayName: true
    },
    // Other config options...
  });
} catch (error) {
  console.log(error);
}

try {
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        writeData("Users/" + firebase.auth().currentUser.uid + "/displayName/", firebase.auth().currentUser.displayName);
        writeData("Users/" + firebase.auth().currentUser.uid + "/scoutPosition/", "none");
        setTimeout(() => {
          location.href = "https://scoutinfrc.com";
        }, 2300);
        return false;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'https://firescout3824.web.app/index',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      //firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'https://firescout3824.web.app/analytics.html',
    // Privacy policy url.
    privacyPolicyUrl: 'https://firescout3824.web.app/analytics.html'
  };
} catch (error) {
  console.log(error);
}

try {
  ui.start('#firebaseui-auth-container', uiConfig);
} catch (error) {
  
}

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

setTimeout(function(){
  try{
    var currUser = firebase.auth().currentUser;
    console.log(currUser.displayName);
    var tempStringVar = firebase.auth().currentUser.displayName;

    var currUserCondensed = "";

    if (tempStringVar.includes(" ")) {
      var displayNameArray = tempStringVar.split(' ');
      currUserCondensed = displayNameArray[0];
    } else {
      currUserCondensed = tempStringVar;
    }
    document.getElementById("loginButton").innerHTML = "<i id='lilGuy' class='fas fa-user'></i> " + currUserCondensed;
    localStorage.setItem("username", currUser.displayName);
    if(currUser.uid == 'qnlTm8LSbocnF57XDjqB6qxy7hJ2' || currUser.uid == 'ch2dqF6ZG6V6YgZoR21hzejsUC22' || currUser.uid == '7pIHSSKUgyRqXVz6MCbUMathVps1' || currUser.uid == 'nr5UJLwQoNPahFLeMkdwVnpfTD63' || currUser.uid == 'vCQoJYBplYf5viQqgcVtTYWbPnp2'){
      try{
        document.getElementById('lilGuy').style.color = "red";
      }catch(e){
        console.log(e);
      }
      try{
        document.getElementById('blur').id = '';
        document.getElementById('loginWarning').style.display = "none";
      }catch(e){
        console.log(e);
      }
      try {
        document.getElementById('pullMasterButton').style.display = "inline-block";
      } catch (e) {
        console.log(e);
      }
      try{
        document.getElementById('navMenu').insertAdjacentHTML('beforeend', "<a href='./admin.html'>Admin Panel</a>");
        document.getElementById('navMenuMobile').insertAdjacentHTML('beforeend', "<a href='./admin.html'>Admin Panel</a>");
      }catch(e){
        console.log(e);
      }
      try{
        if(document.getElementById('adminBody') != null){
          document.getElementById('toHide').style.display = "block";
          document.getElementById('loadingText').innerHTML = "Firebase SDK loaded, panel ready for use"
        }
      }catch(e){

      }

    }else{
      if(document.getElementById('adminBody') != null){
        location.href('index.html');
      }
    }
  }catch(e){
    console.log(e);
    if(document.getElementById('adminBody') != null){
      location.href('index.html');
    }
  }
}, 2400)

function doNothing(){
  console.log("already logged in");
}

/*
██████   █████  ████████  █████  ██████   █████  ███████ ███████ 
██   ██ ██   ██    ██    ██   ██ ██   ██ ██   ██ ██      ██      
██   ██ ███████    ██    ███████ ██████  ███████ ███████ █████   
██   ██ ██   ██    ██    ██   ██ ██   ██ ██   ██      ██ ██      
██████  ██   ██    ██    ██   ██ ██████  ██   ██ ███████ ███████ 
*/

const db = database;

//Writes data to a path
function writeData(path, data) {
  firebase.database().ref(path).set({
    data: data
  });
}

//Reads data from a path
var dataRead; // THIS IS THE GLOBAL VARIABLE THAT STORES THE MOST RECENTLY READ DATA
              //IF YOU ARE PULLING DATA MULTIPLE TIMES QUICKLY AND THIS SOLUTION ISN'T WORKING THEN DON'T PULL THE DATA IN MULTIPLE PULLS
              // 🤠
              //YOU DONT HAVE TO USE THIS FUNCTION TO PULL DATA BUT THIS IS A GOOD OUTLINE
              //ARE THESE COMMNENTS HELPING ANYONE
              // :)
function readData(path){
  dataRead = "";
  return firebase.database().ref(path).once('value').then((snapshot) => {
    console.log(snapshot.val());
    dataRead = snapshot.val();
    //ignore this if statement if you are copy pasting this funtion to read firebase data, this if is just for reading users data
    //TODO stop using readData and just write the firebase.ref whenever you want to get data
    if(path == "Users"){ 
      usersObject = snapshot.val();
    }
  });
}

//Constantly reads data as it updates
try {
  var score = firebase.database().ref('test/name');
  score.on('value', (snapshot) => {
    const data = snapshot.val();
    //console.log(data);
  });
} catch (e) {
  console.log(e);
}

/*
███    ███  █████  ████████  ██████ ██   ██     ██████  ██████  ███████ ██    ██ ██ ███████ ██     ██ 
████  ████ ██   ██    ██    ██      ██   ██     ██   ██ ██   ██ ██      ██    ██ ██ ██      ██     ██ 
██ ████ ██ ███████    ██    ██      ███████     ██████  ██████  █████   ██    ██ ██ █████   ██  █  ██ 
██  ██  ██ ██   ██    ██    ██      ██   ██     ██      ██   ██ ██       ██  ██  ██ ██      ██ ███ ██ 
██      ██ ██   ██    ██     ██████ ██   ██     ██      ██   ██ ███████   ████   ██ ███████  ███ ███  
*/

var allTeamInfo;

function getAllTeamInfo(){
  return firebase.database().ref('matchScouting').once('value').then((snapshot) => {
    console.log(snapshot.val());
    allTeamInfo = snapshot.val();
  });
}

/*
███    ███  █████  ████████  ██████ ██   ██     ███████  ██████  ██████  ██    ██ ████████ ██ ███    ██  ██████  
████  ████ ██   ██    ██    ██      ██   ██     ██      ██      ██    ██ ██    ██    ██    ██ ████   ██ ██       
██ ████ ██ ███████    ██    ██      ███████     ███████ ██      ██    ██ ██    ██    ██    ██ ██ ██  ██ ██   ███ 
██  ██  ██ ██   ██    ██    ██      ██   ██          ██ ██      ██    ██ ██    ██    ██    ██ ██  ██ ██ ██    ██ 
██      ██ ██   ██    ██     ██████ ██   ██     ███████  ██████  ██████   ██████     ██    ██ ██   ████  ██████  
*/
//AND THE SCHEDULE PAGE

function getScoutPosition(){
  scoutPosition = readData("Users/" + firebase.auth().currentUser.uid + "/scoutPosition/data");
  setTimeout(() => {
    console.log(dataRead);
    document.getElementById(dataRead).style.fontWeight = "bold";
  }, 1000);
}

function pushDataDictionary(robotToScout, mNum, scoutName){
  firebase.database().ref('matchScouting/' + robotToScout + "/" + mNum + "/" + scoutName).set({
    "data": dataDictionary
  });
  pushHeatArr(robotToScout, mNum, scoutName);
}

function pushHeatArr(robotToScout, mNum, scoutName){
  firebase.database().ref('heatmap/' + robotToScout + "/" + mNum + "/" + scoutName).set({
    "autoShotsX": autoShotsArrX,
    "autoShotsY": autoShotsArrY,
    "teleShotsX": teleShotsArrX,
    "teleShotsY": teleShotsArrY,
    "autoPickupsX": autoPickupArrX,
    "autoPickupsY": autoPickupArrY,
    "telePickupsX": telePickupArrX,
    "telePickupsY": telePickupArrY
  });
}

/*
██████  ██ ████████     ███████  ██████  ██████  ██    ██ ████████ ██ ███    ██  ██████  
██   ██ ██    ██        ██      ██      ██    ██ ██    ██    ██    ██ ████   ██ ██       
██████  ██    ██        ███████ ██      ██    ██ ██    ██    ██    ██ ██ ██  ██ ██   ███ 
██      ██    ██             ██ ██      ██    ██ ██    ██    ██    ██ ██  ██ ██ ██    ██ 
██      ██    ██        ███████  ██████  ██████   ██████     ██    ██ ██   ████  ██████ 
*/

function pushPitDictionary(teamNumber){
  firebase.database().ref('pitScouting/' + teamNumber).set({
    "data": pitDictionary
  });
}

function pushPitImage(image, fileType) {
  // Create a root reference
  var storageRef = firebase.storage().ref();

  var metadata = {
    contentType: "image/" + fileType,
  };

  // Create a reference to 'robot-images/[name of image file]'
  var robotImagesRef = storageRef.child('robot-images/' + image["name"]);

  robotImagesRef.put(image, metadata).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
}

/*
 █████  ███    ██  █████  ██      ██    ██ ████████ ██  ██████ ███████ 
██   ██ ████   ██ ██   ██ ██       ██  ██     ██    ██ ██      ██      
███████ ██ ██  ██ ███████ ██        ████      ██    ██ ██      ███████ 
██   ██ ██  ██ ██ ██   ██ ██         ██       ██    ██ ██           ██ 
██   ██ ██   ████ ██   ██ ███████    ██       ██    ██  ██████ ███████                                                                      
*/

var robotData;

function pullAllMatchScouting() {
  try{
    document.getElementById('pullMasterButton').style.display = "none";
  }catch(e){
    console.log(e);
  }
  console.log("pullingrobodata");
  return firebase.database().ref('matchScouting').once('value').then((snapshot) => {
    console.log(snapshot.val());
    robotData = snapshot.val();
  });
}

var robotWorths = [{team:9999, worth:0}];

function generateCATTScores(){ //TODO rename this function everywhere so it is more general, it now generates the big useful array
  //console.log(robotData);
  
  //variables to reset when recalculating he data wheel information
  var highestAutoShotsMadeAvg = 0;
  var highestTeleShotsMadeAvg = 0;
  var highestAutoPointsAvg = 0;
  var highestTelePointsAvg = 0;
  var highestClimbPointsAvg = 0;


  /* Change values of w to change the importance of each data
  d max is the maximum value for that stat, so for any accuracy stat the max is 100, for something like shots taken
  the value would be the highest number of shots taken by any robot in our data
  robotWorth = (w1 * (d1/d1max)) + (w2 * (d2/d2max)) + (w3 * (d3/d3max)) ... + (wn * (dn/dnmax));*/ 
  //!The general formula!


  /* ======================= Finding the maximum values for all of the stats we want ======================= */

  Object.keys(robotData).forEach(robot => {
    var currentMatches = 0;
    var currentAutoShotsMade = 0;
    var currentTeleShotsMade = 0;
    var currentTelePointsTotal = 0;
    var currentAutoPointsTotal = 0;
    var currentClimbPointsTotal = 0;
    Object.keys(robotData[robot]).forEach(match => {
      currentMatches++;
      Object.keys(robotData[robot][match]).forEach(scouter => {
        currentDataDict = robotData[robot][match][scouter]['data'];
        currentAutoShotsMade += (currentDataDict['autoUpperHubAmount'] + currentDataDict['autoLowerHubAmount']);
        currentTeleShotsMade += (currentDataDict['teleUpperHubAmount'] + currentDataDict['teleLowerHubAmount']);
        currentAutoPointsTotal += ((currentDataDict['autoUpperHubAmount'] * 4) + (currentDataDict['autoLowerHubAmount'] * 2));
        currentTelePointsTotal += ((currentDataDict['teleUpperHubAmount'] * 2) + (currentDataDict['teleLowerHubAmount'] * 1));
        switch (currentDataDict['levelClimbed']) {
          case 'low':
            currentClimbPointsTotal += 4;
            break;
          case 'middle':
            currentClimbPointsTotal += 6;
            break;
          case 'high':
            currentClimbPointsTotal += 10;
            break;
          case 'traversal':
            currentClimbPointsTotal += 15;
            break;
          default:
            break;
        }
      });
    });
    if((currentAutoShotsMade/currentMatches) > highestAutoShotsMadeAvg){
      highestAutoShotsMadeAvg = (currentAutoShotsMade/currentMatches);
    }
    if((currentTeleShotsMade/currentMatches) > highestTeleShotsMadeAvg){
      highestTeleShotsMadeAvg = (currentTeleShotsMade/currentMatches);
    }
    if((currentAutoPointsTotal/currentMatches) > highestAutoPointsAvg){
      highestAutoPointsAvg = (currentAutoPointsTotal/currentMatches);
    }
    if((currentTelePointsTotal/currentMatches) > highestTelePointsAvg){
      highestTelePointsAvg = (currentTelePointsTotal/currentMatches);
    }
    if((currentClimbPointsTotal/currentMatches) > highestClimbPointsAvg){
      highestClimbPointsAvg = (currentClimbPointsTotal/currentMatches);
    }
  });



  Object.keys(robotData).forEach(robot => {
    /* Operates on every robot before running through all of that robot's data */
    var currentRobotMatches = 0,
        currentRobotClimbs = 0,
        currentRobotClimbPointsTotal = 0;
    var currentRobotAutoShotsMade = 0,
        currentRobotAutoMisses = 0,
        currentRobotAutoPointsTotal = 0;
    var currentRobotTeleShotsMade = 0,
        currentRobotTeleMisses = 0,
        currentRobotTelePointsTotal = 0;
    var currentRobotTarmacLeaves = 0;
    
    Object.keys(robotData[robot]).forEach(match => {
      /* Operates on every match that current robot played in before running through the data itself */
      currentRobotMatches++;
      Object.keys(robotData[robot][match]).forEach(scouter => {
        /* Operates on every scouter for the current match, this is where you can operate on the data */
        currentDataDict = robotData[robot][match][scouter]['data'];

        switch (currentDataDict['levelClimbed']) {
          case 'low':
            currentRobotClimbs++;
            currentRobotClimbPointsTotal += 4;
            break;
          case 'middle':
            currentRobotClimbs++;
            currentRobotClimbPointsTotal += 6;
            break;
          case 'high':
            currentRobotClimbs++;
            currentRobotClimbPointsTotal += 10;
            break;
          case 'traversal':
            currentRobotClimbs++;
            currentRobotClimbPointsTotal += 15;
            break;
          default:
            break;
        }

        currentRobotAutoShotsMade += currentDataDict['autoUpperHubAmount'] + currentDataDict['autoLowerHubAmount'];
        currentRobotTeleShotsMade += currentDataDict['teleUpperHubAmount'] + currentDataDict['teleLowerHubAmount'];
        currentRobotAutoMisses += currentDataDict['autoShotsMissed'];
        currentRobotTeleMisses += currentDataDict['teleShotsMissed'];
        currentRobotAutoPointsTotal += ((currentDataDict['autoUpperHubAmount'] * 4) + (currentDataDict['autoLowerHubAmount'] * 2));
        currentRobotTelePointsTotal += ((currentDataDict['teleUpperHubAmount'] * 2) + (currentDataDict['teleLowerHubAmount'] * 1));

        if(currentDataDict['movedOffTarmac']){
          currentRobotTarmacLeaves++;
        }

      });
      /* Operates on every match after running through the data for that match */

    });
    /* Operates on every robot after running through all of that robot's data */

    /* Values to change for importance of stat towards robot worth, must add up to 1.00*/
    var 
    climbPercentW = 0.041138,
    teleAccuracyW = 0.061119,
    autoAccuracyW = 0.049365,
    teleShotsMadeW = 0.155148,
    autoShotsMadeW = 0.171603,
    telePointsAvgW = 0.211566,
    autoPointsAvgW = 0.117536,
    tarmacPercentW = 0.01622,
    climbPointsAvgW = 0.176305;

    cattScore = 
      (climbPercentW * (currentRobotClimbs/currentRobotMatches)) + 
      (teleAccuracyW * (currentRobotTeleShotsMade/(currentRobotTeleShotsMade + currentRobotTeleMisses))) + 
      (autoAccuracyW * (currentRobotAutoShotsMade/(currentRobotAutoShotsMade + currentRobotAutoMisses))) + 
      (teleShotsMadeW * ((currentRobotTeleShotsMade/currentRobotMatches)/highestTeleShotsMadeAvg)) + 
      (autoShotsMadeW * ((currentRobotAutoShotsMade/currentRobotMatches)/highestAutoShotsMadeAvg)) + 
      (telePointsAvgW * ((currentRobotTelePointsTotal/currentRobotMatches)/highestTelePointsAvg)) + 
      (autoPointsAvgW * ((currentRobotAutoPointsTotal/currentRobotMatches)/highestAutoPointsAvg)) + 
      (tarmacPercentW * (currentRobotTarmacLeaves/currentRobotMatches)) + 
      (climbPointsAvgW * ((currentRobotClimbPointsTotal/currentRobotMatches)/highestClimbPointsAvg));

    cattScore = Math.round(cattScore * 100);
    /*
     █████  ██████  ██████  ███████ ███    ██ ██████      ███    ███  █████  ███████ ████████ ███████ ██████       █████  ██████  ██████   █████  ██    ██ 
    ██   ██ ██   ██ ██   ██ ██      ████   ██ ██   ██     ████  ████ ██   ██ ██         ██    ██      ██   ██     ██   ██ ██   ██ ██   ██ ██   ██  ██  ██  
    ███████ ██████  ██████  █████   ██ ██  ██ ██   ██     ██ ████ ██ ███████ ███████    ██    █████   ██████      ███████ ██████  ██████  ███████   ████   
    ██   ██ ██      ██      ██      ██  ██ ██ ██   ██     ██  ██  ██ ██   ██      ██    ██    ██      ██   ██     ██   ██ ██   ██ ██   ██ ██   ██    ██    
    ██   ██ ██      ██      ███████ ██   ████ ██████      ██      ██ ██   ██ ███████    ██    ███████ ██   ██     ██   ██ ██   ██ ██   ██ ██   ██    ██    
    */                                                                                                                                      
    robotWorths.push({team:robot, worth:cattScore, averageScore:(currentRobotTelePointsTotal + currentRobotAutoPointsTotal)/currentRobotMatches, climbPercent:currentRobotClimbs/currentRobotMatches, teleAccuracy:currentRobotTeleShotsMade/(currentRobotTeleShotsMade + currentRobotTeleMisses),autoAccuracy:currentRobotAutoShotsMade/(currentRobotAutoShotsMade+currentRobotAutoMisses),avgClimbPoints:(currentRobotClimbPointsTotal/currentRobotMatches)});
  });
  /* Runs after running through all data for All robots */
  //console.log(robotWorths)

  //Sorts the robotWorths by the worth
  robotWorths = robotWorths.sort((a, b) => (a.worth > b.worth) ? 1 : -1); //TODO THIS SORT FUNCTION DOES NOT HANDLE TIES
  robotWorths = robotWorths.reverse();

  console.log(robotWorths);
}

function generateAllTheThings(){
  generateCATTScores();
  setTimeout(() => {
    generateFieldHeatmap();
  }, 250);
}

function displayAllTheThings(){
  selectedTeam = document.getElementById('teamNum').value;
  displayPitData(selectedTeam);
  displayQuickLook(selectedTeam); 
  setFieldHeatData(selectedTeam);
  displayQuickLook(selectedTeam);
}

function displayDataWheel() {
  document.getElementById("table1").querySelector("#t1").innerHTML = robotWorths[0].team;
  document.getElementById("table1").querySelector("#d1").innerHTML = robotWorths[0].worth;
  document.getElementById("table1").querySelector("#t2").innerHTML = robotWorths[1].team;
  document.getElementById("table1").querySelector("#d2").innerHTML = robotWorths[1].worth;
  document.getElementById("table1").querySelector("#t3").innerHTML = robotWorths[2].team;
  document.getElementById("table1").querySelector("#d3").innerHTML = robotWorths[2].worth;
  document.getElementById("table1").querySelector("#t4").innerHTML = robotWorths[3].team;
  document.getElementById("table1").querySelector("#d4").innerHTML = robotWorths[3].worth;
  document.getElementById("table1").querySelector("#t5").innerHTML = robotWorths[4].team;
  document.getElementById("table1").querySelector("#d5").innerHTML = robotWorths[4].worth;
  document.getElementById("table1").querySelector("#t6").innerHTML = robotWorths[5].team;
  document.getElementById("table1").querySelector("#d6").innerHTML = robotWorths[5].worth;
}
//=========================================================================DISPLAYS THE DATA TO THE quick look DATA INFO BOX//=========================================================================

function displayQuickLook(robot){ 
  
  //Generates the data for quick look
  robotWorths.forEach(currRobot => {
      if (currRobot["team"] == robot) {
          cattScore = currRobot["worth"];
      }
  });
  
  robotInfoIndex = robotWorths.findIndex(x => x.team == robot);
  robotInfo = robotWorths[robotInfoIndex];

  try {
    document.getElementById("quickCATTScore").innerHTML = robotInfo['worth'];
    document.getElementById("quickClimbPercent").innerHTML = Math.round(robotInfo['climbPercent']);
    document.getElementById("quickAvgScore").innerHTML = Math.round(robotInfo['averageScore']);
    document.getElementById("quickTeleAcc").innerHTML = Math.round(robotInfo['teleAccuracy']);
    document.getElementById("quickAutoAcc").innerHTML = Math.round(robotInfo['autoAccuracy']);
  } catch (error) {
    document.getElementById("quickCATTScore").innerHTML = "NO DATA";
    document.getElementById("quickClimbPercent").innerHTML = "NO DATA";
    document.getElementById("quickAvgScore").innerHTML = "NO DATA";
    document.getElementById("quickTeleAcc").innerHTML = "NO DATA";
    document.getElementById("quickAutoAcc").innerHTML = "NO DATA";
  }
  
}

function displayRawData(robot){
  var matchesPlayed = 0;
  var totalSuccessfulClimbs = 0;
  var failedClimbs = 0;
  var highScore = 0;
  var autoMisses = 0;
  var teleMisses = 0;
  var autoUpperHubShots = 0;
  var autoLowerHubShots = 0;
  var teleUpperHubShots = 0;
  var teleLowerHubShots = 0;
  
  Object.keys(robotData[robot]).forEach(match => {
    //Updates the matches they have played
    matchesPlayed++;
    Object.keys(robotData[robot][match]).forEach(name => {
      //Tallys the total amount of successful climbs
      if(robotData[robot][match][name]['data']['levelClimbed'] != 'none' && robotData[robot][match][name]['data']['levelClimbed'] != 'fail'){
        totalSuccessfulClimbs++;
      }
      //Tallys the total failed climbs
      if(robotData[robot][match][name]['data']['levelClimbed'] == 'fail'){
        failedClimbs++;
      }

      //Calculates the highest scoring match for this robot
      var climbPoints = 0;
      switch (robotData[robot][match][name]['data']['levelClimbed']) {
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

      var currentRobotScore = 
      (robotData[robot][match][name]['data']['autoUpperHubAmount'] * 4) + 
      (robotData[robot][match][name]['data']['autoLowerHubAmount'] * 2) +
      (robotData[robot][match][name]['data']['teleUpperHubAmount'] * 2) +
      (robotData[robot][match][name]['data']['teleLowerHubAmount']) +
      climbPoints;

      if(currentRobotScore > highScore){
        highScore = currentRobotScore;
      }

      //adds up the misses for tele and auto
      autoMisses += robotData[robot][match][name]['data']['autoShotsMissed']
      teleMisses += robotData[robot][match][name]['data']['teleShotsMissed']
      //Calculates total amount of shots
      autoUpperHubShots += robotData[robot][match][name]['data']['autoUpperHubAmount'];
      autoLowerHubShots += robotData[robot][match][name]['data']['autoLowerHubAmount'];
      teleUpperHubShots += robotData[robot][match][name]['data']['teleUpperHubAmount'];
      teleLowerHubShots += robotData[robot][match][name]['data']['teleLowerHubAmount'];
    });
  });

  document.getElementById("matchesPlayed").innerHTML = "Matches Played: " + matchesPlayed;
  document.getElementById("totalSuccessfulClimbs").innerHTML = "Successful Climbs: " + totalSuccessfulClimbs;
  document.getElementById("failedClimbs").innerHTML = "Failed Climbs: " + failedClimbs;
  document.getElementById("highScore").innerHTML = "Highest Scoring Match: " + highScore;
  document.getElementById("teleMisses").innerHTML = "Tele Misses: " + teleMisses;
  document.getElementById("autoMisses").innerHTML = "Auto Misses: " + autoMisses;
  document.getElementById("teleShotsTaken").innerHTML = "Tele Shots Taken: " + (teleUpperHubShots + teleLowerHubShots);
  document.getElementById("autoShotsTaken").innerHTML = "Auto Shots Taken: " + (autoUpperHubShots + autoLowerHubShots);
}


//========================================HEATMAP========================================//

var heatmapDataMaster;
function getHeatData(){
  var path = "heatmap";
  return firebase.database().ref(path).once('value').then((snapshot) => {
    console.log(snapshot.val());
    heatmapDataMaster = snapshot.val();
  });
}

//========================================PIT SCOUTING===================================//

var pitScoutingDataMaster;

function getPitData(){
  var path = "pitScouting";
  return firebase.database().ref(path).once('value').then((snapshot) => {
    console.log(snapshot.val());
    pitScoutingDataMaster = snapshot.val();
  });
}

var botImage;

function pullPitImage(robotNum, fileType) {
  var path = 'robot-images/' + robotNum + '.' + fileType;

  firebase.storage().ref().child(path).getDownloadURL().then((url) => {
    document.getElementById('noPitImageText').style.display = "none";
    document.getElementById('pitImageViewer').style.backgroundImage = "url(\"" + url + "\")";
  }) .catch((error) => {
    /* alert("Error: " + error.message); */
    document.getElementById('pitImageViewer').style.backgroundImage = "";
    document.getElementById('noPitImageText').style.display = "block";
  });
}

/*
 █████  ██████  ███    ███ ██ ███    ██     ██████   █████  ███    ██ ███████ ██      
██   ██ ██   ██ ████  ████ ██ ████   ██     ██   ██ ██   ██ ████   ██ ██      ██      
███████ ██   ██ ██ ████ ██ ██ ██ ██  ██     ██████  ███████ ██ ██  ██ █████   ██      
██   ██ ██   ██ ██  ██  ██ ██ ██  ██ ██     ██      ██   ██ ██  ██ ██ ██      ██      
██   ██ ██████  ██      ██ ██ ██   ████     ██      ██   ██ ██   ████ ███████ ███████
*/

function sendData(){
  setUserScoutPosition(firebase.auth().currentUser.uid, "redTeam1");
}

function setUserScoutPosition(user, position){
  writeData("Users/" + user + "/scoutPosition", position);
}




// ============================Initialize Firebase Storage=========================== //
/*
const storageRef = ref(getStorage());
const fileInput = document.getElementById('input');

var files = [];
var reader = new FileReader();

var namebox = document.getElementById('namebox');
var extlab = document.getElementById('extlab');
var myimg = document.getElementById('myimg');
var proglab = document.getElementById('upprogress');
var SelBtn = document.getElementById('selBtn');

var input = document.createElement('input');
input.type = 'file';

input.onchange = e => {
  files = e.target.files;
  var extension = GetExtName(files[0]);
  var name = GetFileName(files[0]);
  reader.readAsDataURL(files[0]);
}

reader.onload = function() {
  myimg.src = reader.result;
}

SelBtn.addEventListener('click', function () {
  input.click();
});

function GetExtName(file) {
  var temp = file.name.split('.');
  var ext = temp.slice((temp.length - 1), (temp.length));
  return '0' + ext[0];
}

function GetFileName(file) {
  var temp = file.name.split('.');
  var fname = temp.slice(0, -1).join('.');
  return fname;
}

async function UploadProcess() {
  var ImgToUpload = files[0];

  var ImgName = namebox.value + extlab.innerHTML;

  const metaData = {
    contentType: ImgToUpload.type
  }

  const storageRef = sRef(storage, "robot-images/" + ImgName);

  const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);

  UploadTask.on('state-changed'), (snapshot) => {
      var progess = (snapshot.byteTransferred / snapshot.totalBytes) * 100;
      console.log(downloadURL);
  }, (error) => {
      alert("error: image not uploaded!");
  }, () => {
    getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
      console.log(downloadURL);
    });
  }
};

UpBtn.onclick = UploadProcess();

*/


