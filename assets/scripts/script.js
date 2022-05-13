document.addEventListener("DOMContentLoaded", function () {
    const mainButton = document.getElementById('main-button');
    const score = document.getElementById('score');
    const totalScore = document.getElementById('total-score');
    const unitButtons = document.getElementsByClassName('unit-button');
    const peasantAmount = document.getElementById('peasant-amount');
    const peasantPrice = document.getElementById('peasant-price');
    const soldierAmount = document.getElementById('soldier-amount');
    const soldierPrice = document.getElementById('soldier-price');
    const paladinAmount = document.getElementById('paladin-amount');
    const paladinPrice = document.getElementById('paladin-price');
    const upgradeButton = document.getElementById('upgrade-button');
    const upgradeAmount = document.getElementById('upgrade-amount');
    const upgradePrice = document.getElementById('upgrade-price');
    const perSecond = document.getElementById('per-second');
    const smashAudio = document.getElementById('smash-audio');
    const buyItemAudio =document.getElementById('buy-item-audio');
    const screamAudio =document.getElementById('scream-audio');
    let screamCounter=true;

    mainButton.addEventListener('click', function () {
        score.innerHTML = addScore(score, upgradeAmount);
        totalScore.innerHTML = addTotalScore(totalScore, upgradeAmount);
        if(screamCounter) {
            screamAudio.play();
            screamCounter=false;
        }
        else {
            smashAudio.play();
        }
        
    });


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
    window.setInterval(updateDPS, (1000/60));
    

    function incrementScore() {
        let currentScore = parseInt(score.innerHTML);
        let totalCurrentScore = parseInt(totalScore.innerHTML);
        score.innerHTML = (currentScore + parseInt(peasantAmount.innerHTML) + parseInt((soldierAmount.innerHTML) * 10) + parseInt((paladinAmount.innerHTML) * 100));
        totalScore.innerHTML = (totalCurrentScore + parseInt(peasantAmount.innerHTML) + parseInt((soldierAmount.innerHTML) * 10) + parseInt((paladinAmount.innerHTML) * 100));
    }

    function updateDPS() {
        perSecond.innerHTML =(parseInt(peasantAmount.innerHTML) + parseInt((soldierAmount.innerHTML) * 10) + parseInt((paladinAmount.innerHTML) * 100));
    }




})

//Functions that are called when the button is clicked

function addScore(currentScore, currentUpgradeAmount) {
    return (parseInt(currentScore.innerHTML) + parseInt(currentUpgradeAmount.innerHTML) +5000);
}

function addTotalScore(currentTotalScore, currentUpgradeAmount) {
    return (parseInt(currentTotalScore.innerHTML) + parseInt(currentUpgradeAmount.innerHTML));
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