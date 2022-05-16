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
        addScore(score, upgradeAmount);
        addTotalScore(totalScore, upgradeAmount);
        smashAudio.play(); //Plays a sound when the button is clicked
    });


    //Add event listener to the 'buy X unit' buttons
    for (button of unitButtons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-unit') === "1") {
                let currentPeasantAmount = parseInt(document.getElementById('peasant-amount').innerHTML);
                if (parseInt(score.innerHTML) >= parseInt(peasantPrice.innerHTML)) {
                    score.innerHTML -= parseInt(peasantPrice.innerHTML);
                    peasantPrice.innerHTML = Math.floor(parseInt(peasantPrice.innerHTML) * 1.8);
                    peasantAmount.innerHTML = (currentPeasantAmount + 1);
                    buyItemAudio.play();
                } else {
                    peasantAmount.innerHTML = currentPeasantAmount;
                }
            } else if (this.getAttribute('data-unit') === "2") {
                let currentSoldierAmount = parseInt(document.getElementById('soldier-amount').innerHTML);
                if (parseInt(score.innerHTML) >= parseInt(soldierPrice.innerHTML)) {
                    score.innerHTML -= parseInt(soldierPrice.innerHTML);
                    soldierPrice.innerHTML = Math.floor(parseInt(soldierPrice.innerHTML) * 1.5);
                    soldierAmount.innerHTML = (currentSoldierAmount + 1);
                    buyItemAudio.play();
                } else {
                    soldierAmount.innerHTML = currentSoldierAmount;
                }
            } else if (this.getAttribute('data-unit') === "3") {
                let currentPaladinAmount = parseInt(document.getElementById('paladin-amount').innerHTML);
                if (parseInt(score.innerHTML) >= parseInt(paladinPrice.innerHTML)) {
                    score.innerHTML -= parseInt(paladinPrice.innerHTML);
                    paladinPrice.innerHTML = Math.floor(parseInt(paladinPrice.innerHTML) * 1.3);
                    paladinAmount.innerHTML = (currentPaladinAmount + 1);
                    buyItemAudio.play();
                } else {
                    paladinAmount.innerHTML = currentPaladinAmount;
                }
            }
        });
    }

    upgradeButton.addEventListener('click', function () {
        upgradeAmount.innerHTML = buyUpgrade(upgradeAmount, upgradePrice, score);
        buyItemAudio.play();
    });

    window.setInterval(incrementScore, (1000));
    window.setInterval(updateDPS, (1000 / 60));


    function incrementScore() {
        let currentScore = parseInt(score.innerHTML);
        let totalCurrentScore = parseInt(totalScore.innerHTML);
        score.innerHTML = (currentScore + parseInt(peasantAmount.innerHTML) + parseInt((soldierAmount.innerHTML) * 10) + parseInt((paladinAmount.innerHTML) * 100));
        totalScore.innerHTML = (totalCurrentScore + parseInt(peasantAmount.innerHTML) + parseInt((soldierAmount.innerHTML) * 10) + parseInt((paladinAmount.innerHTML) * 100));
    }

    function updateDPS() {
        perSecond.innerHTML = (parseInt(peasantAmount.innerHTML) + parseInt((soldierAmount.innerHTML) * 10) + parseInt((paladinAmount.innerHTML) * 100));
    }




})

//Functions that are called when the button is clicked

function addScore(currentScore, currentUpgradeAmount) {
    currentScore.innerHTML = (parseInt(currentScore.innerHTML) + parseInt(currentUpgradeAmount.innerHTML) + 5000);
}

function addTotalScore(currentTotalScore, currentUpgradeAmount) {
    currentTotalScore.innerHTML = (parseInt(currentTotalScore.innerHTML) + parseInt(currentUpgradeAmount.innerHTML));
}

//Function for buying upgrades
function addUnit(element) {
    if (element.getAttribute('data-unit') === "1") {
        let currentPeasantAmount = parseInt(document.getElementById('peasant-amount').innerHTML);
        if (parseInt(score.innerHTML) >= parseInt(peasantPrice.innerHTML)) {
            score.innerHTML -= parseInt(peasantPrice.innerHTML);
            peasantPrice.innerHTML = Math.floor(parseInt(peasantPrice.innerHTML) * 1.8);
            peasantAmount.innerHTML = (currentPeasantAmount + 1);
            buyItemAudio.play();
        } else {
            peasantAmount.innerHTML = currentPeasantAmount;
        }
    } else if (element.getAttribute('data-unit') === "2") {
        let currentSoldierAmount = parseInt(document.getElementById('soldier-amount').innerHTML);
        if (parseInt(score.innerHTML) >= parseInt(soldierPrice.innerHTML)) {
            score.innerHTML -= parseInt(soldierPrice.innerHTML);
            soldierPrice.innerHTML = Math.floor(parseInt(soldierPrice.innerHTML) * 1.5);
            soldierAmount.innerHTML = (currentSoldierAmount + 1);
            buyItemAudio.play();
        } else {
            soldierAmount.innerHTML = currentSoldierAmount;
        }
    } else if (element.getAttribute('data-unit') === "3") {
        let currentPaladinAmount = parseInt(document.getElementById('paladin-amount').innerHTML);
        if (parseInt(score.innerHTML) >= parseInt(paladinPrice.innerHTML)) {
            score.innerHTML -= parseInt(paladinPrice.innerHTML);
            paladinPrice.innerHTML = Math.floor(parseInt(paladinPrice.innerHTML) * 1.3);
            paladinAmount.innerHTML = (currentPaladinAmount + 1);
            buyItemAudio.play();
        } else {
            paladinAmount.innerHTML = currentPaladinAmount;
        }
    }
}


//Function for buying sword upgrades
function buyUpgrade(currentUpgradeAmount, currentUpgradePrice, currentScore) {
    if (parseInt(currentScore.innerHTML) >= parseInt(currentUpgradePrice.innerHTML)) {
        currentScore.innerHTML -= parseInt(currentUpgradePrice.innerHTML);
        currentUpgradePrice.innerHTML = Math.floor(parseInt(currentUpgradePrice.innerHTML) * 1.2);
        return (parseInt(currentUpgradeAmount.innerHTML) + 1);
    } else {
        return (parseInt(currentUpgradeAmount.innerHTML));
    }
}