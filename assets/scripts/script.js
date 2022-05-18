document.addEventListener("DOMContentLoaded", setUpInteractivity);

function setUpInteractivity() {
    let mainButton = document.getElementById('main-button'); 
    let score = document.getElementById('score'); 
    let totalScore = document.getElementById('total-score'); 
    let unitButtons = Array.from(document.getElementsByClassName('unit-button'));
    let peasantAmount = document.getElementById('peasant-amount'); 
    let peasantPrice = document.getElementById('peasant-price'); 
    let soldierAmount = document.getElementById('soldier-amount'); 
    let soldierPrice = document.getElementById('soldier-price'); 
    let paladinAmount = document.getElementById('paladin-amount'); 
    let paladinPrice = document.getElementById('paladin-price');  
    let upgradeAmount = document.getElementById('upgrade-amount'); 
    let upgradePrice = document.getElementById('upgrade-price'); 
    let perSecond = document.getElementById('per-second'); 
    let smashAudio = document.getElementById('smash-audio'); 
    let buyItemAudio = document.getElementById('buy-item-audio'); 

    //Add event listener to Main Click Button for the user to generate score
    mainButton.addEventListener("click", function () {
        addScore(score, upgradeAmount, smashAudio); 
        addTotalScore(totalScore, upgradeAmount); 
    }); 

    //Add event listener to the 'buy X unit' buttons
    unitButtons.forEach(function(button) {
        button.addEventListener("click", function () {
            addUnit(this, peasantAmount, peasantPrice, soldierAmount, soldierPrice, paladinAmount, paladinPrice, upgradeAmount, upgradePrice, score, buyItemAudio);
        });
    });

    //Increments score that units produce every second
    window.setInterval(incrementFunction, (1000));
    function incrementFunction() {
        incrementScore();
    } 

    //Calculates and displays score produced by units sixty times a second, making it seem instant to the user
    window.setInterval(updatePerSecond, (1000 / 60));
    function updatePerSecond() {
       skeletonsPerSecond(perSecond, peasantAmount, soldierAmount, paladinAmount);
    }
};

//Functions that are called when the button is clicked

//Adds to score
function addScore(currentScore, currentUpgradeAmount, audio) {
    currentScore.innerHTML = (parseInt(currentScore.innerHTML) + parseInt(currentUpgradeAmount.innerHTML) +500000);
    audio.play(); 
}

//Adds to total score
function addTotalScore(currentTotalScore, currentUpgradeAmount) {
    currentTotalScore.innerHTML = (parseInt(currentTotalScore.innerHTML) + parseInt(currentUpgradeAmount.innerHTML));
}

//Function for buying units and increasing their price
function addUnit(element, peasantNum, peasantCost, soldierNum, soldierCost, paladinNum, paladinCost, upgradeNum, upgradeCost, currentScore, audio) {
    if (element.getAttribute("data-unit") === "1") { 
        let currentPeasantNum = parseInt(peasantNum.innerHTML);
        if (parseInt(currentScore.innerHTML) >= parseInt(peasantCost.innerHTML)) {
            currentScore.innerHTML -= parseInt(peasantCost.innerHTML);
            peasantCost.innerHTML = Math.floor(parseInt(peasantCost.innerHTML) * 1.8);
            peasantNum.innerHTML = (currentPeasantNum + 1); 
            audio.play(); 
        } 
    } else if (element.getAttribute("data-unit") === "2") {
        let currentSoldierNum = parseInt(soldierNum.innerHTML);
        if (parseInt(currentScore.innerHTML) >= parseInt(soldierCost.innerHTML)) {
            currentScore.innerHTML -= parseInt(soldierCost.innerHTML);
            soldierCost.innerHTML = Math.floor(parseInt(soldierCost.innerHTML) * 1.5);  
            soldierNum.innerHTML = (currentSoldierNum + 1); 
            audio.play(); 
        } 
    } else if (element.getAttribute("data-unit") === "3") {
        let currentPaladinNum = parseInt(paladinNum.innerHTML);
        if (parseInt(currentScore.innerHTML) >= parseInt(paladinCost.innerHTML)) {
            currentScore.innerHTML -= parseInt(paladinCost.innerHTML);
            paladinCost.innerHTML = Math.floor(parseInt(paladinCost.innerHTML) * 1.3); 
            paladinNum.innerHTML = (currentPaladinNum + 1); 
            audio.play(); 
        } 
    } else if (element.getAttribute("data-unit") === "4") {
        let currentUpgradeNum = parseInt(upgradeNum.innerHTML);
        if(parseInt(currentScore.innerHTML) >= parseInt(upgradeCost.innerHTML)) {
            currentScore.innerHTML -= parseInt(upgradeCost.innerHTML);
            upgradeCost.innerHTML =Math.floor(parseInt(upgradeCost.innerHTML) * 1.2);
            upgradeNum.innerHTML =(currentUpgradeNum + 1);
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
function skeletonsPerSecond(smashedPerSecond, peasantNum, soldierNum, paladinNum){
    smashedPerSecond.innerHTML = (parseInt(peasantNum.innerHTML) + parseInt((soldierNum.innerHTML) * 10) + parseInt((paladinNum.innerHTML) * 100));
}