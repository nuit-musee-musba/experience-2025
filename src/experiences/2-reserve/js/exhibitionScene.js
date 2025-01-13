import Scene from "./scene.js"
import SelectedPaintings from "../data/selectedPaintings.js"
import Sprite from "./sprite.js";
import selectedPaintings from "../data/selectedPaintings.js";

export default class ExhibitionScene extends Scene {
    constructor() {
        super("scene-exhibition", "./assets/sound/song.mp3");
        this.lastSelectedPainting = null;
        this.perspectiveRotation = 1920;
        this.paintingPositions = [
            {
                x: 3104,
                y: 864,
            },
            {
                x: 2618,
                y: 578,
            },
            {
                x: 2044,
                y: 533,
            }
        ]
    }

    fetchPaintings() {
        let SelectedPaintingsCopy = SelectedPaintings;
        this.lastSelectedPainting = SelectedPaintingsCopy.pop();
        SelectedPaintingsCopy.forEach((painting) => {
            new Sprite(painting.src, painting.width, painting.height, painting.x, painting.y, "paintings-container");
        });
        new Sprite(this.lastSelectedPainting.src, this.lastSelectedPainting.width, this.lastSelectedPainting.height, 500, 500, "selected-painting");
        let painting = document.querySelector("#selected-painting").children[0];
        if (painting) {
            painting.classList.add("selected");
        }
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
        } else {
            painting.style.transform = "skew(0deg, -30deg)";
        }
    }

    calculateDistance(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    //Change the inPos to a default one if close enough
    GetClosestPos(inPos) {
        for (const pos of this.paintingPositions) {
            if (this.calculateDistance(inPos.x, inPos.y, pos.x, pos.y) < 300) {
                inPos.x = pos.x;
                inPos.y = pos.y;
                return;
            }
        }
    }

    initScene() {
        super.initScene();
        this.fetchPaintings();
        document.addEventListener("click", (event) => {
            this.setPaintingPosition({x: event.clientX, y: event.clientY});
        });
    }

    setPaintingPosition(pos) {
        let painting = document.querySelector("#selected-painting").children[0];
        
        this.GetClosestPos(pos)
        const paintingWidth = painting.offsetWidth;
        const paintingHeight = painting.offsetHeight;

        const centeredLeft = pos.x - paintingWidth / 2;
        const centeredTop = pos.y - paintingHeight / 2;

        painting.style.left = `${centeredLeft}px`;
        painting.style.top = `${centeredTop}px`;

        this.rotatePainting(painting);
    }

    unloadScene() {
        super.unloadScene();
        this.cleanPaintings()
    }
}