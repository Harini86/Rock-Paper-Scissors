
let wins = 0;
let losses = 0;
let ties = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultMessage = document.getElementById('result-message');
    const winCount = document.getElementById('win-count');
    const loseCount = document.getElementById('lose-count');
    const tieCount = document.getElementById('tie-count');

    let result;

    if (userChoice === computerChoice) {
        result = "It's a tie!";
        ties++;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        wins++;
    } else {
        result = 'You lose!';
        losses++;
    }


    resultMessage.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
    winCount.textContent = `Wins: ${wins}`;
    loseCount.textContent = `Losses: ${losses}`;
    tieCount.textContent = `Ties: ${ties}`;
}
