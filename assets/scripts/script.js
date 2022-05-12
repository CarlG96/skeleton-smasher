document.addEventListener("DOMContentLoaded", function () {
    const mainButton = document.getElementById('main-button');
    const score = document.getElementById('score');
    const totalScore = document.getElementById('total-score');
    const unitButtons = document.getElementsByClassName('unit-button');
    const unit1Amount = document.getElementById('unit-1-amount');
    const unit2Amount = document.getElementById('unit-2-amount');
    const unit3Amount = document.getElementById('unit-3-amount');
    const upgradeButton = document.getElementById('upgrade-button');
    const upgradeAmount = document.getElementById('upgrade-amount');
    const upgradePrice = document.getElementById('upgrade-price');

    mainButton.addEventListener('click', function () {
        score.innerHTML = addScore(score, upgradeAmount);
        totalScore.innerHTML = addTotalScore(totalScore, upgradeAmount);
    });


    for (button of unitButtons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-unit') === "1") {
                let currentUnit1Amount = parseInt(document.getElementById('unit-1-amount').innerHTML);
                unit1Amount.innerHTML = (currentUnit1Amount + 1);
            } else if (this.getAttribute('data-unit') === "2") {
                let currentUnit2Amount = parseInt(document.getElementById('unit-2-amount').innerHTML);
                unit2Amount.innerHTML = (currentUnit2Amount + 1);
            } else if (this.getAttribute('data-unit') === "3") {
                let currentUnit3Amount = parseInt(document.getElementById('unit-3-amount').innerHTML);
                unit3Amount.innerHTML = (currentUnit3Amount + 1);
            }
        });
    }

    upgradeButton.addEventListener('click', function() {
        upgradeAmount.innerHTML = buyUpgrade(upgradeAmount, upgradePrice, score);
    });

    window.setInterval(incrementScore, 1000);

    function incrementScore() {
        let currentScore = parseInt(score.innerHTML);
        let totalCurrentScore = parseInt(totalScore.innerHTML);
        score.innerHTML = (currentScore + parseInt(unit1Amount.innerHTML) + parseInt((unit2Amount.innerHTML) * 10) + parseInt((unit3Amount.innerHTML) * 100));
        totalScore.innerHTML = (totalCurrentScore + parseInt(unit1Amount.innerHTML) + parseInt((unit2Amount.innerHTML) * 10) + parseInt((unit3Amount.innerHTML) * 100));
    }




})

//Functions that are called when the button is clicked

function addScore(currentScore, currentUpgradeAmount) {
    return (parseInt(currentScore.innerHTML) + parseInt(currentUpgradeAmount.innerHTML));
}

function addTotalScore(currentTotalScore, currentUpgradeAmount) {
    return (parseInt(currentTotalScore.innerHTML) + parseInt(currentUpgradeAmount.innerHTML));
}



//Adds the event listeners to the unit buttons
function addUnitButtons() {
    if (this.getAttribute('data-unit') === "1") {
        let currentUnit1Amount = parseInt(document.getElementById('unit-1-amount').innerHTML);
        unit1Amount.innerHTML = (currentUnit1Amount + 1);
    } else if (this.getAttribute('data-unit') === "2") {
        let currentUnit2Amount = parseInt(document.getElementById('unit-2-amount').innerHTML);
        unit2Amount.innerHTML = (currentUnit2Amount + 1);
    } else if (this.getAttribute('data-unit') === "3") {
        let currentUnit3Amount = parseInt(document.getElementById('unit-3-amount').innerHTML);
        unit3Amount.innerHTML = (currentUnit3Amount + 1);
    }
}

//Function for buying sword upgrades
function buyUpgrade(currentUpgradeAmount, currentUpgradePrice, currentScore) {
    if(parseInt(currentScore.innerHTML)>= parseInt(currentUpgradePrice.innerHTML)){
        currentScore.innerHTML -= parseInt(currentUpgradePrice.innerHTML);
        currentUpgradePrice.innerHTML = Math.floor(parseInt(currentUpgradePrice.innerHTML)* 1.2);
        return (parseInt(currentUpgradeAmount.innerHTML) + 1);
    }
    else {
        return (parseInt(currentUpgradeAmount.innerHTML));
    }
}   