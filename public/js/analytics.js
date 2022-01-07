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


    /*for(var i = 1; i <= tables.length; i++){
        if(currentTable == i){
            console.log(currentTable);
            table = document.getElementById("table" + i);
            table.style.transform = "perspective(1000px) translate3d(" + x + "vw, 0vw, 0vw)";
            table.style.backgroundColor = "rgba(231, 231, 231, 1)";
        }else{
            tables[i - 1].style.transform = "perspective(1000px) translate3d(" + (x) + "vw, 10vw, 0px)";
            tables[1].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
        }
    }*/
    var lable = document.getElementById("head")
    switch(currentTable){
        case 1:
            lable.innerHTML = "Climb Percent";
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
                tables[1].style.transform = "perspective(1000px) translate3d(-70vw, -3.5vw, -100px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-140vw, -3.5vw, -100px)";
                tables[3].style.transform = "perspective(1000px) translate3d(-372vw, -3.5vw, -100px)";
            }else{
                tables[0].style.transform = "perspective(1000px) translate3d(0vw, 0vw, 0vw)";
                tables[1].style.transform = "perspective(1000px) translate3d(-24vw, 0vw, -75px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-30vw, 0vw, -75px)";
                tables[3].style.transform = "perspective(1000px) translate3d(-40vw, 0vw, -100px)";
            }
            break;
        case 2:
            lable.innerHTML = "Auto Accuracy";
            tables[0].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[1].style.backgroundColor = "rgba(231, 231, 231, 1)";
            tables[2].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[3].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[0].style.color = "rgba(0, 0, 0, 0.7)";
            tables[1].style.color = "rgba(0, 0, 0, 1)";
            tables[2].style.color = "rgba(0, 0, 0, 0.7)";
            tables[3].style.color = "rgba(0, 0, 0, 0.7)";
            if(isDesktop){
                tables[0].style.transform = "perspective(1000px) translate3d(-40vw, -3.5vw, -100px)";
                tables[1].style.transform = "perspective(1000px) translate3d(-100vw, 0vw, 0vw)";
                tables[2].style.transform = "perspective(1000px) translate3d(-180vw, -3.5vw, -100px)";
                tables[3].style.transform = "perspective(1000px) translate3d(-250vw, -3.5vw, -100px)";
            }else{
                tables[0].style.transform = "perspective(1000px) translate3d(-83vw, 0vw, -75px)";
                tables[1].style.transform = "perspective(1000px) translate3d(-100vw, 0vw, 0vw)";
                tables[2].style.transform = "perspective(1000px) translate3d(-132vw, 0vw, -75px)";
                tables[3].style.transform = "perspective(1000px) translate3d(-140vw, 0vw, -75px)";
            }
            break;
        case 3:
            lable.innerHTML = "Tele Accuracy";
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
                tables[1].style.transform = "perspective(1000px) translate3d(-150vw, -3.5vw, -100px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-200vw, 0vw, 0vw)";
                tables[3].style.transform = "perspective(1000px) translate3d(-290vw, -3.5vw, -100px)";
            }else{
                tables[0].style.transform = "perspective(1000px) translate3d(-200vw, 0vw, -75px)";
                tables[1].style.transform = "perspective(1000px) translate3d(-191vw, 0vw, -75px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-200vw, 0vw, 0vw)";
                tables[3].style.transform = "perspective(1000px) translate3d(-239vw, 0vw, -75px)";
            }
            break;
        case 4:
            lable.innerHTML = "Avg Score";
            tables[0].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[1].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[2].style.backgroundColor = "rgba(231, 231, 231, 0.5)";
            tables[3].style.backgroundColor = "rgba(231, 231, 231, 1)";
            tables[0].style.color = "rgba(0, 0, 0, 0.7)";
            tables[1].style.color = "rgba(0, 0, 0, 0.7)";
            tables[2].style.color = "rgba(0, 0, 0, 0.7)";
            tables[3].style.color = "rgba(0, 0, 0, 1)";
            if(isDesktop){
                tables[0].style.transform = "perspective(1000px) translate3d(40vw, -3.5vw, -100px)";
                tables[1].style.transform = "perspective(1000px) translate3d(-190vw, -3.5vw, -100px)";
                tables[2].style.transform = "perspective(1000px) translate3d(-260.2vw, -3.5vw, -100px)";
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