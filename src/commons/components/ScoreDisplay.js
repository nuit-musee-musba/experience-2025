export class ScoreDisplay {
    constructor(startValue, className) {
        this.className = className;
        this.startValue = startValue;

        this.scoreDisplay = document.createElement('div');
        this.scoreDisplay.className = `stats-display ${this.className}`;

        this.titleContainer = document.createElement('div');
        this.titleContainer.className = 'title-container';
        this.titleElement = document.createElement('h3');
        this.titleElement.className = 'h3-title-serif';
        this.titleElement.textContent = 'Score';
        this.titleContainer.appendChild(this.titleElement);

        this.scoreContainer = document.createElement('div');
        this.scoreContainer.className = 'score-container';
        this.score = document.createElement('h3');
        this.score.textContent = this.startValue
        this.scoreContainer.appendChild(this.score);

        this.scoreDisplay.appendChild(this.titleContainer);
        this.scoreDisplay.appendChild(this.scoreContainer);

        document.body.appendChild(this.scoreDisplay);
    
    }

    increment(number) {
        this.score.textContent = parseInt(this.score.textContent) + number;
    }

    decrement(number) {
        this.score.textContent = parseInt(this.score.textContent) - number;
    }

    reset() {
        this.score.textContent = this.startValue;
    }


}
