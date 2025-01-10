import { questions } from './questions.js';
import { score1, score2, incrementScore, updateScores } from './scores.js';
import { startTimer, stopTimer } from './timer.js';

let currentQuestion = 0;
let activePlayer = 1;
let startingPlayer = 1;
let hasAnswered = false;
let showingAnswer = false;
let selectedDifficulty = null;
let HaveselectedDifficulty = 0;
let HaveFinishQuestions = 0;

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
    const question = questions[currentQuestion];
    showingAnswer = true;

    questionEl.textContent = question.responseDetails.text;

    mediaContainerDiv.innerHTML = '';

    if (question.responseDetails.media) {
        if (
            question.responseDetails.media.endsWith('.jpg') ||
            question.responseDetails.media.endsWith('.png') ||
            question.responseDetails.media.endsWith('.jpeg')
        ) {
            const img = document.createElement('img');
            img.src = question.responseDetails.media;
            mediaContainerDiv.appendChild(img);
        } else if (
            question.responseDetails.media.endsWith('.mp4') ||
            question.responseDetails.media.endsWith('.webm')
        ) {
            const video = document.createElement('video');
            video.src = question.responseDetails.media;
            video.controls = true;
            mediaContainerDiv.appendChild(video);
        }
    }

    const answersContainer = document.getElementById("answers-container");
    
    answersContainer.style.display = "none"; 

    nextButton.style.display = "block";

    stopTimer();
    timerEl.textContent = "";
}
function askForDifficulty(questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton) {

    document.getElementById('difficulty-selector').style.display = 'block';

    document.getElementById('easy-btn').addEventListener("click", () => {
        selectedDifficulty = "easy";
        document.getElementById('difficulty-selector').style.display = 'none';
        loadQuestion(questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
    });

    document.getElementById('medium-btn').addEventListener("click", () => {
        selectedDifficulty = "medium";
        document.getElementById('difficulty-selector').style.display = 'none';
        loadQuestion(questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
    });

    document.getElementById('hard-btn').addEventListener("click", () => {
        selectedDifficulty = "hard";
        document.getElementById('difficulty-selector').style.display = 'none';
        loadQuestion(questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
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
    if(HaveFinishQuestions === 0){
        HaveFinishQuestions = 1 ;
        HaveselectedDifficulty = 0 ;
    }
    
    const q = questions[currentQuestion];
    if (HaveselectedDifficulty === 0) {
        askForDifficulty(questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
        HaveselectedDifficulty = 1;
    }

    const selectedDiff = q.difficulties[selectedDifficulty];
    questionEl.textContent = q.question;
    const choices = selectedDiff.choices;
    btnA.textContent = choices[0];
    btnB.textContent = choices[1];
    btnC.textContent = choices[2];
    btnD.textContent = choices[3];

    mediaContainerDiv.innerHTML = '';

    if (q.media) {
        if (q.media.endsWith('.jpg') || q.media.endsWith('.png') || q.media.endsWith('.jpeg')) {
            const img = document.createElement('img');
            img.src = q.media;
            mediaContainerDiv.appendChild(img);
        } else if (q.media.endsWith('.mp4') || q.media.endsWith('.webm')) {
            const video = document.createElement('video');
            video.src = q.media;
            video.controls = true;
            mediaContainerDiv.appendChild(video);
        }
    }

    activePlayer = startingPlayer;
    startingPlayer = startingPlayer === 1 ? 2 : 1;
    hasAnswered = false;
    activePlayerEl.textContent = activePlayer;

    startTimer(timerEl, () => handleTimeout(activePlayerEl, timerEl, score1El, score2El, questionEl, btnA, btnB, btnC, btnD, mediaContainerDiv, nextButton));
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
    // Utilisation correcte de 'selectedDifficulty'
    const correct = questions[currentQuestion].difficulties[selectedDifficulty].correct;

    if (choice === correct) {
        incrementScore(activePlayer);
        updateScores(score1El, score2El);
        nextTurn(true, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
    } else {
        if (!hasAnswered) {
            hasAnswered = true;
            activePlayer = activePlayer === 1 ? 2 : 1;
            activePlayerEl.textContent = activePlayer;
            startTimer(timerEl, () => handleTimeout(activePlayerEl, timerEl, score1El, score2El, questionEl, btnA, btnB, btnC, btnD, mediaContainerDiv, nextButton));
        } else {
            showingAnswer = false;
            nextTurn(false, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton);
        }
    }
}


export function nextTurn(isCorrect, questionEl, btnA, btnB, btnC, btnD, activePlayerEl, mediaContainerDiv, timerEl, score1El, score2El, nextButton) {
    if (!showingAnswer) {
        showAnswer(
            questionEl,
            mediaContainerDiv,
            btnA,
            btnB,
            btnC,
            btnD,
            nextButton,
            timerEl
        );
        return;
    }

    showingAnswer = false;
    currentQuestion++;
    const answersContainer = document.getElementById("answers-container");
    answersContainer.style.display = "flex";
    nextButton.style.display = "none";

    if (currentQuestion < questions.length) {
        HaveFinishQuestions = 0;
        loadQuestion(
            questionEl,
            btnA,
            btnB,
            btnC,
            btnD,
            activePlayerEl,
            mediaContainerDiv,
            timerEl,
            score1El,
            score2El
        );
    } else {
        endGame(score1El, score2El);
    }
}


function endGame(score1El, score2El) {
    alert(`Fin du jeu ! Joueur 1: ${score1} points, Joueur 2: ${score2} points`);
}
