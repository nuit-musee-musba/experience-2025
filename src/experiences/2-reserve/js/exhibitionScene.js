import Scene from "./scene.js"
import SelectedPaintings from "../data/selectedPaintings.js"
import Sprite from "./sprite.js";
import selectedPaintings from "../data/selectedPaintings.js";

export default class ExhibitionScene extends Scene {
    constructor() {
        super("scene-exhibition", "./assets/sound/song.mp3");
        this.lastSelectedPainting = null;
        this.perspectiveRotation = 1920;
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

    rotatePainting(painting) {
        if (parseInt(painting.style.left, 10) > this.perspectiveRotation) {
            painting.style.transform = "skew(0deg, 30deg)";
        }
        else {
            painting.style.transform = "skew(0deg, -30deg)";
        }
    }

    initScene() {
        super.initScene();
        this.fetchPaintings();
        document.addEventListener("click", (event) => {
            let painting = document.querySelector("#selected-painting").children[0];
            painting.style.left = event.clientX.toString();
            painting.style.top = event.clientY.toString();
            this.rotatePainting(painting);
        })
    }

    unloadScene() {
        super.unloadScene();
        this.cleanPaintings()
    }
}