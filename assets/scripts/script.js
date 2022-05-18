document.addEventListener("DOMContentLoaded", setUpInteractivity);

function setUpInteractivity() {
    //Add event listener to Main Click Button for the user to generate score
    let mainButton = document.getElementById('main-button');
    mainButton.addEventListener("click", function () {
        addScore();
        addTotalScore();
    });

    //Add event listener to the 'buy X unit' buttons
    let unitButtons = Array.from(document.getElementsByClassName('unit-button'));
    unitButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            addUnit(this);
        });
    });

    //Increments score that units produce every second
    window.setInterval(incrementScore, (1000));

    //Calculates and displays score produced by units sixty times a second, making it seem instant to the user
    window.setInterval(skeletonsPerSecond, (1000 / 60));
}

//Functions that are called when the button is clicked

//Adds to score
function addScore() {
    let score = document.getElementById("score");
    let upgradeAmount = document.getElementById("upgrade-amount");
    let audio = document.getElementById("smash-audio");
    score.innerHTML = (parseInt(score.innerHTML) + parseInt(upgradeAmount.innerHTML) + 500000);
    audio.play();
}

//Adds to total score
function addTotalScore() {
    let totalScore = document.getElementById("total-score");
    let upgradeAmount = document.getElementById("upgrade-amount");
    totalScore.innerHTML = (parseInt(totalScore.innerHTML) + parseInt(upgradeAmount.innerHTML));
}

//Function for deciding on which unit is being represented and which arguments to use
function addUnit(element) {
    if (element.getAttribute("data-unit") === "1") {
        let peasantPrice = document.getElementById("peasant-price");
        let peasantAmount = document.getElementById("peasant-amount");
        increaseUnitAndPrice(peasantAmount, peasantPrice, 1.5);
    } else if (element.getAttribute("data-unit") === "2") {
        let soldierPrice = document.getElementById("soldier-price");
        let soldierAmount = document.getElementById("soldier-amount");
        increaseUnitAndPrice(soldierAmount, soldierPrice, 1.8);
    } else if (element.getAttribute("data-unit") === "3") {
        let paladinPrice = document.getElementById("paladin-price");
        let paladinAmount = document.getElementById("paladin-amount");
        increaseUnitAndPrice(paladinAmount, paladinPrice, 2.2);
    } else if (element.getAttribute("data-unit") === "4") {
        let upgradePrice = document.getElementById("upgrade-price");
        let upgradeAmount = document.getElementById("upgrade-amount");
        increaseUnitAndPrice(upgradeAmount, upgradePrice, 2);
    }
}

//Function for buying units, increasing number and increasing price
function increaseUnitAndPrice(unitAmount, unitPrice, factor) {
    let score = document.getElementById("score");
    let audio = document.getElementById("buy-item-audio");
    if (parseInt(score.innerHTML) >= parseInt(unitPrice.innerHTML)) {
        score.innerHTML -= parseInt(unitPrice.innerHTML);
        unitPrice.innerHTML = Math.floor(parseInt(unitPrice.innerHTML) * factor);
        unitAmount.innerHTML = (parseInt(unitAmount.innerHTML) + 1);
        audio.play();
    }
}

//Function for incrementing score when units are purchased
function incrementScore() {
    let score = document.getElementById("score");
    let totalScore = document.getElementById("total-score");
    let scoreNum = parseInt(document.getElementById("score").innerHTML);
    let totalScoreNum = parseInt(document.getElementById("total-score").innerHTML);
    let peasantNum = parseInt(document.getElementById("peasant-amount").innerHTML);
    let soldierNum = parseInt(document.getElementById("soldier-amount").innerHTML);
    let paladinNum = parseInt(document.getElementById("paladin-amount").innerHTML);
    score.innerHTML = ((scoreNum) + (peasantNum) + (soldierNum * 10) + (paladinNum * 100));
    totalScore.innerHTML = ((totalScoreNum) + (peasantNum) + (soldierNum * 10) + (paladinNum * 100));
}

//Function for calculating 'Skeletons Smashed per Second'
function skeletonsPerSecond() {
    let smashedPerSecond = document.getElementById("per-second");
    let peasantNum = parseInt(document.getElementById("peasant-amount").innerHTML);
    let soldierNum = parseInt(document.getElementById("soldier-amount").innerHTML);
    let paladinNum = parseInt(document.getElementById("paladin-amount").innerHTML);
    smashedPerSecond.innerHTML = ((peasantNum) + (soldierNum) * 10) + (paladinNum * 100);
}