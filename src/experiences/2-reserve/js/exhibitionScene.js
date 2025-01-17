import Scene from "./scene.js"
import SelectedPaintings from "../data/selectedPaintings.js"
import Sprite from "./sprite.js";
import Elements from "../data/elements.js";
import Game from "./Game.js";
import SelectedElements from "../data/selectedElements.js";

export default class ExhibitionScene extends Scene {
    constructor() {
        super("scene-exhibition", "./assets/sound/song.mp3");

        this.lastSelectedPainting = null;
        this.canPlacePainting = false
        this.perspectiveRotation = 1689;
        this.isPositionSet = false;
        this.defaultPos = {x: 400, y: 400}
        this.paintingPositions = [
            {
                x: 2634,
                y: 1085,
                isOccupied: false
            },
            {
                x: 1964,
                y: 725,
                isOccupied: false
            },
            {
                x: 1464,
                y: 685,
                isOccupied: false
            }
        ]

        this.button = document.createElement("button")
        this.button.className =`nextButton button normal white`;
        this.button.textContent = "Valider";
        this.button.id = "end-exhibition-scene";
        document.getElementById("exhibition-info").appendChild(this.button);
    }

    fetchPaintings() {
        this.lastSelectedPainting = SelectedPaintings[SelectedPaintings.length - 1]

        for (let i = 0; i < SelectedPaintings.length - 1; i++) {
            let painting = SelectedPaintings[i];
            let sprite = new Sprite(painting.src + ".jpg", painting.width, painting.height, painting.x, painting.y, "paintings-container");
            this.fixPaintingPosition(sprite.element, {x: painting.x, y: painting.y});
            this.rotatePainting(sprite.element);
        }
        let painting = new Sprite(this.lastSelectedPainting.src + ".jpg", this.lastSelectedPainting.width, this.lastSelectedPainting.height, 150, 150, "selected-container");
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
        if (!painting) {
            return;
        }
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
    getClosestPosition (inputPosition) {
        let closestPositionIndex = null;

        this.paintingPositions.forEach((position, index) => {
            if (!position.isOccupied 
                && this.calculateDistance(inputPosition.x, inputPosition.y, position.x, position.y) < 300) {
                closestPositionIndex = index;
            }
        })

        return closestPositionIndex;
    }

    initScene() {
        super.initScene();
        this.fetchPaintings();
        this.fetchElements();
        this.button.disabled = true;

        // Nettoyage des anciens handlers
        if (this.placeHandler || this.validateHandler) {
            this.button.removeEventListener("click", this.validateHandler);
            document.removeEventListener("click", this.placeHandler); // Changé pour document
        }

        this.validateHandler = () => {
            if (this.isPositionSet) {
                return;
            }

            this.isPositionSet = true;
            this.lastSelectedPainting.position.isOccupied = true;
            this.showElement();
            this.endSceneDialogue()
        }

        this.placeHandler = (event) => {
            if (this.isPositionSet || !this.canPlacePainting) {
                return;
            }
            this.setPaintingPosition({x: event.clientX, y: event.clientY});
        }

        // Setup des images
        let empty1 = document.createElement("img")
        empty1.style.position = "absolute"
        empty1.style.top = "0px"
        empty1.src = "./assets/img/scenes/emplacement_tab_1.png";
        let empty2 = document.createElement("img")
        empty2.style.position = "absolute"
        empty2.style.top = "0px"
        empty2.src = "./assets/img/scenes/emplacement_tab_2.png";
        let empty3 = document.createElement("img")
        empty3.style.position = "absolute"
        empty3.style.top = "0px"
        empty3.src = "./assets/img/scenes/emplacement_tab_3.png";

        let container = document.getElementById("empty-container");
        container.appendChild(empty1);
        container.appendChild(empty2);
        container.appendChild(empty3);

        this.canPlacePainting = false;
        Game.getInstance().dialogue.listDialogue(["0-2-0"]);
        Game.getInstance().once("onDialogueClosed", () => {
            this.canPlacePainting = true;
        });

        // Attacher les handlers
        this.button.addEventListener("click", this.validateHandler);
        document.addEventListener("click", this.placeHandler); // Changé pour document
    }

    showElement() {
        let filteredElements = Elements.filter((element) => {
            return element.thematic === this.lastSelectedPainting.thematic;
        });
        if (filteredElements.length < 1) {
            return console.error("No element found");
        }
        let element = filteredElements[Math.floor(Math.random() * filteredElements.length)];
        let elemDom = document.createElement("img");
        elemDom.src = element.src;
        elemDom.classList.add("element");
        elemDom.style.top = element.y;
        elemDom.style.left = element.x;
        let container = document.getElementById("elements-container");
        container.appendChild(elemDom);
        SelectedElements.push(element);
    }

    endSceneDialogue() {
        Game.getInstance().dialogue.listDialogue([`${Game.getInstance().gameProgression}-2-1`])
        Game.getInstance().once("onDialogueClosed", () => {
            Game.getInstance().updateGameProgression()
        })
    }

    fixPaintingPosition(elem, pos) {
        if (!elem) {
            return;
        }
        const paintingWidth = elem.offsetWidth;
        const paintingHeight = elem.offsetHeight;

        const centeredLeft = pos.x - paintingWidth / 2;
        const centeredTop = pos.y - paintingHeight / 2;

        elem.style.left = `${centeredLeft}px`;
        elem.style.top = `${centeredTop}px`;
    }

    setPaintingPosition(pos) {
        const painting = document.querySelector("#selected-container").children[0];
        const positionIndex = this.getClosestPosition(pos);
        const selectedPosition = positionIndex !== null ? this.paintingPositions[positionIndex] : null;

        if (selectedPosition) {
            this.fixPaintingPosition(painting, selectedPosition);
            this.rotatePainting(painting);
            document.querySelector("#end-exhibition-scene").disabled = false;
            this.lastSelectedPainting.position = selectedPosition;
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
        this.cleanElements();
        this.cleanEmptyContainer();
        this.cleanSelectedContainer();
        this.isPositionSet = false;
    }

    cleanElements() {
        let container = document.getElementById("elements-container");
        if (container) {
            container.innerHTML = '';
        }
    }

    fetchElements() {
        SelectedElements.forEach((element) => {
            let sprite = new Sprite(element.src, element.width, element.height, element.x, element.y, "elements-container");
            sprite.element.style.zIndex = element.zIndex;
        })
    }

    cleanEmptyContainer() {
        let container = document.getElementById("empty-container");
        container.innerHTML = '';
    }

    cleanSelectedContainer() {
        let container = document.getElementById("selected-container");
        container.innerHTML = '';
    }
}