let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
	const finalChoice = userChoice + computerChoice;

    if (finalChoice === 'rockscissors' || finalChoice === 'paperrock' || finalChoice === 'scissorspaper') {
        userWins();
    } else if (finalChoice === 'rockpaper' || finalChoice === 'paperscissors' || finalChoice === 'scissorsrock') {
        computerWins();
    } else {
        draw();
    }


    updateUserChoice(userChoice);
	updateBotChoice(computerChoice);
}

function userWins() {
    userScore++;
    updateScore('Győzelem');
}

function computerWins() {
    computerScore++;
    updateScore('Vereség');
}

function draw() {
    updateScore('Döntetlen');
}

function updateScore(result) {
    document.getElementById('bot-score').innerHTML = '<b>' + `BOT - ${computerScore}` + '</b>';
	document.getElementById('user-score').innerHTML = '<b>' + `${userScore} - User` + '</b>';
	switch (result) {
	    case 'Győzelem'  : document.getElementById('result').style.color = '#32FF00'; break;
		case 'Vereség'   : document.getElementById('result').style.color = '#FF1E1E'; break;
		case 'Döntetlen' : document.getElementById('result').style.color = '#FFE60A'; break;
	}
    document.getElementById('result').innerHTML = '<b>' + `${result}` + '</b>';
}
		
		
function updateUserChoice(userChoice) {
    const userChoiceImg = document.createElement('img');
    userChoiceImg.src = `${userChoice}.png`;
    userChoiceImg.alt = userChoice;
    userChoiceImg.classList.add('choice-image');
    /*
	const userChoiceText = document.createElement('div');
	switch (userChoice) {
	    case 'rock'     : userChoiceText.innerText = 'Kő';    break;
		case 'paper'    : userChoiceText.innerText = 'Papír'; break;
		case 'scissors' : userChoiceText.innerText = 'Olló';  break;
	}
    userChoiceText.classList.add('choice-text');
	*/
    document.getElementById('user-choice').innerHTML = '';
    document.getElementById('user-choice').appendChild(userChoiceImg);
    //document.getElementById('user-choice').appendChild(userChoiceText);
}
		
function updateBotChoice(computerChoice) {
    const botChoiceImg = document.createElement('img');
    botChoiceImg.src = `${computerChoice}.png`;
    botChoiceImg.alt = computerChoice;
    botChoiceImg.classList.add('choice-image');
	/*
    const botChoiceText = document.createElement('div');
	switch (computerChoice) {
	    case 'rock'     : botChoiceText.innerText = 'Kő';    break;
		case 'paper'    : botChoiceText.innerText = 'Papír'; break;
		case 'scissors' : botChoiceText.innerText = 'Olló';  break;
    }
    botChoiceText.classList.add('choice-text');
	*/
    document.getElementById('bot-choice').innerHTML = '';
    document.getElementById('bot-choice').appendChild(botChoiceImg);
    //document.getElementById('bot-choice').appendChild(botChoiceText);
}
