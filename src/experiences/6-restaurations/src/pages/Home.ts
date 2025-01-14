export default class Home{
    container: HTMLElement;
    element: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
        this.render(this.container);
    }

    render(container: HTMLElement) {
        this.element = document.createElement("div");
        this.element.className = "home-container";
        this.element.innerHTML = `
            <h1 class="home-text">L’ART DE LA RESTAURATION</h1>
            <div class="button-start-container">
                <div class="button-start">
                    <h2>Commencer</h2>
                </div>
            </div>
        `;

        container.appendChild(this.element);

        //this.element.addEventListener("mousedown", this.handleMouseDown);

        const buttonElement = this.element.querySelector(".button-start")
        
        if(buttonElement){
            buttonElement.addEventListener("mousedown", this.handleMouseDown);
        }
    }

    handleMouseDown = () => {
        window.location.hash = "/intro"; // Navigate to /#/intro
    };

    async exit(): Promise<void>{
        const homeText = this.element.querySelector(".home-text") as HTMLElement;
        const buttonElement = this.element.querySelector(".button-start") as HTMLElement;

        if (this.element) {
            homeText.classList.remove("entry-animation-home")
            homeText.classList.add("exit-animation-home"); // Add your exit class

            buttonElement.classList.remove("entry-animation-home")
            buttonElement.classList.add("exit-animation-home"); // Add your exit class

            await this.waitForKeyframe(buttonElement); // Wait for transition
        }
    }

    entry(){
        const homeText = this.element.querySelector(".home-text") as HTMLElement;
        const buttonElement = this.element.querySelector(".button-start") as HTMLElement;

        if (this.element) {
            homeText.classList.remove("exit-animation-home")
            homeText.classList.add("entry-animation-home"); // Add your entry class

            buttonElement.classList.remove("exit-animation-home")
            buttonElement.classList.add("entry-animation-home"); // Add your entry class
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