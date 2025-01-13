import Scene from "./scene.js"
import SelectedPaintings from "../data/selectedPaintings.js"
import Sprite from "./sprite.js";

export default class ExhibitionScene extends Scene {
    constructor() {
        super(null, null);
        this.sound = "./assets/sound/song.mp3";
        this.name = "scene-exhibition";
    }

    fetchPaintings() {
        SelectedPaintings.forEach((painting) => {
            new Sprite(painting.src, painting.width, painting.height, painting.x, painting.y, "paintings-container");
        });
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