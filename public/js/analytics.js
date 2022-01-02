import { writeData } from "./firebase.js";
let score = 0;

function addScore(){
    score = score + 1;
    let username = document.getElementById("name").value;
    writeData(username, score);
}

window.addScore = addScore;