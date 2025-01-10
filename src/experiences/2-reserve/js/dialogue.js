import { dialogue } from 'data/dialogues.js'

export default class Dialogue{
    constructor(dialogueId){
        if (dialogue.hasOwnProperty(dialogueId)) {
            this.dialogue = dialogue[dialogueId];
          } else {
            throw new Error(`Dialogue ID "${dialogueId}" non trouvé dans les données.`);
          }
    }

    showDialogue(dialogueText, dialogueElementSelector) {
        const textDialogue = document.querySelector(dialogueElementSelector);
        if (textDialogue) {
          textDialogue.innerText = dialogueText; 
          textDialogue.style.display = 'block'; 
        } else {
          console.error(`Élément non trouvé : ${dialogueElementSelector}`);
        }
      }

      continuationDialogue(dialogueElementSelector, dialogueText) {
        const textDialogue = document.querySelector(dialogueElementSelector);
        if (textDialogue) {
          textDialogue.innerText = dialogueText; // Met à jour le texte
        } else {
          console.error(`Élément non trouvé : ${dialogueElementSelector}`);
        }
      }

    closeDialogue(dialogueElementSelector) {
        const textDialogue = document.querySelector(dialogueElementSelector);
        if (textDialogue) {
          textDialogue.style.display = 'none'; // Cache l'élément
        } else {
          console.error(`Élément non trouvé : ${dialogueElementSelector}`);
        }
    }

}
