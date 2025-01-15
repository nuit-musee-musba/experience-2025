import Scene from "./scene.js"
import SelectedPaintings from "../data/selectedPaintings.js"
import Sprite from "./sprite.js";
import selectedPaintings from "../data/selectedPaintings.js";

export default class ExhibitionScene extends Scene {
    constructor() {
        super("scene-exhibition", "./assets/sound/song.mp3");
        this.lastSelectedPainting = null;
        this.perspectiveRotation = 1920;
        this.isPositionSet = false;
        this.defaultPos = {x: 400, y: 400}
        this.paintingPositions = [
            {
                x: 3104,
                y: 864,
                isOccupied: true,
            },
            {
                x: 2618,
                y: 578,
                isOccupied: false,
            },
            {
                x: 2044,
                y: 533,
                isOccupied: false,
            }
        ]

        this.button = document.createElement("button")
        this.button.className =`nextButton button small black`;
        this.button.textContent = "Valider";
        this.button.id = "end-exhibition-scene";
        document.getElementById("exhibition-info").appendChild(this.button);
    }

    fetchPaintings() {
        this.lastSelectedPainting = SelectedPaintings[SelectedPaintings.length - 1]

        for (let i = 0; i < SelectedPaintings.length - 1; i++) {
            let painting = SelectedPaintings[i];
            let sprite = new Sprite(painting.src, painting.width, painting.height, painting.x, painting.y, "paintings-container");

            this.fixPaintingPosition(sprite.element, {x: painting.x, y: painting.y});
            this.rotatePainting(sprite.element);
        }
        let painting = new Sprite(this.lastSelectedPainting.src, this.lastSelectedPainting.width, this.lastSelectedPainting.height, 500, 500, "selected-painting");
        if (painting.element) {
            painting.element.classList.add("selected");
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

    rotatePainting(painting, reset = false) {
        if (reset) {
            painting.style.transform = "skew(0deg, 0deg)";
            return;
        }
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

    //Change the inPos to a default one if close enough. Return true if it succeeded.
    tryGetClosestPos(inPos) {
        for (const pos of this.paintingPositions.filter(e => !e.isOccupied)) {
            if (this.calculateDistance(inPos.x, inPos.y, pos.x, pos.y) < 300) {
                inPos.x = pos.x;
                inPos.y = pos.y;
                return true;
            }
        }
        return false;
    }

    initScene() {
        super.initScene();
        this.fetchPaintings();
        document.addEventListener("click", (event) => {
            this.setPaintingPosition({x: event.clientX, y: event.clientY});
        });
        let nextButton = document.querySelector("#end-exhibition-scene")
        nextButton.disabled = true;
        nextButton.addEventListener("click", () => {
            SelectedPaintings[SelectedPaintings.length - 1].x = this.lastSelectedPainting.x;
            SelectedPaintings[SelectedPaintings.length - 1].y = this.lastSelectedPainting.y;
            this.updateOccupiedPos();
        });
    }

    updateOccupiedPos() {
        let newOccupiedPainting = this.paintingPositions.find((p) => {
            return this.lastSelectedPainting.x === p.x && this.lastSelectedPainting.y === p.y;
        })
        newOccupiedPainting.isOccupied = true;
    }

    fixPaintingPosition(elem, pos) {
        const paintingWidth = elem.offsetWidth;
        const paintingHeight = elem.offsetHeight;

        const centeredLeft = pos.x - paintingWidth / 2;
        const centeredTop = pos.y - paintingHeight / 2;

        elem.style.left = `${centeredLeft}px`;
        elem.style.top = `${centeredTop}px`;
    }

    setPaintingPosition(pos) {
        const painting = document.querySelector("#selected-painting").children[0];
        this.isPositionSet = this.tryGetClosestPos(pos)

        if (this.isPositionSet) {
            this.fixPaintingPosition(painting, pos);
            this.rotatePainting(painting);
            document.querySelector("#end-exhibition-scene").disabled = false;
            this.lastSelectedPainting.x = pos.x;
            this.lastSelectedPainting.y = pos.y;
        }
        else {
            this.fixPaintingPosition(painting, this.defaultPos);
            this.rotatePainting(painting, true);
            document.querySelector("#end-exhibition-scene").disabled = true;
        }
    }

    unloadScene() {
        super.unloadScene();
        this.cleanPaintings()
    }
}