
const dialogues = [
  "Je suis Perugino le peintre de ce tableau !\nObserve bien, il montre une scène religieuse avec des couleurs vives.\n\nParmi un choix de trois palettes de couleurs différentes, devine laquelle a été utilisée dans mon tableau !"
];
let currentDialogue = 0;
let isTyping = false;
const dialogueText = document.getElementById('dialogueText');
const nextButton = document.getElementById('nextDialogue');
const closeDialogBtn = document.getElementById('closeDialog');
const btnText = document.getElementById('btnText');
const contentBlock = document.querySelector('.content-block');
const overlay = document.getElementById('overlay');
const character = document.querySelector('.character');
const titleElement = contentBlock.querySelector('h1');
function typeWriter(text, element, showCloseButton = true) {
  isTyping = true;
  let index = 0;
  element.innerHTML = '';
  function addChar() {
    if (index < text.length) {
      const span = document.createElement('span');
      span.textContent = text[index];
      span.classList.add('char');
      element.appendChild(span);
      index++;
      setTimeout(addChar, 20);
    } else {
      isTyping = false;
      if (showCloseButton && currentDialogue === dialogues.length - 1) {
        setTimeout(() => {
          closeDialogBtn.classList.add('visible');
        }, 100); 
      } else {
        nextButton.classList.remove('hidden');
      }
    }
  }
  addChar();
}
function showNextDialogue() {
  if (isTyping) {
    dialogueText.innerHTML = `<p class="dialogue-text">${dialogues[currentDialogue]}</p>`;
    isTyping = false;
    if (currentDialogue === dialogues.length - 1) {
      closeDialogBtn.classList.add('visible');
    }
    return;
  }
  currentDialogue++;
  if (currentDialogue === dialogues.length - 1) {
    nextButton.classList.add('hidden');
    closeDialogBtn.classList.add('visible');
  }
  if (currentDialogue < dialogues.length) {
    dialogueText.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('dialogue-text');
    dialogueText.appendChild(p);
    typeWriter(dialogues[currentDialogue], p);
  }
}
window.addEventListener('load', () => {
  const mainGameScreen = document.getElementById('mainGameScreen');
  mainGameScreen.classList.add('visible');
  const p = document.createElement('p');
  p.classList.add('dialogue-text');
  dialogueText.appendChild(p);
  typeWriter(dialogues[0], p);
  contentBlock.style.display = 'block';
  contentBlock.classList.add('visible');
  character.classList.add('visible', 'slideInLeft');
  overlay.classList.add('visible');
});
nextButton.addEventListener('click', showNextDialogue);
closeDialogBtn.addEventListener('click', () => {
  contentBlock.classList.remove('fadeInUp', 'visible');
  contentBlock.classList.add('fadeOutDown');
  overlay.classList.remove('visible');
  overlay.classList.add('fade-out');
  character.classList.remove('slideInLeft');
  character.classList.add('slideOutLeft');
});
contentBlock.addEventListener('animationend', (event) => {
  if (event.animationName === 'fadeOutDown') {
    contentBlock.style.display = 'none';
    contentBlock.classList.remove('fadeOutDown');
  }
});
overlay.addEventListener('animationend', (event) => {
  if (event.animationName === 'fadeOut') {
    overlay.classList.remove('fade-out');
  }
});
character.addEventListener('animationend', (event) => {
  if (event.animationName === 'slideOutLeft') {
    character.style.display = 'none';
    character.classList.remove('slideOutLeft');
  }
});
function showDialogBox(dialogueTextContent, title, showCloseButton = true) {
  if (title) {
    titleElement.textContent = title;
  }
  dialogueText.innerHTML = '';
  const p = document.createElement('p');
  p.classList.add('dialogue-text');
  dialogueText.appendChild(p);
  typeWriter(dialogueTextContent, p, showCloseButton);
  contentBlock.style.display = 'block';
  contentBlock.classList.remove('fadeOutDown', 'visible');
  contentBlock.classList.add('visible', 'fadeInUp');
  overlay.classList.remove('fade-out');
  overlay.classList.add('visible');
  character.style.display = 'flex';
  character.classList.remove('slideOutLeft');
  character.classList.add('visible', 'slideInLeft');
}
document.querySelectorAll('input[name="palette"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    const value = event.target.value;
    if (value === 'palette2') {
      const successDialogues = [
        "BRAVO !\n\nLes tons doux et lumineux du Perugino soulignent la sérénité de la Vierge et la spiritualité des saints. Bravo pour avoir décodé cette première étape du processus créatif !",
        "Maintenant que tu as compris l’importance de la palette dans l'interprétation d’un tableau, passons à une nouvelle étape !",
        "Ici, tu vas recolorier un élément clé du tableau, d’après ce que j’aimerais exprimer. Chaque couleur a une signification particulière ! Maintiens une couleur appuyée pour avoir sa symbolique. Glisse la bonne couleur sur l’élément en noir et blanc pour recoloriser mon tableau !"
      ];
      let currentSuccessIndex = 0;
      function showNextSuccessDialogue() {
        if (currentSuccessIndex < successDialogues.length) {
          const text = successDialogues[currentSuccessIndex];
          showDialogBox(text, "PERUGINO, Pietro di Cristoforo Vannucci", false); 
          currentSuccessIndex++;
          if (currentSuccessIndex === successDialogues.length) {
            nextButton.classList.add('hidden');
            closeDialogBtn.classList.add('visible'); 
          } else {
            nextButton.classList.remove('hidden');
            closeDialogBtn.classList.remove('visible'); 
          }
        }
      }
      function handleSuccessNext() {
        showNextSuccessDialogue();
      }
      function handleSuccessClose() {
        const paletteOptions = document.querySelector('.color-palette-options');
        paletteOptions.classList.add('fadeOut');
        paletteOptions.addEventListener('animationend', () => {
          paletteOptions.remove();
        }, { once: true });
        const mainGameH2 = document.querySelector('.main-game-content h2');
        mainGameH2.classList.add('fadeOut');
        mainGameH2.addEventListener('animationend', () => {
          mainGameH2.remove();
        }, { once: true });
        const artInfo = document.querySelector('.art-info');
        artInfo.classList.add('fadeOut');
        artInfo.addEventListener('animationend', () => {
          artInfo.remove();
        }, { once: true });
        nextButton.removeEventListener('click', handleSuccessNext);
        closeDialogBtn.removeEventListener('click', handleSuccessClose);
        nextButton.addEventListener('click', showNextDialogue);
        closeDialogBtn.classList.remove('visible');
        setTimeout(() => {
          window.location.href = "renaissance.html";
        }, 1000);
      }
      nextButton.classList.remove('hidden');
      closeDialogBtn.classList.remove('visible');
      nextButton.removeEventListener('click', showNextDialogue);
      nextButton.addEventListener('click', handleSuccessNext);
      closeDialogBtn.addEventListener('click', handleSuccessClose);
      showNextSuccessDialogue();
    } else if (value === 'palette1') {
      showDialogBox(
        "FAUX !\n\nCe n’est pas la bonne palette, elle est plus foncée, mais réessaye encore !", 
        "PERUGINO, Pietro di Cristoforo Vannucci"
      );
    } else if (value === 'palette3') {
      showDialogBox(
        "FAUX !\n\nCe n’est pas la bonne palette, mais réessaye encore !", 
        "PERUGINO, Pietro di Cristoforo Vannucci"
      );
    }
  });
});