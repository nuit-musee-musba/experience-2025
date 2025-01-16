import { questions } from './questions.js';
import { score1, score2, incrementScore, updateScores } from './scores.js';
import { startTimer, stopTimer } from './timer.js';
import { StepsDisplay } from "/commons/components/StepsDisplay";

const Step = document.querySelector('.contener-step');
const stepsDisplay = new StepsDisplay(0, 8, '.contener-step', Step);

let currentQuestion = 0;
let activePlayer = 1;
let startingPlayer = 1;
let hasAnswered = false;
let showingAnswer = false;
let selectedDifficulty = null;
let HaveselectedDifficulty = 0;
let HaveFinishQuestions = 0;
let shuffledQuestions = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeGame() {
    shuffledQuestions = [...questions];
    shuffleArray(shuffledQuestions);
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

    // Charger le média (image ou vidéo) dans le conteneur média
    loadMediaToResponseMedia(question.responseDetails.media);

    document.getElementById("responce-contener").style.display = "flex";

    stopTimer();
    timerEl.style.display = "none";
}

function loadMediaToResponseMedia() {

    let q = shuffledQuestions[currentQuestion];
    if (q.cartel) {
        q.cartel.forEach(cartelItem => {
            const element = document.getElementById(cartelItem.id + "Responce");
            if (element) {
                element.textContent = cartelItem.text;

                if (q.hide && q.hide.includes(cartelItem.id)) {
                    element.style.color = "red";
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
        responseTitleContainer.textContent = `Bien joué Joueur ${player} !`;
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

    document.getElementById("easy-btn").addEventListener("click", () => {
        startQuestionWithDifficulty(
            "easy",
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
    });

    document.getElementById("medium-btn").addEventListener("click", () => {
        startQuestionWithDifficulty(
            "medium",
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
    });

    document.getElementById("hard-btn").addEventListener("click", () => {
        startQuestionWithDifficulty(
            "hard",
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
    });
}


function startQuestionWithDifficulty(difficulty, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton) {
    selectedDifficulty = difficulty;
    timerEl.textContent = "20";
    document.getElementById('answers-container').style.display = 'flex';
    document.getElementById('difficulty-selector').style.display = 'none';
    loadQuestion(questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
    startTimer(timerEl, () => handleTimeout(activePlayerEl, timerEl, score1El, score2El, questionEl, btnA, btnB, btnC, btnD, mediaContainerDiv, nextButton));
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
        return; // Stop here to wait for difficulty selection
    }

    let selectedDiff = q.difficulties[selectedDifficulty];
    questionEl.textContent = q.question;
    let choices = selectedDiff.choices;
    btnA.innerHTML = `<img src="${choices[0].image}"/><span>${choices[0].text}</span>`;
    btnB.innerHTML = `<img src="${choices[1].image}"/><span>${choices[1].text}</span>`;
    btnC.innerHTML = `<img src="${choices[2].image}"/><span>${choices[2].text}</span>`;
    btnD.innerHTML = `<img src="${choices[3].image}"/><span>${choices[3].text}</span>`;

    loadMedia(mediaContainerDiv, q.media);

    activePlayer = startingPlayer;
    startingPlayer = startingPlayer === 1 ? 2 : 1;
    hasAnswered = false;
    activePlayerEl.textContent = activePlayer;

    let event = new CustomEvent('questionLoaded', {
        detail: { currentQuestionIndex: currentQuestion },
    });
    document.dispatchEvent(event);
}

function handleTimeout(activePlayerEl, timerEl, score1El, score2El, questionEl, btnA, btnB, btnC, btnD, mediaContainerDiv, nextButton) {
    if (!hasAnswered) {
        activePlayer = activePlayer === 1 ? 2 : 1;
        activePlayerEl.textContent = activePlayer;
        startTimer(timerEl, () => nextTurn(false, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton));
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
    let correct = questions[currentQuestion].difficulties[selectedDifficulty].correct;

    if (choice === correct) {
        incrementScore(activePlayer, selectedDifficulty);
        updateScores(score1El, score2El);
        updateResponseTitle(true, activePlayer);

        nextTurn(true, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
    } else {
        if (choice === "A") btnA.style.display = "none";
        else if (choice === "B") btnB.style.display = "none";
        else if (choice === "C") btnC.style.display = "none";
        else if (choice === "D") btnD.style.display = "none";

        if (!hasAnswered) {
            hasAnswered = true;
            activePlayer = activePlayer === 1 ? 2 : 1;
            activePlayerEl.textContent = activePlayer;

            updateResponseTitle(false);

            startTimer(timerEl, () =>
                handleTimeout(
                    activePlayerEl,
                    timerEl,
                    score1El,
                    score2El,
                    questionEl,
                    btnA,
                    btnB,
                    btnC,
                    btnD,
                    mediaContainerDiv,
                    nextButton
                )
            );
        } else {
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
    timerEl.style.display = "flex"

    if (currentQuestion < questions.length) {
        HaveFinishQuestions = 0;
        loadQuestion(questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
    }
}
if(stepsDisplay.CurrentStep.textContent == 9){
    document.getElementById("endGame").style.display = "flex";
}

initializeGame();