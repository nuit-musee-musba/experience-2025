let timer;
let timeLeft = 20;
const timerSound = new Audio('sound/TIMER.mp3');
export function startTimer(timerEl, onTimeout) {

    timeLeft = 20;
    document.getElementById('timer-card').style.display = 'flex';
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 5) {
            timerSound.play();
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            onTimeout();
        }
    }, 1000);
}

export function stopTimer() {
    clearInterval(timer);
    timerSound.pause();
    timerSound.currentTime = 0;

    document.getElementById('timer-card').style.display = 'none';
}
