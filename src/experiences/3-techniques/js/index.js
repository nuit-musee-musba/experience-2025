// index.js
import { loadQuestion, handleAnswer, nextTurn} from './game.js';
const questionEl = document.getElementById("question");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const btnC = document.getElementById("btnC");
const btnD = document.getElementById("btnD");
const timerEl = document.getElementById("timer");
const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
const activePlayerEl = document.getElementById("activePlayer");
const mediaContainerDiv = document.getElementById("mediaContainerDiv");
const nextButton = document.getElementById("nextButton");



nextButton.addEventListener("click", () => {
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
});


btnA.addEventListener("click", () =>
    handleAnswer(
        "A",
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
    )
);
btnB.addEventListener("click", () =>
    handleAnswer(
        "B",
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
    )
);


btnC.addEventListener("click", () =>
    handleAnswer(
        "C",
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
    )
);
btnD.addEventListener("click", () =>
    handleAnswer(
        "D",
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
    )
);

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
