export class Router {
    container: HTMLElement;
    currentRoute: any;

    constructor(container: HTMLElement) {
        this.container = container;
        this.currentRoute = null
        this.init();
        this.listenForHashChange();
    }

    async init() {
        const route = window.location.hash.slice(1) || "/"; // Get the hash (remove the #)

        if(this.currentRoute && this.currentRoute.exit){
            await this.currentRoute.exit();
        }

        this.container.innerHTML = "";

        switch (route) {
            case "/":
                const { default: Home } = await import("./pages/Home");
                this.currentRoute = new Home(this.container);
                break;

            case "/intro":
                const { default: Intro } = await import("./pages/Intro");
                this.currentRoute = new Intro(this.container, "./src/assets/img/perso.png", "Salut à toi, futur restaurateur d’œuvre d'art !</br></br>Je serai ton guide tout au long de cette aventure. Ensemble, nous allons découvrir un univers, où chaque geste, chaque décision, porte en elle la responsabilité de préserver les trésors du passé.","/intro-2");
                break;

            case "/intro-2":
                const { default: Intro2 } = await import("./pages/Intro2");
                this.currentRoute = new Intro2(this.container, "./src/assets/img/perso2.png", "Le tableau Une scène de Saint-Barthélemy de Camille Roqueplan (1836), représentant une scène fictive du massacre de 1572 a été restauré par Tiziana Mazzoni. Celui-ci, caractéristique du romantisme du XIXème siècle, met en lumière l’émotion et l’humanité des personnages.","/intro-3");
                break;

            case "/intro-3":
                const { default: Intro3 } = await import("./pages/Intro3");
                this.currentRoute = new Intro3(this.container, "./src/assets/img/perso.png", "Tu auras l’opportunité d’effectuer ta première restauration sur cette œuvre.</br>Prépare-toi à redonner vie à son histoire !","/step-1");
                break;

            case "/step-1":
                const { default: Step } = await import("./pages/Step");
                this.currentRoute = new Step(this.container);
                break;

            default:
                this.container.innerHTML = "<h1>404 - Page Not Found</h1>";
                this.currentRoute = null;
        }

        if(this.currentRoute && this.currentRoute.entry){
            this.currentRoute.entry();
        }
    }

    listenForHashChange() {
        window.addEventListener("hashchange", () => {
            this.init(); // Reinitialize the router when the hash changes
        });
    }
}
