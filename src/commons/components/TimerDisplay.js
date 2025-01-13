export class TimerDisplay {
    constructor(time, className) {
        this.time = time * 60; // Initial time in seconds
        this.className = className;

        this.timerDisplay = document.createElement('div');
        this.timerDisplay.className = `stats-display ${this.className}`;

        this.titleContainer = document.createElement('div');
        this.titleContainer.className = 'title-container';
        this.titleElement = document.createElement('h3');
        this.titleElement.className = 'h3-title-serif';
        this.titleElement.textContent = 'Timer';
        this.titleContainer.appendChild(this.titleElement);

        this.timerContainer = document.createElement('div');
        this.timerContainer.className = 'timer-container';
        this.timer = document.createElement('h3');
        this.timer.textContent = this.formatTime(this.time);
        this.timerContainer.appendChild(this.timer);

        this.timerDisplay.appendChild(this.titleContainer);
        this.timerDisplay.appendChild(this.timerContainer);

        document.body.appendChild(this.timerDisplay);
        
        this.intervalId = null; // Store the interval ID for future control
        this.isPaused = false;  // Track the pause state
    }

    // Format seconds into MM:SS
    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    start() {
        if (this.intervalId) {
            console.warn("Timer is already running.");
            return;
        }

        this.intervalId = setInterval(() => {
            if (this.time > 0 && !this.isPaused) {
                this.time--;
                this.timer.textContent = this.formatTime(this.time);
            } else if (this.time <= 0) {
                this.stop();
                console.log("Timer finished!");
            }
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    pause() {
        this.isPaused = true;
        console.log("Timer paused.");
    }

    resume() {
        if (this.isPaused) {
            this.isPaused = false;
            console.log("Timer resumed.");
        } else {
            console.warn("Timer is not paused.");
        }
    }
}
