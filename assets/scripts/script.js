document.addEventListener("DOMContentLoaded", setUpInteractivity);

function setUpInteractivity() {
    let mainButton = document.getElementById('main-button'); 
    let unitButtons = Array.from(document.getElementsByClassName('unit-button'));
    //Add event listener to Main Click Button for the user to generate score
    mainButton.addEventListener("click", function () {
        addScore(); 
        addTotalScore(); 
    }); 

    //Add event listener to the 'buy X unit' buttons
    unitButtons.forEach(function(button) {
        button.addEventListener("click", function () {
            addUnit(this);
        });
    });

    //Increments score that units produce every second
    window.setInterval(incrementScore, (1000));

    //Calculates and displays score produced by units sixty times a second, making it seem instant to the user
    window.setInterval(skeletonsPerSecond, (1000 / 60));
};

//Functions that are called when the button is clicked

//Adds to score
function addScore() {
    let score = document.getElementById("score");
    let upgradeAmount = document.getElementById("upgrade-amount");
    let audio = document.getElementById("smash-audio");
    score.innerHTML = (parseInt(score.innerHTML) + parseInt(upgradeAmount.innerHTML) +500000);
    audio.play(); 
}

//Adds to total score
function addTotalScore() {
    let totalScore = document.getElementById("total-score");
    let upgradeAmount = document.getElementById("upgrade-amount");
    totalScore.innerHTML = (parseInt(totalScore.innerHTML) + parseInt(upgradeAmount.innerHTML));
}

//Function for buying units and increasing their price
function addUnit(element) {
    let score = document.getElementById("score");
    let audio = document.getElementById("buy-item-audio"); 
    if (element.getAttribute("data-unit") === "1") { 
        let peasantPrice = document.getElementById("peasant-price"); 
        let peasantAmount = document.getElementById("peasant-amount")
        if (parseInt(score.innerHTML) >= parseInt(peasantPrice.innerHTML)) {
            score.innerHTML -= parseInt(peasantPrice.innerHTML);
            peasantPrice.innerHTML = Math.floor(parseInt(peasantPrice.innerHTML) * 1.8);
            peasantAmount.innerHTML = (parseInt(peasantAmount.innerHTML) + 1); 
            audio.play(); 
        } 
    } else if (element.getAttribute("data-unit") === "2") {
        let soldierPrice = document.getElementById("soldier-price");
        let soldierAmount = document.getElementById("soldier-amount");
        if (parseInt(score.innerHTML) >= parseInt(soldierPrice.innerHTML)) {
            score.innerHTML -= parseInt(soldierPrice.innerHTML);
            soldierPrice.innerHTML = Math.floor(parseInt(soldierPrice.innerHTML) * 1.5);  
            soldierAmount.innerHTML = (parseInt(soldierAmount.innerHTML) + 1); 
            audio.play(); 
        } 
    } else if (element.getAttribute("data-unit") === "3") {
        let paladinPrice = document.getElementById("paladin-price");
        let paladinAmount = document.getElementById("paladin-amount");
        if (parseInt(score.innerHTML) >= parseInt(paladinPrice.innerHTML)) {
            score.innerHTML -= parseInt(paladinPrice.innerHTML);
            paladinPrice.innerHTML = Math.floor(parseInt(paladinPrice.innerHTML) * 1.3); 
            paladinAmount.innerHTML = (parseInt(paladinAmount.innerHTML) + 1); 
            audio.play(); 
        } 
    } else if (element.getAttribute("data-unit") === "4") {
        let upgradePrice = document.getElementById("upgrade-price");
        let upgradeAmount = document.getElementById("upgrade-amount");
        if(parseInt(score.innerHTML) >= parseInt(upgradePrice.innerHTML)) {
            score.innerHTML -= parseInt(upgradePrice.innerHTML);
            upgradePrice.innerHTML =Math.floor(parseInt(upgradePrice.innerHTML) * 1.2);
            upgradeAmount.innerHTML =(parseInt(upgradeAmount.innerHTML) + 1);
            audio.play();
        }

    }
}

//Function for incrementing score when units are purchased
function incrementScore() {
    score =document.getElementById("score");
    totalScore =document.getElementById("total-score");
    scoreNum= parseInt(document.getElementById("score").innerHTML);
    totalScoreNum= parseInt(document.getElementById("total-score").innerHTML);
    peasantNum = parseInt(document.getElementById("peasant-amount").innerHTML);
    soldierNum =parseInt(document.getElementById("soldier-amount").innerHTML);
    paladinNum =parseInt(document.getElementById("paladin-amount").innerHTML);
    score.innerHTML =((scoreNum) + (peasantNum) +(soldierNum * 10) + (paladinNum * 100));
    totalScore.innerHTML = ((totalScoreNum) + (peasantNum) + (soldierNum * 10) + (paladinNum * 100));
}

//Function for calculating 'Skeletons Smashed per Second'
function skeletonsPerSecond(){
    smashedPerSecond = document.getElementById("per-second");
    peasantNum = parseInt(document.getElementById("peasant-amount").innerHTML);
    soldierNum =parseInt(document.getElementById("soldier-amount").innerHTML);
    paladinNum =parseInt(document.getElementById("paladin-amount").innerHTML);
    smashedPerSecond.innerHTML = ((peasantNum) + (soldierNum) * 10) + (paladinNum * 100);
}