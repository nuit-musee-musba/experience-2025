import { questions } from './questions.js';
import { score1, score2, incrementScore, updateScores } from './scores.js';
import { startTimer, stopTimer } from './timer.js';
import { StepsDisplay } from "/commons/components/StepsDisplay";

const Step = document.querySelector('.contener-step');
const stepsDisplay = new StepsDisplay(0, 8, '.contener-step', Step);
const correctSound = new Audio('sound/SUCCESS.wav');
const wrongSound = new Audio('sound/WRONG.wav');

let questionInProgress = 0;

let playerNoWin = 0;
let currentQuestion = 0;
let activePlayer = 1;
let startingPlayer = 1;
let hasAnswered = false;
let showingAnswer = false;
let selectedDifficulty = null;
let HaveselectedDifficulty = 0;
let HaveFinishQuestions = 0;
let shuffledQuestions = [];
let lastStartingPlayer = 1;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeGame() {
    shuffledQuestions = [...questions];
    shuffleArray(shuffledQuestions);
    updatePlayerClasses(activePlayer);
    const player1Div = document.getElementById("player1");
    const player2Div = document.getElementById("player2");

    player1Div.classList.add('player-active');
    player2Div.classList.add('player-inactive');
}


function loadMedia(mediaContainerDiv, media) {
    mediaContainerDiv.innerHTML = '';
    if (media) {
        if (media.endsWith('.jpg') || media.endsWith('.png') || media.endsWith('.jpeg')) {
            let img = document.createElement('img');
            img.src = media;
            mediaContainerDiv.appendChild(img);
        } else if (media.endsWith('.mp4') || media.endsWith('.mov') || media.endsWith('.webm')) {
            let video = document.createElement('video');
            video.src = media;
            video.controls = true;
            mediaContainerDiv.appendChild(video);
        }
    }
}

export function showAnswer(
    questionEl,
    mediaContainerDiv,
    btnA,
    btnB,
    btnC,
    btnD,
    nextButton,
    timerEl
) {
    let question = shuffledQuestions[currentQuestion];
    showingAnswer = true;


    document.getElementById("response-text").textContent = question.responseDetails.text;

    loadMediaToResponseMedia(question.responseDetails.media);

    document.getElementById("responce-contener").style.display = "flex";

    stopTimer();

}

function loadMediaToResponseMedia() {

    let q = shuffledQuestions[currentQuestion];
    if (q.cartel) {
        q.cartel.forEach(cartelItem => {
            const element = document.getElementById(cartelItem.id + "Responce");
            if (element) {
                element.textContent = cartelItem.text;

                if (q.hide && q.hide.includes(cartelItem.id)) {
                    if (activePlayer == 1 && playerNoWin == 1) {
                        element.style.color = "#741CA1";
                    } else if (activePlayer == 2 && playerNoWin == 1) {
                        element.style.color = "#C05825";
                    }
                    else if (playerNoWin == 0) {
                        element.style.color = "#C70003";
                    }
                } else {
                    element.style.color = "";
                }
            }
        });
    }
}
function updateResponseTitle(isCorrect, player) {
    const responseTitleContainer = document.querySelector(".responce-title-contener h3");

    if (isCorrect) {

        if (playerNoWin == 0) {
            responseTitleContainer.textContent = "Dommage";
        }
        else {
            responseTitleContainer.textContent = `Bien joué Joueur ${player} !`;
        }
    } else {
        responseTitleContainer.textContent = "Dommage";
    }
}

