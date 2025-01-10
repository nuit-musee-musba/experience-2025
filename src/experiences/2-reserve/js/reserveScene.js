import Scene from "./scene.js"
import paintings from "../data/paintings.js"

export default class ReserveScene extends Scene {
    constructor() {
        super(null, null);
        this.name = "scene-reserve"
        this.sound = null;
    }


    loadPainting(conteneurPaintings) {
        const conteneurPainting = document.querySelector(conteneurPaintings);
        paintings.forEach((painting) => {
            const img = document.createElement("img");
            img.src = painting.src;
            img.alt = painting.description || "Image sans description";
            conteneurPainting.append(img);
        });
    }
}