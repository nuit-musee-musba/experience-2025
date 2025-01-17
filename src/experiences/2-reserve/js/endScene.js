import SelectedPaintings from "../data/selectedPaintings.js"
import SelectedElements from "../data/selectedElements.js";
import Sprite from "./sprite.js";
import Scene from "./scene.js";
import selectedPaintings from "../data/selectedPaintings.js";

export default class EndScene extends Scene {
    constructor() {
        super("end-scene", null); 
        this.perspectiveRotation = 1689;
    }

    initScene(){
        super.initScene()
        this.fetchElements()
        this.fetchPaintings()
        
        console.log('selected painting', selectedPaintings)
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

    
}