function askForDifficulty(
    questionEl,
    btnA,
    btnB,
    btnC,
    btnD,
    activePlayerEl,
    mediaContainerDiv,
    timerEl,
    score1El,
    score2El,
    nextButton
) {

    if (stepsDisplay.CurrentStep.textContent == 8) {
        document.getElementById("endGame").style.display = "block";
        stopTimer();
        const playerScores = {
            "Joueur 1": parseInt(document.getElementById("score1").textContent, 10),
            "Joueur 2": parseInt(document.getElementById("score2").textContent, 10),
        };

        displayScores(playerScores);
    }

    let q = shuffledQuestions[currentQuestion];
    questionEl.textContent = q.question;

    mediaContainerDiv.innerHTML = '';
    if (q.media) {
        if (q.media.endsWith('.jpg') || q.media.endsWith('.png') || q.media.endsWith('.jpeg')) {
            let img = document.createElement('img');
            img.src = q.media;
            mediaContainerDiv.appendChild(img);
        } else if (q.media.endsWith('.mp4') || q.media.endsWith('.mov') || q.media.endsWith('.webm')) {
            let video = document.createElement('video');
            video.src = q.media;
            video.controls = true;
            mediaContainerDiv.appendChild(video);
        }
    }

    const cartelInfoDiv = document.getElementById("cartelInfo");
    cartelInfoDiv.style.display = "block";
    if (q.cartel) {
        q.cartel.forEach(cartelItem => {
            const element = document.getElementById(cartelItem.id);
            if (element) {
                element.textContent = cartelItem.text;

                if (q.hide && q.hide.includes(cartelItem.id)) {
                    element.style.backgroundColor = "black";
                } else {
                    element.style.backgroundColor = "";
                }
            }
        });
    }

    document.getElementById("difficulty-selector").style.display = "flex";
    document.getElementById("answers-container").style.display = "none";

    stepsDisplay.increment(1);

    document.getElementById("easy-btn").replaceWith(document.getElementById("easy-btn").cloneNode(true));
    document.getElementById("medium-btn").replaceWith(document.getElementById("medium-btn").cloneNode(true));
    document.getElementById("hard-btn").replaceWith(document.getElementById("hard-btn").cloneNode(true));

    document.getElementById("easy-btn").addEventListener("click", () => {
        updateBackground("easy");
        showContinueButton();
    });

    document.getElementById("medium-btn").addEventListener("click", () => {
        updateBackground("medium")
        showContinueButton();
    });

    document.getElementById("hard-btn").addEventListener("click", () => {
        updateBackground("hard");
        showContinueButton();
    });

    function showContinueButton() {
        const continueBtn = document.getElementById("continuerDifficulty");
        continueBtn.style.display = "block";

        continueBtn.onclick = null;
        continueBtn.onclick = () => {
            startQuestionWithDifficulty(selectedDifficulty, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
            continueBtn.style.display = "none";
        };

    }

    function updateBackground(difficulty) {
        const btnDifficultyEs = document.getElementById("btnDifficultyEs");
        const btnDifficultyMedium = document.getElementById("btnDifficultyMedium");
        const btnDifficultyHard = document.getElementById("btnDifficultyHard");

        if (difficulty === "easy") {
            btnDifficultyEs.classList.add("btnDifficultyValidate");
            btnDifficultyMedium.classList.remove("btnDifficultyValidate");
            btnDifficultyHard.classList.remove("btnDifficultyValidate");
        } else if (difficulty === "medium") {
            btnDifficultyEs.classList.remove("btnDifficultyValidate");
            btnDifficultyMedium.classList.add("btnDifficultyValidate");
            btnDifficultyHard.classList.remove("btnDifficultyValidate")
        } else if (difficulty === "hard") {
            btnDifficultyEs.classList.remove("btnDifficultyValidate");
            btnDifficultyMedium.classList.remove("btnDifficultyValidate");
            btnDifficultyHard.classList.add("btnDifficultyValidate")
        }

        selectedDifficulty = difficulty;
    }
}



function startQuestionWithDifficulty(difficulty, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton) {
    const btnDifficultyEs = document.getElementById("btnDifficultyEs");
    const btnDifficultyMedium = document.getElementById("btnDifficultyMedium");
    const btnDifficultyHard = document.getElementById("btnDifficultyHard");
    btnDifficultyEs.classList.remove("btnDifficultyValidate");
    btnDifficultyMedium.classList.remove("btnDifficultyValidate");
    btnDifficultyHard.classList.remove("btnDifficultyValidate")
    questionInProgress = true;
    selectedDifficulty = difficulty;
    timerEl.textContent = "20";
    document.getElementById('answers-container').style.display = 'flex';
    document.getElementById('difficulty-selector').style.display = 'none';
    loadQuestion(questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);


    startTimer(timerEl, () => {
        handleTimeout(activePlayerEl, timerEl, score1El, score2El, questionEl, btnA, btnB, btnC, btnD, mediaContainerDiv, nextButton);
        questionInProgress = false;
    });
}


export function loadQuestion(
    questionEl,
    btnA,
    btnB,
    btnC,
    btnD,
    activePlayerEl,
    mediaContainerDiv,
    timerEl,
    score1El,
    score2El,
    nextButton
) {



    btnA.style.display = "block";
    btnB.style.display = "block";
    btnC.style.display = "block";
    btnD.style.display = "block";

    if (HaveFinishQuestions === 0) {
        HaveFinishQuestions = 1;
        HaveselectedDifficulty = 0;
    }


    let q = shuffledQuestions[currentQuestion];
    if (HaveselectedDifficulty === 0) {
        askForDifficulty(questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
        HaveselectedDifficulty = 1;
        return;
    }

    let selectedDiff = q.difficulties[selectedDifficulty];
    questionEl.textContent = q.question;
    let choices = selectedDiff.choices;
    btnA.innerHTML = `<img src="${choices[0].image}"/><span>${choices[0].text}</span>`;
    btnB.innerHTML = `<img src="${choices[1].image}"/><span>${choices[1].text}</span>`;
    btnC.innerHTML = `<img src="${choices[2].image}"/><span>${choices[2].text}</span>`;
    btnD.innerHTML = `<img src="${choices[3].image}"/><span>${choices[3].text}</span>`;

    loadMedia(mediaContainerDiv, q.media);
    hasAnswered = false;

    updatePlayerClasses(activePlayer);
    let event = new CustomEvent('questionLoaded', {
        detail: { currentQuestionIndex: currentQuestion },
    });
    document.dispatchEvent(event);
}

function handleTimeout(activePlayerEl, timerEl, score1El, score2El, questionEl, btnA, btnB, btnC, btnD, mediaContainerDiv, nextButton) {
    if (!hasAnswered) {
        activePlayer = activePlayer === 1 ? 2 : 1;

        const nextTurnPlayerDiv = document.getElementById("NextTurnPlayer");
        const nextTurnPlayerName = document.getElementById("NextTurnPlayerName");
        const nextTurnPlayerStart = document.getElementById("NextTurnPlayerStart");
        const backgroundNextTurnPlayer = document.getElementById("backgroundNextTurnPlayer");
        backgroundNextTurnPlayer.style.display = "flex";
        nextTurnPlayerName.textContent = `Au tour du Joueur ${activePlayer} !`;
        nextTurnPlayerDiv.style.display = "flex";

        if (activePlayer === 2) {
            backgroundNextTurnPlayer.style.background = "rgba(185, 145, 205, 0.40)";
        } else if (activePlayer === 1) {
            backgroundNextTurnPlayer.style.background = "rgba(242, 168, 132, 0.40)";
        }

        nextTurnPlayerStart.onclick = () => {
            backgroundNextTurnPlayer.style.display = "none";
            nextTurnPlayerDiv.style.display = "none";
            activePlayerEl.textContent = activePlayer;
            updatePlayerClasses(activePlayer);
            startTimer(timerEl, () => nextTurn(false, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton));
        };
    } else {
        nextTurn(false, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
    }
}


export function handleAnswer(
    choice,
    questionEl,
    btnA,
    btnB,
    btnC,
    btnD,
    activePlayerEl,
    mediaContainerDiv,
    timerEl,
    score1El,
    score2El,
    nextButton
) {
    let correct = shuffledQuestions[currentQuestion].difficulties[selectedDifficulty].correct;

    playerNoWin = 0;
    if (choice === correct) {
        correctSound.play();
        playerNoWin = 1;
        incrementScore(activePlayer, selectedDifficulty);
        updateScores(score1El, score2El);
        updateResponseTitle(true, activePlayer);

        nextTurn(true, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
    } else {
        wrongSound.play();

        playerNoWin = 0;
        if (choice === "A") btnA.style.display = "none";
        else if (choice === "B") btnB.style.display = "none";
        else if (choice === "C") btnC.style.display = "none";
        else if (choice === "D") btnD.style.display = "none";

        if (!hasAnswered) {
            hasAnswered = true;
            activePlayer = activePlayer === 1 ? 2 : 1;
            activePlayerEl.textContent = activePlayer;
            const nextTurnPlayerDiv = document.getElementById("NextTurnPlayer");
            const nextTurnPlayerName = document.getElementById("NextTurnPlayerName");
            const nextTurnPlayerStart = document.getElementById("NextTurnPlayerStart");
            const backgroundNextTurnPlayer = document.getElementById("backgroundNextTurnPlayer");
            backgroundNextTurnPlayer.style.display = "flex";
            nextTurnPlayerName.textContent = `Au tour du Joueur ${activePlayer} !`;
            nextTurnPlayerDiv.style.display = "flex";

            if (activePlayer === 2) {
                backgroundNextTurnPlayer.style.background = "rgba(185, 145, 205, 0.40)";
            } else if (activePlayer === 2) {
                backgroundNextTurnPlayer.style.background = "rgba(242, 168, 132, 0.40)";
            }

            nextTurnPlayerStart.onclick = () => {
                backgroundNextTurnPlayer.style.display = "none";
                nextTurnPlayerDiv.style.display = "none";
                activePlayerEl.textContent = activePlayer;
                updatePlayerClasses(activePlayer);
                updateResponseTitle(false);
                startTimer(timerEl, () => nextTurn(false, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton));
            };
            stopTimer();
        } else {
            activePlayer = activePlayer === 1 ? 2 : 1;
            showingAnswer = false;
            nextTurn(
                false,
                questionEl,
                btnA,
                btnB,
                btnC,
                btnD,
                activePlayerEl,
                mediaContainerDiv,
                timerEl,
                score1El,
                score2El,
                nextButton
            );
        }
    }
}



export function nextTurn(isCorrect, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton) {
    if (!showingAnswer) {
        showAnswer(questionEl, mediaContainerDiv, btnA, btnB, btnC, btnD, nextButton, timerEl);
        return;
    }

    showingAnswer = false;
    currentQuestion++;
    document.getElementById("responce-contener").style.display = "none";

    if (currentQuestion < questions.length) {

        activePlayer = lastStartingPlayer === 1 ? 2 : 1;
        lastStartingPlayer = activePlayer;

        activePlayerEl.textContent = activePlayer;

        HaveFinishQuestions = 0;
        updatePlayerClasses(activePlayer);
        loadQuestion(questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
    }
}


function displayScores(playerScores) {
    const playerScorbord = document.getElementById("playerScorbord");
    playerScorbord.innerHTML = '';
    const sortedScores = Object.entries(playerScores).sort(([, scoreA], [, scoreB]) => scoreB - scoreA);

    const [winner, winnerScore] = sortedScores[0];
    const winnerClass = winner === "Joueur 1" ? "winner-player1" : "winner-player2";

    sortedScores.forEach(([player, score], index) => {
        const playerScoreDiv = document.createElement("div");
        playerScoreDiv.classList.add("stats-display");

        const isWinner = player === winner;

        if (index === 0) {
            playerScoreDiv.classList.add("leader");
            if (isWinner) {
                playerScoreDiv.classList.add(winnerClass);
            }
        } else {
            const loserClass = player === "Joueur 1" ? "loser-player1" : "loser-player2";
            playerScoreDiv.classList.add(loserClass);
        }

        playerScoreDiv.innerHTML = `
            <div class="score-container" style="width:200px; text-align: center;">
                <h3 class="typo-h3-helvetica">${index + 1 + " e"}</h3>
            </div>
            <div class="title-container" style="width: 360px">
                <h3 class="typo-h3-helvetica">${player}</h3>
            </div>
            <div class="score-container" style="width: 300px">
                <h3 class="typo-h3-helvetica">${score} pts</h3>
            </div>
        `;

        playerScorbord.appendChild(playerScoreDiv);
    });

    updateVictoryMessage(playerScores);
}


function updateVictoryMessage(playerScores) {
    const victoryMessageEl = document.getElementById("victory-message");
    if (!victoryMessageEl) return;
    const sortedScores = Object.entries(playerScores).sort(([, scoreA], [, scoreB]) => scoreB - scoreA);
    const [winner, score] = sortedScores[0];

    victoryMessageEl.textContent = `Bravo ${winner} pour ta victoire !`;
}

function updatePlayerClasses(activePlayer) {
    const player1Div = document.getElementById("player1");
    const player2Div = document.getElementById("player2");
    const bodyGame = document.getElementById("body-game");
    const responceContener = document.getElementById("responce-contener");
    const activePlayerPosition = document.getElementById("activePlayer");

    bodyGame.classList.remove('player-active-background1', 'player-active-background2');
    player1Div.classList.remove('player-active', 'player-active1', 'player-inactive');
    player2Div.classList.remove('player-active', 'player-active2', 'player-inactive');
    responceContener.classList.remove('color-responce-answer-player1', 'color-responce-answer-player2');
    if (activePlayer === 1) {
        bodyGame.classList.add('player-active-background1');
        player1Div.classList.add('player-active1');
        player2Div.classList.add('player-inactive');
        responceContener.classList.add('color-responce-answer-player1')
        activePlayerPosition.style.top = "100px";
    } else if (activePlayer === 2) {
        bodyGame.classList.add('player-active-background2');
        player1Div.classList.add('player-inactive');
        player2Div.classList.add('player-active2');
        responceContener.classList.add('color-responce-answer-player2')
        activePlayerPosition.style.top = "220px";
    }
}



initializeGame();