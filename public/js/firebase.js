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
          location.replace("https://firescout3824.web.app/index.html");
        }, 2000);
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
    signInSuccessUrl: 'https://firescout3824.web.app/index.html',
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
    document.getElementById("loginButton").innerHTML = "<i id='lilGuy' class='fas fa-user'></i> " + firebase.auth().currentUser.displayName;
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
      try{
        document.getElementById('navMenu').insertAdjacentHTML('beforeend', "<a href='./admin.html'>Admin Panel</a>");
        document.getElementById('navMenuMobile').insertAdjacentHTML('beforeend', "<a href='./admin.html'>Admin Panel</a>");
      }catch(e){
        console.log(e);
      }
      try{
        document.getElementById('adminBody').style.display = "block";
      }catch(e){

      }

    }else{
      if(document.getElementById('adminBody') != null){
        location.replace('./index.html');
      }
    }
  }catch(e){
    console.log(e);
    if(document.getElementById('adminBody') != null){
      location.replace('./index.html');
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
function readData(path){
  return firebase.database().ref(path).once('value').then((snapshot) => {
    console.log(snapshot.val());
    if(path = "Users"){
      usersObject = snapshot.val();
    }
    try{
      document.getElementById(snapshot.val()).style.fontWeight = "bold"; // FOR SCHEDULE PAGE TODO MOVE THIS SOMEWHERE ELSE
    }catch(e){

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

function getScoutPosition(){
  scoutPosition = readData("Users/" + firebase.auth().currentUser.uid + "/scoutPosition/data");
  return scoutPosition;
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


