import  DIALOGUES  from '../data/dialogues.js'

export default class Dialogue{
    constructor(){
       
    }
    listDialogue(arrayDialoguesId, dialogueElementSelector) {
      let currentIndex = 0;
      const nextButton = document.querySelector('.nextButton')
      const dialogueContainer = document.querySelector(dialogueElementSelector);
      nextButton.addEventListener("click", () => {
        
          if (currentIndex < arrayDialoguesId.length) {
              const dialogue = this.findDialogue(arrayDialoguesId[currentIndex]);
              if (dialogue) {
                  dialogueContainer.innerText = dialogue.text;
                  currentIndex++; 
              }
          } else {
              this.closeDialogue(dialogueElementSelector); 
          }
      });
    }

    

    showDialogue( dialogue, dialogueElementSelector) {
        const dialogueContainer = document.querySelector(dialogueElementSelector);
        dialogueContainer.innerText = dialogue.text; 
        dialogueContainer.style.display = 'block'; 

      }

    closeDialogue(dialogueElementSelector) {
        const textDialogue = document.querySelector(dialogueElementSelector);
        const dialogueNameContent = document.querySelector('.dialogueNameContent');
        dialogueNameContent.style.display = "none";
        textDialogue.style.display = 'none'; 
    }

    findDialogue(dialogueId){
        if (DIALOGUES[dialogueId] == undefined){
            return null
        }
      return  DIALOGUES[dialogueId];
  }
}