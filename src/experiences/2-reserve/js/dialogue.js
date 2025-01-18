import DIALOGUES from '../data/dialogues.js'
import Character from './character.js';
import {Modal} from "../../../commons/components/Modal.js";
import Game from "./Game.js";

export default class Dialogue extends Modal {
    constructor() {
        super("Tristan, le Régisseur", "TestContent", "dialogue transitionAnimation _delay")
        this.character = new Character();

        this.contentElement.textContent = this.content;

        this.buttonContainer = document.createElement('div');
        this.buttonContainer.style.display = 'flex';
        this.buttonContainer.style.justifyContent = 'flex-end';
        this.button = document.createElement("button");
        this.button.style.marginRight = "32px"
        this.button.style.marginBottom = "32px"
        this.button.textContent = "Suivant";
        this.button.className =`nextButton button small white`;
        this.buttonContainer.appendChild(this.button);
        this.modal.appendChild(this.buttonContainer);
        this.titleElement.className='h3-title-serif';
    }

    listDialogue(arrayDialoguesId) {
        this.show();
        // Stockage de la référence à l'ancien handler si elle existe
        if (this.currentHandler) {
            this.button.removeEventListener("click", this.currentHandler);
        }

        let currentIndex = 1;

        this.changeContent("", this.findDialogue(arrayDialoguesId[0]).text);
        this.character.showCharacter(this.findDialogue(arrayDialoguesId[0]).emotion);
        if (arrayDialoguesId.length < 2) {
            this.button.textContent = "Fermer";
        }
        else {
            this.button.textContent = "Suivant";
        }

        // Création du nouveau handler
        this.currentHandler = () => {
            if (currentIndex < arrayDialoguesId.length) {
                const dialogue = this.findDialogue(arrayDialoguesId[currentIndex]);
                if (dialogue) {
                    this.changeContent("", dialogue.text);
                    this.character.showCharacter(dialogue.emotion);
                    currentIndex++;
                }
            } else {
                setTimeout(() => {
                    this.close();
                }, 100);
            }

            if (currentIndex === arrayDialoguesId.length) {
                this.button.textContent = "Fermer";
            }
        };

        // Ajout du nouveau handler
        this.button.addEventListener("click", this.currentHandler);
    }


    close() {
        super.close();
        this.character.hideCharacter();
        Game.getInstance().emit("onDialogueClosed");
    }

    findDialogue(dialogueId) {
        return DIALOGUES.find((dialogue) => dialogue.id === dialogueId);
    }

    changeContent(title, content) {
        this.contentElement.textContent = content;
    }
}