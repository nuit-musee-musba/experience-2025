let counter = 0

export default class Apprecier{
    container: HTMLElement;
    element: HTMLElement

    constructor(container: HTMLElement) {
        this.container = container;
        this.render(container);
    }

    render(container: HTMLElement) {
        this.element = document.createElement("div");
        this.element.className = "step-container";
        this.element.innerHTML = `
            <div class="exp-container">
                <div class="exp-left">
                    <div class="exp-header-container">
                        <div class="steps">
                            <div class="step-text">
                                <h3 class="h3-title-serif">FIN</h3>
                            </div>
                        </div>
                        <div class="exp-header">
                            <h1>Apprécier</h1>
                            <h2>Admire ton travail</h2>
                        </div>
                    </div>
                    <div class="exp-consigne">
                        <h3>Consigne</h3>
                        <p>Rends-toi là où l’œuvre est exposée pour apprécier ta restauration.</p>
                    </div>
                </div>
                <div class="exp-right">
                    <img class="exp-char-img" src="./src/assets/img/perso-apprecier.png" alt="">
                    <div class="exp-explication">
                        <h3>Explications</h3>
                        <p>En temps normal, une restauration peut durer plusieurs semaines, voire plusieurs mois, surtout pour une œuvre comme celle-ci, qui mesure 2,13 m x 1,42 m.</p>
                        <p>Accomplir une telle restauration est une tâche difficile, alors félicitations pour ton travail !</p>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <div class="button-suivant">
                    <h2>Quitter</h2>
                </div>
            </div>
        `;

        container.appendChild(this.element);

        const buttonElement = this.element.querySelector(".button-suivant");

        if(buttonElement){
            buttonElement.addEventListener("mousedown", this.handleMouseDown);
        }
    }

    handleMouseDown = () => {
        window.location.hash = "/"; // Navigate to /#/intro
    };

    async exit(): Promise<void>{
        const headerElement = this.element.querySelector(".exp-header-container") as HTMLElement;
        const consigneElement = this.element.querySelector(".exp-consigne") as HTMLElement;
        const rightElement = this.element.querySelector(".exp-right") as HTMLElement;
        const buttonElement = this.element.querySelector(".button-suivant") as HTMLElement;
        const canvasElement = document.querySelector("#ogl-canvas") as HTMLElement;

        if (this.element) {
            headerElement.classList.remove("entry-animation")
            headerElement.classList.add("exit-animation"); // Add your exit class
            
            consigneElement.classList.remove("entry-animation")
            consigneElement.classList.add("exit-animation"); // Add your exit class

            rightElement.classList.remove("entry-animation")
            rightElement.classList.add("exit-animation"); // Add your exit class

            buttonElement.classList.remove("entry-animation")
            buttonElement.classList.add("exit-animation"); // Add your exit class

            canvasElement.classList.remove("entry-animation")
            canvasElement.classList.add("exit-animation"); // Add your exit class

            await this.waitForKeyframe(headerElement); // Wait for transition
        }
    }

    entry(){
        const headerElement = this.element.querySelector(".exp-header-container") as HTMLElement;
        const consigneElement = this.element.querySelector(".exp-consigne") as HTMLElement;
        const rightElement = this.element.querySelector(".exp-right") as HTMLElement;
        const buttonElement = this.element.querySelector(".button-suivant") as HTMLElement;
        const canvasElement = document.querySelector("#ogl-canvas") as HTMLElement;
        const circleElements = this.element.querySelectorAll(".select-circle");

        if (this.element) {
            headerElement.classList.remove("exit-animation")
            headerElement.classList.add("entry-animation"); // Add your entry class

            consigneElement.classList.remove("exit-animation")
            consigneElement.classList.add("entry-animation"); // Add your entry class

            rightElement.classList.remove("exit-animation")
            rightElement.classList.add("entry-animation"); 

            //buttonElement.classList.remove("exit-animation")
            //buttonElement.classList.add("entry-animation"); 

            canvasElement.classList.remove("exit-animation")
            canvasElement.classList.add("entry-animation"); 

            circleElements.forEach((circle) => {
                circle.classList.remove("exit-animation"); 
                circle.classList.add("entry-animation"); 
            });
        }
    }

    private waitForKeyframe(element: HTMLElement): Promise<void> {
        return new Promise((resolve) => {
            const onAnimationEnd = (event: AnimationEvent) => {
                if (event.target === element) {
                    element.removeEventListener("animationend", onAnimationEnd);
                    resolve();
                }
            };
            element.addEventListener("animationend", onAnimationEnd);
        });
    }
}