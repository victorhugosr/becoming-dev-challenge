let currentDate = new Date();
let dayCounter = 0;
let challengeActive = false

function updateChallengeText(){
    const formattedDate = currentDate.toLocaleDateString();
    document.getElementById('challenge-text').textContent = `${formattedDate} - Day ${dayCounter} of the challenge`;
}

updateChallengeText();