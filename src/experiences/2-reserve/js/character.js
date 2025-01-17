import {Modal} from "../../../commons/components/Modal.js";

export default class Character {
    constructor() {
    }

    showCharacter(emotion){
        let character = document.querySelector('#character');
        this.changeCharacterFace(emotion);
        character.style.display = "block"
    }

    hideCharacter(){
        let character = document.querySelector('#character');
        character.style.display = "none"
    }

    changeCharacterFace(emotion){
        let character = document.querySelector('#character');

        switch (emotion) {
            case  0: //neutral
                character.src = `./assets/img/tristan/tristan.gif`;
                break;
            case 1 : //showing
                character.src = `./assets/img/tristan/tristan.gif`;
                break;
            default:
                this.hideCharacter()
                break;
        }
    }
}