var currentTable = 1;
numberOfTables = 3;

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
    var x = (currentTable - 1) * -100;
    for(var i = 0; i < tables.length; i++){
        tables[i].style.transform = "translate(" + x + "vw)";
    }
    var lable = document.getElementById("head")
    switch(currentTable){
        case 1:
            lable.innerHTML = "Climb Percent";
            break;
        case 2:
            lable.innerHTML = "Auto Accuracy";
            break;
        case 3:
            lable.innerHTML = "Tele Accuracy";
            break;
        default:
            console.log("something went wrong");
    }
}

window.changeDataSlide = changeDataSlide;