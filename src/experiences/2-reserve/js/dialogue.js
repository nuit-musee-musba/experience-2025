import { DIALOGUES } from '/data/dialogues.js'

export default class Dialogue{
    constructor(){
       
    }


    
    listDialogue(arrayDialoguesId, dialogueElementSelector) {
      let currentIndex = 0;
      const conteneurDialogue = document.querySelector(dialogueElementSelector);
      console.log('arrayDialoguesId', arrayDialoguesId);
      console.log('conteneurDialogue', conteneurDialogue);
      conteneurDialogue.addEventListener("click", () => {
          if (currentIndex < arrayDialoguesId.length) {
              console.log('Boucle !');
              const dialogue = this.findDialogue(arrayDialoguesId[currentIndex]);
              if (dialogue) {
                  conteneurDialogue.innerText = dialogue.text;
                  currentIndex++; 
              } else {
                  console.error(`Dialogue non trouvé pour l'ID : ${arrayDialoguesId[currentIndex]}`);
              }
          } else {
              console.log("Tous les dialogues ont été affichés.");
              this.closeDialogue(dialogueElementSelector); 
          }
      });
    }
  

    showDialogue( dialogue, dialogueElementSelector) {
        const conteneurDialogue = document.querySelector(dialogueElementSelector);
        conteneurDialogue.innerText = dialogue.text; 
        conteneurDialogue.style.display = 'block'; 

      }

    closeDialogue(dialogueElementSelector) {
        const textDialogue = document.querySelector(dialogueElementSelector);
        textDialogue.style.display = 'none'; 
    }

    findDialogue(dialogueId){
      return  DIALOGUES[dialogueId];
  }
}