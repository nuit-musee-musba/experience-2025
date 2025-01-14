export class ArrowButton{
    constructor(direction, color, link, className = ''){
        this.direction = direction;
        this.color = color;
        this.className = className;
        this.arrowButton = document.createElement('a');
        this.arrowButton.href = link;
        this.arrowButton.className = `arrow-button ${this.direction} ${this.color} ${this.className}`;
        this.icon = document.createElement('img');
        this.icon.src = `/commons/icons/arrow-${this.color}.svg`;

        this.arrowButton.appendChild(this.icon);
        document.body.appendChild(this.arrowButton);
    }
}