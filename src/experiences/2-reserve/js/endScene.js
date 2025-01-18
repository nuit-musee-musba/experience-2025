import SelectedPaintings from "../data/selectedPaintings.js"
import SelectedElements from "../data/selectedElements.js";
import Sprite from "./sprite.js";
import Scene from "./scene.js";
import selectedPaintings from "../data/selectedPaintings.js";
import Game from "./Game.js";
import selectedElements from "../data/selectedElements.js";
import { Modal } from "../../../commons/components/Modal.js";
import descriptionExposition from "../data/descriptionExposition.js";


export default class EndScene extends Scene {
    constructor() {
        super("end-scene", "/2-reserve/assets/sound/song.mp3");
        this.perspectiveRotation = 1689;

        this.endModal;
    }

    initScene(){
        super.initScene()
        this.fetchElements()
        this.fetchPaintings()
        Game.getInstance().once("onDialogueClosed", () => {
            this.showDescriptionFinal();
        })
        Game.getInstance().dialogue.listDialogue(["2-2-2", `3-0-0`]);
    }


    showDescriptionFinal(){
        let parentElement = document.querySelector('#' + this.name)
        let exhibitionThematic = [];
        SelectedPaintings.forEach(element => {
            exhibitionThematic.push(element.thematic)
        });

        let description = descriptionExposition.find((description) => {
            return arraysHaveSameElements(description.thematic, exhibitionThematic);
        });
        
        function arraysHaveSameElements(arr1, arr2) {
            if (arr1.length !== arr2.length) return false; // Vérifie si les tailles sont différentes
        
            // Trie les tableaux et compare élément par élément
            const sortedArr1 = [...arr1].sort();
            const sortedArr2 = [...arr2].sort();
        
            return sortedArr1.every((value, index) => value === sortedArr2[index]);
        }

        this.reloadButton = document.createElement("button")
        this.reloadButton.className =`nextButton button normal white rightBottom`;
        this.reloadButton.textContent = "Recommencer";
        this.reloadButton.id = "reload-game";

        this.closeButton = document.createElement("button")
        this.closeButton.className =`nextButton button small white`;
        this.closeButton.textContent = "Fermer";
        this.closeButton.id = "close-end-modal";

        this.endModal = new Modal(description.title, description.description, "modalEnd", parentElement)
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.style.display = 'flex';
        this.buttonContainer.style.justifyContent = 'flex-end';
        this.endModal.modal.appendChild(this.buttonContainer);
        this.buttonContainer.appendChild(this.closeButton);
        this.closeButton.style.marginRight = "32px"
        this.closeButton.style.marginBottom = "32px"
        this.endModal.titleElement.className += 'h3-title-serif'
        this.elem.appendChild(this.reloadButton);
        this.closeButton.addEventListener("click", () => {
            this.endModal.remove()
            this.endModal = null;
        });

        if (this.reloadHandler && this.reloadButton !== null) {
            this.reloadButton.removeEventListener("click", this.reloadHandler);
        }
        this.reloadHandler = () => {
            Game.getInstance().resetGame()
        }
        this.reloadButton.addEventListener("click", this.reloadHandler);
    }


    fetchPaintings() {
        for (let i = 0; i < SelectedPaintings.length; i++) {
            let painting = SelectedPaintings[i];
            let sprite = new Sprite(painting.src + ".webp", painting.width, painting.height, painting.position.x, painting.position.y, "end-paintings-container");
            sprite.element.style.zIndex = "1";
            this.fixPaintingPosition(sprite.element, {x: painting.position.x, y: painting.position.y});
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
        if (this.endModal) {
            this.endModal.remove()
            this.endModal = null;
        }

        this.reloadButton.remove()
        this.reloadButton = null
    }
}

