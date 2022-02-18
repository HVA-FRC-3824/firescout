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
    if(currUser.uid == 'qnlTm8LSbocnF57XDjqB6qxy7hJ2' || currUser.uid == 'ch2dqF6ZG6V6YgZoR21hzejsUC22' || currUser.uid == '7pIHSSKUgyRqXVz6MCbUMathVps1'){
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
function readData(path){
  dataRead = "";
  return firebase.database().ref(path).once('value').then((snapshot) => {
    console.log(snapshot.val());
    dataRead = snapshot.val();
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

function getAllTeamInfo(){
  get(ref(db, 'matchScouting')).then((snapshot) => {
    if (snapshot.exists()) {
      var allTeamInfo = snapshot.val();
      //console.log(allTeamInfo);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  return allTeamInfo;
}

function getTeamInfo(team){
  get(ref(db, 'matchScouting/' + team)).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
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



/*
 █████  ███    ██  █████  ██      ██    ██ ████████ ██  ██████ ███████ 
██   ██ ████   ██ ██   ██ ██       ██  ██     ██    ██ ██      ██      
███████ ██ ██  ██ ███████ ██        ████      ██    ██ ██      ███████ 
██   ██ ██  ██ ██ ██   ██ ██         ██       ██    ██ ██           ██ 
██   ██ ██   ████ ██   ██ ███████    ██       ██    ██  ██████ ███████                                                                      
*/

var robotData;
function pullAllMatchScouting(){
  document.getElementById('pullMasterButton').style.display = "none";
  console.log("pullingrobodata");
  readData("matchScouting");
  setTimeout(() => {
    robotData = dataRead;
  }, 500);
}

function displayDataWheel(){
  console.log(robotData);
  
  //variables to reset when recalculating he data wheel information
  var highestTeleUpper = 0;
  var highestAutoUpper = 0;
  var highestTeleLower = 0;
  var highestAutoLower = 0;
  var robotWorths = [{team:9999, worth:0}];


  /* Change values of w to change the importance of each data
  d max is the maximum value for that stat, so for any accuracy stat the max is 100, for something like shots taken
  the value would be the highest number of shots taken by any robot in our data
  robotWorth = (w1 * (d1/d1max)) + (w2 * (d2/d2max)) + (w3 * (d3/d3max)) ... + (wn * (dn/dnmax));*/ 
  //!!The general formula!!


  /* ======================= Finding the maximum values for all of the stats we want ======================= */

  Object.keys(robotData).forEach(robot => {
    var currentRobotAutoUpper = 0;
    var currentRobotTeleUpper = 0;
    var currentRobotAutoLower = 0;
    var currentRobotTeleLower = 0;
    Object.keys(robotData[robot]).forEach(match => {
      Object.keys(robotData[robot][match]).forEach(scouter => {
        currentDataDict = robotData[robot][match][scouter]['data'];
        currentRobotAutoUpper += currentDataDict['autoUpperHubAmount'];
        currentRobotTeleUpper += currentDataDict['teleUpperHubAmount'];
        currentRobotAutoLower += currentDataDict['autoLowerHubAmount'];
        currentRobotTeleLower += currentDataDict['teleLowerHubAmount'];
      });
    });
    if(currentRobotAutoUpper > highestAutoUpper){
      highestAutoUpper = currentRobotAutoUpper;
    }
    if(currentRobotTeleUpper > highestTeleUpper){
      highestTeleUpper = currentRobotTeleUpper;
    }
    if(currentRobotAutoLower > highestAutoLower){
      highestAutoLower = currentRobotAutoLower;
    }
    if(currentRobotTeleLower > highestTeleLower){
      highestTeleLower = currentRobotTeleLower;
    }
  });



  Object.keys(robotData).forEach(robot => {
    /* Operates on every robot before running through all of that robot's data */
    var currentRobotMatches = 0;
    var currentRobotAutoUpperHubAmount = 0;
    var currentRobotTeleUpperHubAmount = 0;
    var currentRobotAutoLowerHubAmount = 0;
    var currentRobotTeleLowerHubAmount = 0;
    var currentRobotClimbs = 0;
    Object.keys(robotData[robot]).forEach(match => {
      /* Operates on every match that current robot played in before running through the data itself */
      currentRobotMatches++;
      Object.keys(robotData[robot][match]).forEach(scouter => {
        /* Operates on every scouter for the current match, this is where you can operate on the data */
        currentDataDict = robotData[robot][match][scouter]['data'];
        currentRobotAutoUpperHubAmount += currentDataDict['autoUpperHubAmount'];
        currentRobotTeleUpperHubAmount += currentDataDict['teleUpperHubAmount'];
        currentRobotAutoLowerHubAmount += currentDataDict['autoLowerHubAmount'];
        currentRobotTeleLowerHubAmount += currentDataDict['teleLowerHubAmount'];
        if(currentDataDict['levelClimbed'] == 'low' || currentDataDict['levelClimbed'] == 'middle' || currentDataDict['levelClimbed'] == 'high' || currentDataDict['levelClimbed'] == 'traversal'){
          currentRobotClimbs++;
        }
      });
      /* Operates on every match after running through the data for that match */

    });
    /* Operates on every robot after running through all of that robot's data */

    /* Values to change for importance of stat towards robot worth, must add up to 1.00*/
    var 
    climbPercentWeight = 0.35,
    autoUpperWeight = 0.17,
    teleUpperWeight = 0.2,
    autoLowerWeight = 0.15,
    teleLowerWeight = 0.13;

    currentRobotWorth = (autoUpperWeight * (currentRobotAutoUpperHubAmount/highestAutoUpper) + (teleUpperWeight * (currentRobotTeleUpperHubAmount/highestTeleUpper)) + (autoLowerWeight * (currentRobotAutoLowerHubAmount/highestAutoLower)) + (teleLowerWeight * (currentRobotTeleLowerHubAmount/highestTeleLower)) + (climbPercentWeight * (currentRobotClimbs/currentRobotMatches)));
    currentRobotWorth = Math.round(currentRobotWorth * 100);
    robotWorths.push({team:robot, worth:currentRobotWorth});
  });
  /* Runs after running through all data for All robots */
  console.log(robotWorths)

  //Sorts the robotWorths by the worht
  robotWorths.sort((a, b) => (a.worth > b.worth) ? 1 : -1);
  robotWorths = robotWorths.reverse();

  console.log(robotWorths);

  document.getElementById("table4").querySelector("#t1").innerHTML = "Team " + robotWorths[0].team;
  document.getElementById("table4").querySelector("#d1").innerHTML = robotWorths[0].worth;
  document.getElementById("table4").querySelector("#t2").innerHTML = "Team " + robotWorths[1].team;
  document.getElementById("table4").querySelector("#d2").innerHTML = robotWorths[1].worth;
  document.getElementById("table4").querySelector("#t3").innerHTML = "Team " + robotWorths[2].team;
  document.getElementById("table4").querySelector("#d3").innerHTML = robotWorths[2].worth;
  document.getElementById("table4").querySelector("#t4").innerHTML = "Team " + robotWorths[3].team;
  document.getElementById("table4").querySelector("#d4").innerHTML = robotWorths[3].worth;
  document.getElementById("table4").querySelector("#t5").innerHTML = "Team " + robotWorths[4].team;
  document.getElementById("table4").querySelector("#d5").innerHTML = robotWorths[4].worth;
  document.getElementById("table4").querySelector("#t6").innerHTML = "Team " + robotWorths[5].team;
  document.getElementById("table4").querySelector("#d6").innerHTML = robotWorths[5].worth;

}

//DISPLAYS THE DATA TO THE RAW DATA INFO BOX
function displayRawData(){ 
  robot = document.getElementById("teamNum").value;
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
      if(robotData[robot][match][name]['data']['levelClimbed'] != 'none' && dataRead[robot][match][name]['data']['levelClimbed'] != 'fail'){
        totalSuccessfulClimbs++;
      }
      //Tallys the total failed climbs
      if(dataRead[robot][match][name]['data']['levelClimbed'] == 'fail'){
        failedClimbs++;
      }

      //Calculates the highest scoring match
      var climbPoints = 0;
      switch (dataRead[robot][match][name]['data']['levelClimbed']) {
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
      (dataRead[robot][match][name]['data']['autoUpperHubAmount'] * 4) + 
      (dataRead[robot][match][name]['data']['autoLowerHubAmount'] * 2) +
      (dataRead[robot][match][name]['data']['teleUpperHubAmount'] * 2) +
      (dataRead[robot][match][name]['data']['teleLowerHubAmount']) +
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


