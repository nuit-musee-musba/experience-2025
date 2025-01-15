import Scene from "./scene.js";
import paintings from "../data/paintings.js";
import selectedPaintings from "../data/selectedPaintings.js";

export default class ReserveScene extends Scene {
    constructor() {
        super(null, null);
        this.name = "scene-reserve"
        this.sound = null;
        this.filteredPaintings = []
    }

    unloadScene(){
        let filteredPaintings = []
        this.unloadPainting('#container-paintings')

    }

    initScene(){
        super.initScene()
        this.loadPaintings("#container-paintings")
        this.scrollToBottom()
    }

    loadPaintings(conteneurPaintings, filteredPaintings) {
        const conteneurPainting = document.querySelector(conteneurPaintings);
                
                paintings.forEach((painting) => {
                const img = document.createElement("img");
                let div = document.createElement('div');
        
                img.src = painting.src;
                img.alt = painting.description || "Image sans description";
                div.classList.add('paintingContainer')
                conteneurPainting.append(div);
                conteneurPainting.append(img);
                div.append(img)
        });
    
    }

    unloadPainting(IdcontainerPaintings) {
        const conteneurPainting = document.querySelector(IdcontainerPaintings);
    
        if (conteneurPainting) {
            // Supprimer tous les enfants du conteneur
            while (conteneurPainting.firstChild) {
                conteneurPainting.removeChild(conteneurPainting.firstChild);
            }
        }
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