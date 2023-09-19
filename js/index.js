let currentDate = new Date();
let dayCounter = 0;
let challengeActive = false

function updateChallengeText(){
    const formattedDate = currentDate.toLocaleDateString();
    document.getElementById('challenge-text').textContent = `${formattedDate} - Day ${dayCounter} of the challenge`;
}

function toggleChallenge() {
    const button = document.getElementById('challenge-button');

    if (!challengeActive) {
        challengeActive = true;
        button.textContent = 'CANCEL CHALLENGE'
        document.getElementById('challenge-status').textContent = 'Pressione para cancelar o desafio';

        dayCounter = 1;
        updateChallengeText();

        challengeInterval = setInterval(function (){
            dayCounter++;
            updateChallengeText();
        }, 86400000); //86400000 é a quantidade de milissegundos em um dia.
    } else {
        challengeActive = false;
        button.textContent = 'START CHALLENGE';
        document.getElementById('challenge-status').textContent = 'Pressione para começar o desafio';

        clearInterval(challengeInterval);
        dayCounter = 0;
        updateChallengeText();
    }

}

updateChallengeText();