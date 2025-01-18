let counter = 0

export default class Mastiquer{
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
                                <h3>4/6</h3>
                            </div>
                        </div>
                        <div class="exp-header">
                            <h1>Mastiquer</h1>
                            <h2>Comble les imperfections</h2>
                        </div>
                    </div>
                    <div class="exp-consigne">
                        <h3>Consigne</h3>
                        <p>Utilise ton doigt comme un ébauchoir et applique la pâte adaptée sur les zones abîmées en appuyant sur les cibles.</p>
                    </div>
                </div>
                <div class="exp-right">
                    <div class="steps">
                        <div class="counter">
                            <h3>${counter}/4</h3>
                        </div>
                    </div>
                    <img class="exp-char-img" src="./src/assets/img/perso-mastiquer.png" alt="">
                    <div class="exp-explication">
                        <h3>Explications</h3>
                        <p>Les fissures, trous et la peinture craquelée sur un tableau peuvent affaiblir sa structure et son apparence. En appliquant le mastic, il faut veiller à reproduire les coups de pinceaux de l’artiste.</p>
                        <p>Les restaurateurs de la Chapelle Sixtine ont découvert des fissures dans le plafond causées par des tremblements de terre et leur masticage a été une prouesse technique.</p>
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
            <div class="select-circle circle-3 obs">
                <img src="./src/assets/img/select.png" alt="">
            </div>
            <div class="select-circle circle-4 obs">
                <img src="./src/assets/img/select.png" alt="">
            </div>
            <div class="select-circle circle-5 obs">
                <img src="./src/assets/img/select.png" alt="">
            </div>

            <div class="mastique-container">
                <img src="./src/assets/img/mastique-haut.png" alt="" class="opacity-0 mastique-1">
                <img src="./src/assets/img/mastique-tête.png" alt="" class="opacity-0 mastique-2">
                <img src="./src/assets/img/mastique-main.png" alt="" class="opacity-0 mastique-3">
                <img src="./src/assets/img/mastique-robe.png" alt="" class="opacity-0 mastique-4">
            </div>

        `;

        container.appendChild(this.element);

        const buttonElement = this.element.querySelector(".button-suivant");

        //const circleElements = this.element.querySelectorAll(".select-circle");

        const circleElements = [...this.element.querySelectorAll(".select-circle")] as HTMLElement[];

        
        if(buttonElement){
            buttonElement.addEventListener("mousedown", this.handleMouseDown);
        }

        /* if (circleElements.length > 0) {
            circleElements.forEach((circle) => {
                circle.addEventListener("touchmove", this.handleMouseOver);
            });
        } */

        if (circleElements.length > 0) {
            window.addEventListener("touchstart", (event) => this.handleGlobalTouchMove(event, circleElements));
        }
        //window.addEventListener("touchmove", () => {console.log("i've moved touch")});
    }

    handleGlobalTouchMove(event: TouchEvent, circles: HTMLElement[]) {
        const touch = event.changedTouches[0];
        const { clientX, clientY } = touch;
    
        // Check if the touch intersects any circle
        circles.forEach((circle, index) => {
            const rect = circle.getBoundingClientRect();
            if (
                clientX >= rect.left &&
                clientX <= rect.right &&
                clientY >= rect.top &&
                clientY <= rect.bottom
            ) {
                if (!circle.dataset.processed) {
                    circle.dataset.processed = "true"; // Mark this circle as processed
                    this.handleMouseOver(circle);
    
                    // Remove the circle from future checks
                    circles.splice(index, 1);
                }
            }
        });
    }

    handleMouseDown = () => {
        window.location.hash = "/retoucher"; // Navigate to /#/intro
    };

    handleMouseOver = async (circle) => {
        const counterElement = this.element.querySelector(".counter h3");
        const buttonElement = this.element.querySelector(".button-suivant");

        const mastique1Element = this.element.querySelector(".mastique-1");
        const mastique2Element = this.element.querySelector(".mastique-2");
        const mastique3Element = this.element.querySelector(".mastique-3");
        const mastique4Element = this.element.querySelector(".mastique-4");
        

        circle.removeEventListener("touchstart", circle);

        counter += 1;
        console.log("my counter", counter);

        if(counterElement){
            counterElement.textContent = `${counter}/4`;
        }

        if(counter == 4 && buttonElement){
            buttonElement.classList.remove("exit-animation")
            buttonElement.classList.add("entry-animation"); 
        }
        
        circle.classList.remove("entry-animation")
        circle.classList.add("exit-animation");

        console.log("afte removing/adding animation classes");
        console.log("Current Target:", circle.classList[1]);

        if(circle.classList[1] == "circle-1" && mastique4Element){
            mastique4Element.classList.remove("opacity-0")
            mastique4Element.classList.add("opacity-1")
        }
        if(circle.classList[1] == "circle-3" && mastique3Element){
            mastique3Element.classList.remove("opacity-0")
            mastique3Element.classList.add("opacity-1")
        }
        if(circle.classList[1] == "circle-4" && mastique1Element){
            mastique1Element.classList.remove("opacity-0")
            mastique1Element.classList.add("opacity-1")
        }
        if(circle.classList[1] == "circle-5" && mastique2Element){
            mastique2Element.classList.remove("opacity-0")
            mastique2Element.classList.add("opacity-1")
        }

        await this.waitForKeyframe(circle);

        console.log("after await");

        if(circle){
            circle.remove();
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

            const event = new CustomEvent('switchSceneEvent', { detail: { scene: 'scene5' } });
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