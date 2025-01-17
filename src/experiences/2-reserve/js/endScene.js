import SelectedPaintings from "../data/selectedPaintings.js"
import SelectedElements from "../data/selectedElements.js";
import Sprite from "./sprite.js";
import Scene from "./scene.js";
import selectedPaintings from "../data/selectedPaintings.js";
import Game from "./Game.js";
import selectedElements from "../data/selectedElements.js";

export default class EndScene extends Scene {
    constructor() {
        super("end-scene", null); 
        this.perspectiveRotation = 1689;

        this.button = document.createElement("button")
        this.button.className =`nextButton button normal white rightBottom`;
        this.button.textContent = "Recommencer";
        this.button.id = "reload-game";
        document.getElementById("end-scene").appendChild(this.button);
    }

    initScene(){
        super.initScene()
        this.fetchElements()
        this.fetchPaintings()
        Game.getInstance().dialogue.listDialogue(["2-2-2", `3-0-0`]);
        if (this.placeHandler || this.reloadHandler) {
                    this.button.removeEventListener("click", this.reloadHandler);
                    document.removeEventListener("click", this.placeHandler); // Changé pour document
                }
        
                this.reloadHandler = () => {
                    Game.getInstance().resetGame()
                }
             

        this.button.addEventListener("click", this.reloadHandler);
        document.addEventListener("click", this.placeHandler); // Changé pour document
    }


    fetchPaintings() {
        for (let i = 0; i < SelectedPaintings.length; i++) {
            let painting = SelectedPaintings[i];
            let sprite = new Sprite(painting.src, painting.width, painting.height, painting.x, painting.y, "end-paintings-container");
            sprite.element.style.zIndex = "1";
            this.fixPaintingPosition(sprite.element, {x: painting.x, y: painting.y});
            this.rotatePainting(sprite.element);
        }
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

    fetchElements() {
        SelectedElements.forEach((element) => {
            let sprite = new Sprite(element.src, element.width, element.height, element.x, element.y, "end-elements-container");
            sprite.element.style.zIndex = "2";
        })
    }

    unloadScene(){
        super.unloadScene()
        selectedPaintings.splice(0, selectedPaintings.length);
        selectedElements.splice(0, selectedElements.length);

        const paintingsContainer = document.getElementById("end-paintings-container");
        const elementsContainer = document.getElementById("end-elements-container");

        if (paintingsContainer) {
            paintingsContainer.innerHTML = "";
        }
        if (elementsContainer) {
            elementsContainer.innerHTML = ""; 
        }

        
    }
    
}

