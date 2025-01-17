import Scene from "./scene.js";
import paintings from "../data/paintings.js";
import selectedPaintings from "../data/selectedPaintings.js";
import Game from "./Game.js";

export default class ReserveScene extends Scene {
    constructor() {
        super("scene-reserve", "./assets/sound/song.mp3");
    }

    unloadScene(){
        super.unloadScene();
        this.unloadPainting('#container-paintings')
    }

    initScene(){
        super.initScene()
        this.loadPaintings("#container-paintings")
        this.scrollToBottom()
        Game.getInstance().dialogue.listDialogue([`0-1-0`, `0-1-1`]);
    }

    loadPaintings(conteneurPaintings) {
        const conteneurPainting = document.querySelector(conteneurPaintings);

                let filteredPaintings = paintings.filter(p => !selectedPaintings.some(sp => sp.id === p.id));
                filteredPaintings.forEach((painting) => {
                const img = document.createElement("img");
                let div = document.createElement('div');
        
                img.src = painting.src + ".jpg";
                img.alt = painting.description || "Image sans description";
                div.classList.add('paintingContainer')
                conteneurPainting.append(div);
                conteneurPainting.append(img);
                div.append(img)
        });
    
    }

    unloadPainting(idContainerPaintings) {
        const containerPaintings = document.querySelector(idContainerPaintings);
        containerPaintings.innerHTML = "";
    }
    scrollToBottom() {
        try {
            window.scrollBy({
                top: 10000, // Scrolle vers le bas de 1000px
                behavior: 'smooth' // Défilement fluide
            });
            console.log("Scroll forcé de 1000px vers le bas.");
        } catch (error) {
            console.error("Erreur de défilement : ", error);
        }
    }
}