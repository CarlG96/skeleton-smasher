document.addEventListener("DOMContentLoaded", function () {
    const mainButton = document.getElementById('main-button');
    const score = document.getElementById('score');
    const totalScore = document.getElementById('total-score');
    const unitButtons = document.getElementsByClassName('unit-button');
    const unit1Amount = document.getElementById('unit-1-amount');
    const unit2Amount = document.getElementById('unit-2-amount');
    const unit3Amount = document.getElementById('unit-3-amount');
    

    mainButton.addEventListener('click', function () {
        let currentScore = parseInt(score.innerHTML);
        score.innerHTML = (currentScore + 1);
        totalScore.innerHTML = (currentScore + 1);
    })

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
        })
    }

    window.setInterval(incrementScore, 1000)

    function incrementScore() {
        let currentScore = parseInt(score.innerHTML);
        score.innerHTML = (currentScore + parseInt(unit1Amount.innerHTML) + parseInt((unit2Amount.innerHTML) * 10) + parseInt((unit3Amount.innerHTML)*100));
        totalScore.innerHTML = (currentScore + parseInt(unit1Amount.innerHTML) + parseInt((unit2Amount.innerHTML) * 10) + parseInt((unit3Amount.innerHTML)*100));
    }

    
    
})