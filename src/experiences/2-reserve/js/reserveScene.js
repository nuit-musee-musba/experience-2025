import Scene from "./scene.js";
import paintings from "../data/paintings.js";
import selectedPainting from "../data/selectedPainting.js";

export default class ReserveScene extends Scene {
    constructor() {
        super(null, null);
        this.name = "scene-reserve"
        this.sound = null;
    }

    initScene(){
        super.initScene()
        this.loadPaintings("#containeur-paintings")
    }


    loadPaintings(IdcontainerPaintings) {
        const conteneurPainting = document.querySelector(IdcontainerPaintings);
        let filteredPaintings = paintings.filter(
            (painting) =>
                !selectedPainting.some((selected) => selected.id === painting.id)
        );
        filteredPaintings.forEach((painting) => {
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
            while (conteneurPainting.firstChild) {
                conteneurPainting.removeChild(conteneurPainting.firstChild);
            }
        }
    }
}