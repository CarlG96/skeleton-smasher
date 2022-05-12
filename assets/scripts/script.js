document.addEventListener("DOMContentLoaded", function () {
    let mainButton = document.getElementById('main-button');
    let score = document.getElementById('score');
    let totalScore = document.getElementById('total-score');
    let upgradeButtons = document.getElementsByClassName('upgrade-button');
    let upgrade1Amount = document.getElementById('upgrade-1-amount');
    let upgrade2Amount = document.getElementById('upgrade-2-amount');
    let upgrade3Amount = document.getElementById('upgrade-3-amount');
    let upgrade4Amount = document.getElementById('upgrade-4-amount');
    let upgrade5Amount = document.getElementById('upgrade-5-amount');

    mainButton.addEventListener('click', function () {
        let currentScore = parseInt(score.innerHTML);
        score.innerHTML = (currentScore + 1);
        totalScore.innerHTML = (currentScore + 1);
    })

    for (button of upgradeButtons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-upgrade') === "1") {
                let currentUpgrade1Amount = parseInt(document.getElementById('upgrade-1-amount').innerHTML);
                upgrade1Amount.innerHTML = (currentUpgrade1Amount + 1);
            } else if (this.getAttribute('data-upgrade') === "2") {
                let currentUpgrade2Amount = parseInt(document.getElementById('upgrade-2-amount').innerHTML);
                upgrade2Amount.innerHTML = (currentUpgrade2Amount + 1);
            } else if (this.getAttribute('data-upgrade') === "3") {
                let currentUpgrade3Amount = parseInt(document.getElementById('upgrade-3-amount').innerHTML);
                upgrade3Amount.innerHTML = (currentUpgrade3Amount + 1);
            } else if (this.getAttribute('data-upgrade') === "4") {
                let currentUpgrade4Amount = parseInt(document.getElementById('upgrade-4-amount').innerHTML);
                upgrade4Amount.innerHTML = (currentUpgrade4Amount + 1);
            } else {
                let currentUpgrade5Amount = parseInt(document.getElementById('upgrade-5-amount').innerHTML);
                upgrade5Amount.innerHTML = (currentUpgrade5Amount + 1);
            }
        })
    }

    window.setInterval(incrementScore, 1000)

    function incrementScore() {
        let currentScore = parseInt(score.innerHTML);
        score.innerHTML = (currentScore + parseInt(upgrade1Amount.innerHTML) + parseInt((upgrade2Amount.innerHTML) * 10) + parseInt((upgrade3Amount.innerHTML)*100));
        totalScore.innerHTML = (currentScore + parseInt(upgrade1Amount.innerHTML) + parseInt((upgrade2Amount.innerHTML) * 10) + parseInt((upgrade3Amount.innerHTML)*100));
    }

    
    
})