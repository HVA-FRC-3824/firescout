import { writeData } from "./firebase.js";
import { readData } from "./firebase.js";
var s = 1;

function wData(name, score){
    s = score + s;
    writeData(name, s);
}

function rData(filePath){
    readData(filePath);
}

window.rData = rData;
window.wData = wData;
