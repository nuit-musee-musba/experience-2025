import { DIALOGUES } from '/data/dialogues.js'

export default class Dialogue{
    constructor(){
       
    }

    findDialogue(dialogueId){
        return  DIALOGUES[dialogueId];
    }

    showDialogue( dialogueId, dialogueElementSelector) {
        var dialogue = this.findDialogue(dialogueId)
        const conteneurDialogue = document.querySelector(dialogueElementSelector);
        conteneurDialogue.innerText = dialogue.text; 
        conteneurDialogue.style.display = 'block'; 
       
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