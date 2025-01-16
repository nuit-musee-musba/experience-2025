let counter = 0

export default class Observer{
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
                                <h3 class="h3-title-serif">Étape</h3>
                            </div>
                            <div class="step-count">
                                <h3>1/6</h3>
                            </div>
                        </div>
                        <div class="exp-header">
                            <h1>Observer</h1>
                            <h2>Détecte les imperfections</h2>
                        </div>
                    </div>
                    <div class="exp-consigne">
                        <h3>Consigne</h3>
                        <p>Utilise ton doigt comme une loupe et passe le tout le long de l’œuvre pour trouver les dégâts et mesurer leur ampleur.</p>
                    </div>
                </div>
                <div class="exp-right">
                    <div class="steps">
                        <div class="counter">
                            <h3>${counter}/4</h3>
                        </div>
                    </div>
                    <img class="exp-char-img" src="./src/assets/img/perso-observer.png" alt="">
                    <div class="exp-explication">
                        <h3>Explications</h3>
                        <p>Chaque œuvre d’art, abîmée ou intacte, témoigne de son époque. L’observation est la première étape pour révéler ses secrets. Elle peut être abimée par le transport, l’humidité, ou simplement par le temps.</p>
                        <p>Un restaurateur se doit d’examiner attentivement l’œuvre pour repérer les imperfections : craquelures, tâches ou décolorations. Ces indices sont essentiels pour comprendre les restaurations nécessaires.</p>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <div class="button-suivant opacity-0">
                    <h2>Suivant</h2>
                </div>
            </div>

            <div class="select-circle circle-1 obs">
                <img src="./src/assets/img/select.png" alt="">
            </div>
            <div class="select-circle circle-2 obs">
                <img src="./src/assets/img/select.png" alt="">
            </div>
            <div class="select-circle circle-3 obs">
                <img src="./src/assets/img/select.png" alt="">
            </div>
            <div class="select-circle circle-4 obs">
                <img src="./src/assets/img/select.png" alt="">
            </div>

        `;

        container.appendChild(this.element);

        const buttonElement = this.element.querySelector(".button-suivant");

        const circleElements = this.element.querySelectorAll(".select-circle");
        
        if(buttonElement){
            buttonElement.addEventListener("mousedown", this.handleMouseDown);
        }

        if (circleElements.length > 0) {
            circleElements.forEach((circle) => {
                circle.addEventListener("mouseover", this.handleMouseOver);
            });
        }
    }

    handleMouseDown = () => {
        window.location.hash = "/eclairer"; // Navigate to /#/intro
    };

    handleMouseOver = async (event) => {
        const counterElement = this.element.querySelector(".counter h3");
        const buttonElement = this.element.querySelector(".button-suivant");

        counter += 1;
        console.log("my counter", counter);

        if(counterElement){
            counterElement.textContent = `${counter}/4`;
        }

        if(counter == 4 && buttonElement){
            buttonElement.classList.remove("exit-animation")
            buttonElement.classList.add("entry-animation"); 
        }
        
        event.currentTarget.classList.remove("entry-animation")
        event.currentTarget.classList.add("exit-animation");

        console.log("afte removing/adding animation classes");
        console.log("Current Target:", event.currentTarget);

        await this.waitForKeyframe(event.currentTarget);

        console.log("after await");

        if(event.currentTarget){
            event.currentTarget.remove();
        }
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

            const event = new CustomEvent('switchSceneEvent', { detail: { scene: 'scene2' } });
            document.dispatchEvent(event);
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