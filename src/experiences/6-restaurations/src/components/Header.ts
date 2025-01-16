export class Header{
    element: HTMLElement;

    render(container: HTMLElement, title: string, sub: string){
        this.element = document.createElement("header");
        this.element.className = "header";
        this.element.innerHTML = `
            <div>
                <h1 class="title">${title}</h1>
            </div>
            <div>
                <h2 class="subtitle">${sub}</h2>
            </div>
            
        `;

        container.appendChild(this.element);
    }

    async exit(): Promise<void>{
        const titleElement = this.element.querySelector(".title") as HTMLElement;
        const subtitleElement = this.element.querySelector(".subtitle") as HTMLElement;

        if (this.element) {
            titleElement.classList.remove("entry-animation-header")
            titleElement.classList.add("exit-animation-header"); // Add your exit class
            
            subtitleElement.classList.remove("entry-animation-header")
            subtitleElement.classList.add("exit-animation-header"); // Add your exit class

            await this.waitForKeyframe(subtitleElement); // Wait for transition
        }
    }

    entry(){
        const titleElement = this.element.querySelector(".title") as HTMLElement;
        const subtitleElement = this.element.querySelector(".subtitle") as HTMLElement;

        if (this.element) {
            titleElement.classList.remove("exit-animation-header")
            titleElement.classList.add("entry-animation-header"); // Add your entry class

            subtitleElement.classList.remove("exit-animation-header")
            subtitleElement.classList.add("entry-animation-header"); // Add your entry class
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