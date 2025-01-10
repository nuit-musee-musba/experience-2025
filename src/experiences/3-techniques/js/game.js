import { questions } from './questions.js';
import { score1, score2, incrementScore, updateScores } from './scores.js';
import { startTimer, stopTimer } from './timer.js';

let currentQuestion = 0;
let activePlayer = 1;
let startingPlayer = 1;
let hasAnswered = false;
let showingAnswer = false;

export function showAnswer(
    questionEl,
    mediaContainerDiv,
    answersContainer,
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

    answersContainer.style.display = "none";
    nextButton.style.display = "block";


    stopTimer();
    timerEl.textContent = "";
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
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    const choices = q.choices;
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
    const correct = questions[currentQuestion].correct;

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
    if (currentQuestion < questions.length) {
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
            score2El,
            nextButton
        );
    } else {
        endGame(score1El, score2El);
    }
}

function endGame(score1El, score2El) {
    alert(`Fin du jeu ! Joueur 1: ${score1} points, Joueur 2: ${score2} points`);
}
