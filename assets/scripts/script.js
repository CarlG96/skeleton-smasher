document.addEventListener("DOMContentLoaded", function () {
    const mainButton = document.getElementById('main-button'); //A constant representing the document's click button, the user's main point of interaction to start with.
    const score = document.getElementById('score'); //A constant representing the document's score value text. Can increase and decrease based on user input.
    const totalScore = document.getElementById('total-score'); //A constant representing the document's total score value text. Will only ever increase in value.
    const unitButtons = document.getElementsByClassName('unit-button'); //Constant list of the document's buttons which can be used to purchase units to generate score.
    const peasantAmount = document.getElementById('peasant-amount'); //Represents the amount of 'Peasant' units bought by the user.
    const peasantPrice = document.getElementById('peasant-price'); //Represents the amount of score required to purchase next 'Peasant' unit.
    const soldierAmount = document.getElementById('soldier-amount'); //Represents the amount of 'Soldier' units bought by the user.
    const soldierPrice = document.getElementById('soldier-price'); // Represents the amount of score required to purchase next 'Soldier' unit.
    const paladinAmount = document.getElementById('paladin-amount'); // Represents the amount of 'Paladin' units bought by the user.
    const paladinPrice = document.getElementById('paladin-price'); // Represents the amount of score required to purchase next 'Paladin' unit.
    const upgradeButton = document.getElementById('upgrade-button'); // Constant representing the button used to purchase the 'Sword Upgrades'.
    const upgradeAmount = document.getElementById('upgrade-amount'); // Represents the amount of 'Sword Upgrades' bought by the user.
    const upgradePrice = document.getElementById('upgrade-price'); //Represents the amount of score required to purchase the next 'Sword Upgrade'.
    const perSecond = document.getElementById('per-second'); //A constant representing the document's 'Skeleton's Smashed Per Second' text.
    const smashAudio = document.getElementById('smash-audio'); // Audio which is activated when a player clicks the mainButton.
    const buyItemAudio = document.getElementById('buy-item-audio'); //Audio which is activated when a unit or upgrade is purchased.

    //Add event listener to Main Click Button for the user to generate score
    mainButton.addEventListener('click', function () {
        addScore(score, upgradeAmount, smashAudio); 
        addTotalScore(totalScore, upgradeAmount); 
    }); 

    //Add event listener to the 'buy X unit' buttons
    for (button of unitButtons) {
        button.addEventListener('click', function () {
            addUnit(this, peasantAmount, peasantPrice, soldierAmount, soldierPrice, paladinAmount, paladinPrice, score, buyItemAudio);
        })
    }

    upgradeButton.addEventListener('click', function () {
        buyUpgrade(upgradeAmount, upgradePrice, score, buyItemAudio);
    }); 

    window.setInterval(incrementFunction, (1000)); ///DONE!
    function incrementFunction() {
        incrementScore(score, totalScore, peasantAmount, soldierAmount, paladinAmount);
    } 

    window.setInterval(updateDPS, (1000 / 60));///DONE!
    function updateDPS() {
       skeletonsPerSecond(perSecond, peasantAmount, soldierAmount, paladinAmount);
    }
})

//Functions that are called when the button is clicked

function addScore(currentScore, currentUpgradeAmount, audio) {
    currentScore.innerHTML = (parseInt(currentScore.innerHTML) + parseInt(currentUpgradeAmount.innerHTML) + 500000);
    audio.play();
}

function addTotalScore(currentTotalScore, currentUpgradeAmount) {
    currentTotalScore.innerHTML = (parseInt(currentTotalScore.innerHTML) + parseInt(currentUpgradeAmount.innerHTML));
}

//Function for buying units and increasing their price
function addUnit(element, peasantNum, peasantCost, soldierNum, soldierCost, paladinNum, paladinCost, currentScore, audio) {
    if (element.getAttribute('data-unit') === "1") {
        let currentPeasantNum = parseInt(peasantNum.innerHTML);
        if (parseInt(currentScore.innerHTML) >= parseInt(peasantCost.innerHTML)) {
            currentScore.innerHTML -= parseInt(peasantCost.innerHTML);
            peasantCost.innerHTML = Math.floor(parseInt(peasantCost.innerHTML) * 1.8);
            peasantNum.innerHTML = (currentPeasantNum + 1);
            audio.play();
        } else {
            peasantNum.innerHTML = currentPeasantNum;
        }
    } else if (element.getAttribute('data-unit') === "2") {
        let currentSoldierNum = parseInt(soldierNum.innerHTML);
        if (parseInt(currentScore.innerHTML) >= parseInt(soldierCost.innerHTML)) {
            currentScore.innerHTML -= parseInt(soldierCost.innerHTML);
            soldierCost.innerHTML = Math.floor(parseInt(soldierCost.innerHTML) * 1.5);
            soldierNum.innerHTML = (currentSoldierNum + 1);
            audio.play();
        } else {
            soldierNum.innerHTML = currentSoldierNum;
        }
    } else if (element.getAttribute('data-unit') === "3") {
        let currentPaladinNum = parseInt(paladinNum.innerHTML);
        if (parseInt(currentScore.innerHTML) >= parseInt(paladinCost.innerHTML)) {
            currentScore.innerHTML -= parseInt(paladinCost.innerHTML);
            paladinCost.innerHTML = Math.floor(parseInt(paladinCost.innerHTML) * 1.3);
            paladinNum.innerHTML = (currentPaladinNum + 1);
            audio.play();
        } else {
            paladinNum.innerHTML = currentPaladinNum;
        }
    }
}


//Function for buying sword upgrades
function buyUpgrade(currentUpgradeAmount, currentUpgradePrice, currentScore, audio) {
    if (parseInt(currentScore.innerHTML) >= parseInt(currentUpgradePrice.innerHTML)) {
        currentScore.innerHTML -= parseInt(currentUpgradePrice.innerHTML);
        currentUpgradePrice.innerHTML = Math.floor(parseInt(currentUpgradePrice.innerHTML) * 1.2);
        currentUpgradeAmount.innerHTML = (parseInt(currentUpgradeAmount.innerHTML) + 1);
        audio.play();
    } else {
        currentUpgradeAmount.innerHTML = (parseInt(currentUpgradeAmount.innerHTML));
    }
}

//Function for incrementing score when units are purchased
function incrementScore(currentScore, currentTotalScore, peasantNum, soldierNum, paladinNum) {
    currentScore.innerHTML = parseInt(currentScore.innerHTML) + parseInt(peasantNum.innerHTML) + parseInt((soldierNum.innerHTML) * 10) + parseInt((paladinNum.innerHTML) * 100);
    currentTotalScore.innerHTML = parseInt(currentTotalScore.innerHTML) + parseInt(peasantNum.innerHTML) + parseInt((soldierNum.innerHTML) * 10) + parseInt((paladinNum.innerHTML) * 100);
}

//Function for calculating 'Skeletons Smashed per Second'
function skeletonsPerSecond(smashedPerSecond, peasantNum, soldierNum, paladinNum){
    smashedPerSecond.innerHTML = (parseInt(peasantNum.innerHTML) + parseInt((soldierNum.innerHTML) * 10) + parseInt((paladinNum.innerHTML) * 100));
}