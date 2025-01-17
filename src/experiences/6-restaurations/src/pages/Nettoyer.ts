let percentage = 0;

export default class Nettoyer{
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
                                <h3>3/6</h3>
                            </div>
                        </div>
                        <div class="exp-header">
                            <h1>Nettoyer</h1>
                            <h2>Redonne au tableau son éclat d’origine.</h2>
                        </div>
                    </div>
                    <div class="exp-consigne">
                        <h3>Consigne</h3>
                        <p>Utilise ton doigt comme un coton imbibé d’un dissolvant adapté et nettoie délicatement les zones ciblées.</p>
                    </div>
                </div>
                <div class="exp-right">
                    <div class="steps">
                        <div class="counter">
                            <h3>${percentage}%</h3>
                        </div>
                    </div>
                    <img class="exp-char-img" src="./src/assets/img/perso-nettoyer.png" alt="">
                    <div class="exp-explication">
                        <h3>Explications</h3>
                        <p>La saleté et le vernis jauni peuvent ternir une œuvre et masquer sa beauté.</p>
                        <p>Par exemple, le célèbre tableau La Joconde a été nettoyé en 2012, mettant en lumière une clarté et des détails que personne n’avait vu depuis des siècles ! Un restaurateur se doit de travailler avec précision pour ne pas endommager les couches inférieures.</p>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <div class="button-suivant opacity-0">
                    <h2>Suivant</h2>
                </div>
            </div>
            <div class="percentage-grid">
                <div class="area area-1"></div>
                <div class="area area-2"></div>
                <div class="area area-3"></div>

                <div class="area area-4"></div>
                <div class="area area-5"></div>
                <div class="area area-6"></div>

                <div class="area area-7"></div>
                <div class="area area-8"></div>
                <div class="area area-9"></div>

                <div class="area area-10"></div>
                <div class="area area-11"></div>
                <div class="area area-12"></div>
            </div>
        `;

        container.appendChild(this.element);

        const buttonElement = this.element.querySelector(".button-suivant")

        const gridElements = [...this.element.querySelectorAll(".area")] as HTMLElement[];
        
        if(buttonElement){
            buttonElement.addEventListener("mousedown", this.handleMouseDown);
        }

        if (gridElements.length > 0) {
            window.addEventListener("touchmove", (event) => this.handleGlobalTouchMove(event, gridElements));
        }
    }

    handleGlobalTouchMove(event: TouchEvent, grids: HTMLElement[]) {
        const touch = event.changedTouches[0];
        const { clientX, clientY } = touch;
    
        // Check if the touch intersects any circle
        grids.forEach((grid, index) => {
            const rect = grid.getBoundingClientRect();
            if (
                clientX >= rect.left &&
                clientX <= rect.right &&
                clientY >= rect.top &&
                clientY <= rect.bottom
            ) {
                if (!grid.dataset.processed) {
                    grid.dataset.processed = "true"; // Mark this circle as processed
                    this.handleMouseOver(grid);
    
                    // Remove the circle from future checks
                    grids.splice(index, 1);
                }
            }
        });
    }

    handleMouseOver = (grid) => {
        const percentageElement = this.element.querySelector(".counter h3");
        const buttonElement = this.element.querySelector(".button-suivant");

        grid.removeEventListener("touchmove", grid);

        percentage += Math.floor((1/12)*100);

        const event = new CustomEvent('cleanPaint', { detail: { scene: 'clean' } });
        document.dispatchEvent(event);
        console.log("event fired")

        if(percentageElement){
            if(percentage >= 96){
                percentage = 100
            }
            percentageElement.textContent = `${percentage}%`;
        }

        if(percentage >= 96 && buttonElement){
            buttonElement.classList.remove("exit-animation")
            buttonElement.classList.add("entry-animation"); 
            console.log("button element appears")
        }

        if(grid){
            grid.remove();
        }
    };


    handleMouseDown = () => {
        window.location.hash = "/mastiquer"; // Navigate to /#/intro
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

            const event = new CustomEvent('switchSceneEvent', { detail: { scene: 'scene4' } });
            document.dispatchEvent(event);
        }
    }

    entry(){
        const headerElement = this.element.querySelector(".exp-header-container") as HTMLElement;
        const consigneElement = this.element.querySelector(".exp-consigne") as HTMLElement;
        const rightElement = this.element.querySelector(".exp-right") as HTMLElement;
        const buttonElement = this.element.querySelector(".button-suivant") as HTMLElement;
        const canvasElement = document.querySelector("#ogl-canvas") as HTMLElement;

        if (this.element) {
            headerElement.classList.remove("exit-animation")
            headerElement.classList.add("entry-animation"); // Add your entry class

            consigneElement.classList.remove("exit-animation")
            consigneElement.classList.add("entry-animation"); // Add your entry class

            rightElement.classList.remove("exit-animation")
            rightElement.classList.add("entry-animation"); 

            /* buttonElement.classList.remove("exit-animation")
            buttonElement.classList.add("entry-animation");  */

            canvasElement.classList.remove("exit-animation")
            canvasElement.classList.add("entry-animation"); 
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