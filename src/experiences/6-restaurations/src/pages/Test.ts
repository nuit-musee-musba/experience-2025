import { Header } from "../components/Header"

export default class Test{
    container: HTMLElement;
    header: Header;

    constructor(container: HTMLElement) {
        this.container = container;
        this.header = new Header()
        this.render(container);
    }

    render(container: HTMLElement) {
        /* container.innerHTML = `
            <h1>G6 - Intro</h1>
        `;  */
        this.header.render(container, "Hmmmm tittre", "Hmmmm sous titre");
    }

    async exit(): Promise<void> {
        // Call the exit method of Header
        if (this.header) {
            await this.header.exit();
        }
    }

    entry(){
        if (this.header) {
            this.header.entry();
        }
    }
}