import Scene from "./scene.js"
import SelectedPaintings from "../data/selectedPaintings.js"
import Sprite from "./sprite.js";
import selectedPaintings from "../data/selectedPaintings.js";

export default class ExhibitionScene extends Scene {
    constructor() {
        super("scene-exhibition", "./assets/sound/song.mp3");
        this.lastSelectedPainting = null;
    }

    fetchPaintings() {
        let SelectedPaintingsCopy = SelectedPaintings;
        this.lastSelectedPainting = SelectedPaintingsCopy.pop();
        SelectedPaintingsCopy.forEach((painting) => {
            new Sprite(painting.src, painting.width, painting.height, painting.x, painting.y, "paintings-container");
        });
        new Sprite(this.lastSelectedPainting.src, this.lastSelectedPainting.width, this.lastSelectedPainting.height, 500, 500, "selected-painting");
    }

    cleanPaintings() {
        let paintingsContainer = document.querySelector("#paintings-container");
        if (!paintingsContainer) {
            console.error("No paintings container found");
            return;
        }
        paintingsContainer.innerHTML = "";
    }

    initScene() {
        super.initScene();
        this.fetchPaintings();
    }

    unloadScene() {
        super.unloadScene();
        this.cleanPaintings()
    }
}