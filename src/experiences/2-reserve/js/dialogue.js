import DIALOGUES from '../data/dialogues.js'
import Character from './character.js';
import {Modal} from "../../../commons/components/Modal.js";

export default class Dialogue extends Modal {
    constructor() {
        super("Tristan le conservateur", "TestContent", "dialogue")
        this.character = new Character();

        this.buttonElement = document.createElement('p');
        this.contentElement.textContent = this.content;
    }

    listDialogue(arrayDialoguesId) {
        this.show()
        let currentIndex = 0;
        const nextButton = document.querySelector('.nextButton')
        this.changeContent("", this.findDialogue(arrayDialoguesId[0]).text);

        nextButton.addEventListener("click", () => {
            if (currentIndex < arrayDialoguesId.length) {
                const dialogue = this.findDialogue(arrayDialoguesId[currentIndex]);
                console.log(dialogue);
                if (dialogue) {
                    this.content = dialogue.text;
                    this.character.showCharacter(dialogue.emotion);
                    currentIndex++;
                }
            } else {
                console.error("can't find dialogue with id " + arrayDialoguesId[currentIndex]);
                this.close();
            }
        });
    }

    close() {
        super.close();
        this.character.hideCharacter();
    }

    findDialogue(dialogueId) {
        return DIALOGUES.find((dialogue) => dialogue.id === dialogueId);
    }

    changeContent(title, content) {
        this.contentElement.textContent = content;
    }
}