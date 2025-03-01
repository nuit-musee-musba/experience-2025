import Scene from "./scene.js";
import paintings from "../data/paintings.js";
import selectedPaintings from "../data/selectedPaintings.js";
import Game from "./Game.js";

export default class ReserveScene extends Scene {
    constructor() {
        super("scene-reserve", "/2-reserve/assets/sound/les_reserves_du_MusBa.mp3");
    }

    unloadScene() {
        super.unloadScene();
        this.unloadPainting('#container-paintings')
    }

    initScene() {
        super.initScene()
        this.loadPaintings("#container-paintings")
        this.scrollToBottom()
        if (Game.getInstance().gameProgression < 1) {
            Game.getInstance().dialogue.listDialogue([`0-1-0`, `0-1-1`]);
        }
    }

    loadPaintings(conteneurPaintings) {
        const conteneurPainting = document.querySelector(conteneurPaintings);

                let filteredPaintings = paintings.filter(p => !selectedPaintings.some(sp => sp.id === p.id));
                filteredPaintings.forEach((painting) => {
                const img = document.createElement("img");
                let div = document.createElement('div');
        
                img.src = painting.src + ".webp";
                img.alt = painting.description || "Image sans description";
                    div.classList.add('paintingContainer', 'imageBorder');
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
        } catch (error) {
            console.error("Erreur de défilement : ", error);
        }
    }
}