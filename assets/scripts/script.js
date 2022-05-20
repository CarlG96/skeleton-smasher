document.addEventListener("DOMContentLoaded", setUpInteractivity);

/**
 * Function which sets up the event listeners and 
 * interval events for the site.
 */

function setUpInteractivity() {
    //Add event listener to Main Click Button for the user to generate score
    let mainButton = document.getElementById("main-button");
    mainButton.addEventListener("click", function () {
        addScore();
        addTotalScore();
    });

    //Add event listener to the 'buy X unit or buy X upgrade' buttons
    let unitButtons = Array.from(document.getElementsByClassName("unit-button"));
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

/**
 * This function adds to score
 * when the main button is clicked.
 */

function addScore() {
    let score = document.getElementById("score");
    let upgradeAmount = document.getElementById("upgrade-amount");
    let audio = document.getElementById("smash-audio");
    if((parseInt(score.innerHTML) + parseInt(upgradeAmount.innerHTML) + 99999999) < 99999999) {
        score.innerHTML = (parseInt(score.innerHTML) + parseInt(upgradeAmount.innerHTML) + 99999999);
    } else {
        score.innerHTML = 99999999;
    }
    audio.play();
}

/**
 * This function adds to total score
 * when the main button is clicked.
 */

function addTotalScore() {
    let totalScore = document.getElementById("total-score");
    let upgradeAmount = document.getElementById("upgrade-amount");
    if (parseInt(totalScore.innerHTML) + parseInt(upgradeAmount.innerHTML) + 19999999 < 99999999) {
        totalScore.innerHTML = (parseInt(totalScore.innerHTML) + parseInt(upgradeAmount.innerHTML)) + 19999999;
    } else {
        totalScore.innerHTML = 99999999;
    }
}

/**
 * This function receives an element from unitButtons and figures out 
 * which unit is being added to.
 * @param element The button from the array unitButtons being passed in
 * to check which unit/ upgrade it corresponds with.
 */

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

/**
 * This function recieves unitAmount, unitPrice and factor
 * from addUnit() and adds to and increases the price of whatever unit or
 * upgrade is given to it.
 * @param unitAmount A number which represents how many of that unit/upgrade 
 * the user currently has.
 * @param unitPrice The amount of score required to purchase a unit/upgrade.
 * @param factor The factor that the unitPrice is multiplied by.
 */

function increaseUnitAndPrice(unitAmount, unitPrice, factor) {
    let score = document.getElementById("score");
    let audio = document.getElementById("buy-item-audio");
    if (parseInt(score.innerHTML) >= parseInt(unitPrice.innerHTML)) {
        score.innerHTML -= parseInt(unitPrice.innerHTML);
        if(Math.floor(parseInt(unitPrice.innerHTML) * factor) <99999999) {
        unitPrice.innerHTML = Math.floor(parseInt(unitPrice.innerHTML) * factor);}
        else {
            unitPrice.innerHTML = 99999999;
        }
        if(parseInt(unitAmount.innerHTML) === 99) {
            unitAmount.innerHTML = 99;
        }
        else {
            unitAmount.innerHTML = (parseInt(unitAmount.innerHTML)+1);
        }
        audio.play();
    }
}

/**
 * This function increments the score every second.
 */

function incrementScore() {
    let score = document.getElementById("score");
    let totalScore = document.getElementById("total-score");
    let scoreNum = parseInt(document.getElementById("score").innerHTML);
    let totalScoreNum = parseInt(document.getElementById("total-score").innerHTML);
    let peasantNum = parseInt(document.getElementById("peasant-amount").innerHTML);
    let soldierNum = parseInt(document.getElementById("soldier-amount").innerHTML);
    let paladinNum = parseInt(document.getElementById("paladin-amount").innerHTML);
    if (((scoreNum) + (peasantNum) + (soldierNum * 10) + (paladinNum * 100)) >= 99999999) {
        score.innerHTML = 99999999;
    } else {
        score.innerHTML = ((scoreNum) + (peasantNum) + (soldierNum * 10) + (paladinNum * 100));
    }
    if (((totalScoreNum) + (peasantNum) + (soldierNum * 10) + (paladinNum * 100)) >= 99999999) {
        totalScore.innerHTML = 99999999;
    } else {
        totalScore.innerHTML = ((totalScoreNum) + (peasantNum) + (soldierNum * 10) + (paladinNum * 100));
    }

}

/**
 * This function calculates the 'skeletons smashed per
 * second' and displays it to the user.
 */

function skeletonsPerSecond() {
    let smashedPerSecond = document.getElementById("per-second");
    let peasantNum = parseInt(document.getElementById("peasant-amount").innerHTML);
    let soldierNum = parseInt(document.getElementById("soldier-amount").innerHTML);
    let paladinNum = parseInt(document.getElementById("paladin-amount").innerHTML);
    smashedPerSecond.innerHTML = ((peasantNum) + (soldierNum) * 10) + (paladinNum * 100);
}