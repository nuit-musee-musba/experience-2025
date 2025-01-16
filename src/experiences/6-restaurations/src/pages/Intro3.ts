import { Header } from "../components/Header"

export default class Intro3{
    container: HTMLElement;
    src: string;
    dialog: string;
    path: string;
    element: HTMLElement


    constructor(container: HTMLElement, src: string, dialog: string, path: string) {
        this.container = container;
        this.src = src;
        this.dialog = dialog
        this.path = path
        this.render(this.container, this.src, this.dialog, this.path); // ./src/assets/img/perso.png | <p>Salut à toi, futur restaurateur d’œuvre d'art !</br></br>Je serai ton guide tout au long de cette aventure. Ensemble, nous allons découvrir un univers, où chaque geste, chaque décision, porte en elle la responsabilité de préserver les trésors du passé.</p> 
    }

    render(container: HTMLElement, src: string, dialog: string, path: string) {
        this.element = document.createElement("div");
        this.element.className = "intro-container";
        this.element.innerHTML = `

            <div class="char">
                <div class="char-dialog">
                    <p>${dialog}</p>
                </div>
                <div class="char-container">
                    <img class="char-img" src="${src}" alt="">
                </div>
            </div>

            <div class="button-container">
                <div class="button-suivant">
                    <h2>Suivant</h2>
                </div>
            </div>
        `;

        container.appendChild(this.element);

        const buttonElement = this.element.querySelector(".button-suivant")
        
        if(buttonElement){
            buttonElement.addEventListener("mousedown", (event) => this.handleMouseDown(path));
        }
    }

    handleMouseDown(path: string){
        window.location.hash = path; // Navigate to /#/intro | "/"

        /* const event = new CustomEvent('switchSceneEvent', { detail: { scene: 'scene2' } });
        document.dispatchEvent(event); */
    };

    async exit(): Promise<void>{
        const imgElement = this.element.querySelector(".char-container") as HTMLElement;
        const dialogElement = this.element.querySelector(".char-dialog") as HTMLElement;
        const buttonElement = this.element.querySelector(".button-suivant") as HTMLElement;

        if (this.element) {
            imgElement.classList.remove("entry-animation")
            imgElement.classList.add("exit-animation"); // Add your exit class
            
            dialogElement.classList.remove("entry-animation")
            dialogElement.classList.add("exit-animation"); // Add your exit class

            buttonElement.classList.remove("entry-animation")
            buttonElement.classList.add("exit-animation"); // Add your exit class

            await this.waitForKeyframe(imgElement); // Wait for transition
        }
    }

    entry(){
        const imgElement = this.element.querySelector(".char-container") as HTMLElement;
        const dialogElement = this.element.querySelector(".char-dialog") as HTMLElement;
        const buttonElement = this.element.querySelector(".button-suivant") as HTMLElement;

        if (this.element) {
            imgElement.classList.remove("exit-animation")
            imgElement.classList.add("entry-animation"); // Add your entry class

            dialogElement.classList.remove("exit-animation")
            dialogElement.classList.add("entry-animation"); // Add your entry class

            buttonElement.classList.remove("exit-animation")
            buttonElement.classList.add("entry-animation"); 
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