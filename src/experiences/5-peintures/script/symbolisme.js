
const rounds = [
  {
    name: "L’herbe",
    image: "images/p1symbolisme.webp",
    persistentTitle: "L’herbe",
    persistentText: "L'herbe et le feuillage symbolisent le cycle de la vie, porteurs d'espoir en une renaissance spirituelle.",
    correctColor: "#6E6F58",
    failTitle: "Odilon Redon",
    failText: "Faux ! \n\nAttention, l’herbe contraste avec la mort !",
    perso2Pos: "25.25rem" 
  },
  {
    name: "Les fleurs",
    image: "images/p2symbolisme.webp",
    persistentTitle: "Les fleurs",
    persistentText: "Regarde attentivement les fleurs, disséminées au pied du saint, ces fleurs rappellent le sang et le sacrifice.",
    correctColor: "#BD5A4E",
    failTitle: "Odilon Redon",
    failText: "Faux ! \n\nAttention, les roses symbolisent le sang !",
    perso2Pos: "25.25rem" 
  },
  {
    name: "Le nuage",
    image: "images/p3symbolisme.webp",
    persistentTitle: "Le nuage",
    persistentText: "Le nuage suggère une atmosphère mystique et irréelle, renforçant le caractère sacré du sacrifice.",
    correctColor: "#604F97",
    failTitle: "Odilon Redon",
    failText: "Faux ! \n\nLe nuage suggère une atmosphère mystique et irréelle, renforçant le caractère sacré du sacrifice.",
    perso2Pos: "25.25rem" 
  },
  {
    name: "Le ciel",
    image: "images/p4symbolisme.webp",
    persistentTitle: "Le ciel",
    persistentText: "Le haut du ciel représente la lumière céleste, c’est un symbole d'espoir.",
    correctColor: "#E6BB41",
    failTitle: "Odilon Redon",
    failText: "Faux ! \n\nAttention, pour le ciel pense à une couleur lumineuse !",
    perso2Pos: "25.25rem" 
  },
];
const successTitle = "Réussi !";
const successText = "Tu as réussi";
let currentRoundIndex = 0;
let selectedColor = null; 
const artworkImage = document.getElementById('artworkImage');
const persistentTitle = document.getElementById('persistentTitle');
const persistentText = document.getElementById('persistentText');
const colorCards = document.querySelectorAll('.color-card');
const validateBtn = document.getElementById('validateColor');
const contentBlock = document.querySelector('.content-block');
const dialogueTextElem = document.getElementById('dialogueText');
const titleElement = contentBlock.querySelector('h1');
const overlay = document.getElementById('overlay');
const character = document.querySelector('.character');
const perso2Image = document.querySelector('.perso2-image'); 
const nextButton = document.getElementById('nextDialogue');
const closeDialogBtn = document.getElementById('closeDialog');
window.addEventListener('DOMContentLoaded', () => {
  loadRound(currentRoundIndex);
});
function loadRound(index) {
  const roundData = rounds[index];
  perso2Image.style.transition = "none";
  fadeToNewImage(artworkImage, roundData.image);
  persistentTitle.textContent = roundData.persistentTitle;
  persistentText.textContent = roundData.persistentText;
  selectedColor = null;
  colorCards.forEach((c) => c.classList.remove("selected"));
  if (roundData.perso2Pos) {
    perso2Image.style.top = roundData.perso2Pos;
  }
}
function fadeToNewImage(imgElement, newSrc) {
  imgElement.style.transition = "opacity 0.6s";
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = newSrc;
    imgElement.style.opacity = 1;
  }, 600);
}
colorCards.forEach(card => {
  card.addEventListener('click', () => {
    colorCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedColor = card.dataset.color;
  });
});
let typingTimeoutId = null; 
let isTyping = false; 
function validateColorHandler() {
  if (!selectedColor) {
    showDialogBox("Choisis d’abord une couleur en cliquant sur une carte !", "Erreur");
    return;
  }
  const roundData = rounds[currentRoundIndex];
  if (selectedColor === roundData.correctColor) {
    currentRoundIndex++;
    if (currentRoundIndex < rounds.length) {
      loadRound(currentRoundIndex);
    } else {
      triggerSuccessState();
    }
  } else {
    showDialogBox(roundData.failText, roundData.failTitle);
  }
}
validateBtn.addEventListener('click', validateColorHandler);
function showDialogBox(dialogueText, title) {
  if (title) {
    titleElement.textContent = title;
  } else {
    titleElement.textContent = "";
  }
  dialogueTextElem.innerHTML = "";
  const p = document.createElement('p');
  p.classList.add('dialogue-text');
  dialogueTextElem.appendChild(p);
  typeWriter(dialogueText, p);
  contentBlock.classList.add('visible');
  overlay.classList.add('visible');
  nextButton.classList.add('hidden');
  closeDialogBtn.classList.remove('hidden');
  closeDialogBtn.classList.add('visible'); 
  if (!character.classList.contains('visible')) {
    character.classList.remove('hidden', 'slideOutLeft');
    character.classList.add('visible', 'slideInLeft');
  }
}
closeDialogBtn.addEventListener('click', () => {
  if (isTyping && typingTimeoutId) {
    isTyping = false;
    clearTimeout(typingTimeoutId);
    typingTimeoutId = null;
  }
  contentBlock.classList.add('fadeOutDown');
  overlay.classList.add('fadeOut');
  closeDialogBtn.classList.remove('visible');
  closeDialogBtn.classList.add('hidden');
  if (character.classList.contains('visible')) {
    character.classList.remove('slideInLeft');
    character.classList.add('slideOutLeft');
  }
  contentBlock.addEventListener('animationend', handleDialogFadeOut, { once: true });
});
function handleDialogFadeOut() {
  contentBlock.classList.remove('fadeOutDown');
  contentBlock.classList.remove('visible');
  overlay.classList.remove('visible');
  overlay.classList.remove('fadeOut');
  if (character.classList.contains('slideOutLeft')) {
    setTimeout(() => {
      character.classList.remove('visible', 'slideOutLeft');
      character.classList.add('hidden');
    }, 800); 
  }
}
function typeWriter(text, element) {
  isTyping = true;
  let index = 0;
  element.innerHTML = "";
  function addChar() {
    if (index < text.length && isTyping) {
      const span = document.createElement('span');
      span.textContent = text[index];
      span.classList.add('char');
      element.appendChild(span);
      index++;
      typingTimeoutId = setTimeout(addChar, 20);
    } else {
      isTyping = false;
      typingTimeoutId = null;
    }
  }
  addChar();
}
function triggerSuccessState() {
  const cardsRow = document.querySelector('.cards-row');
  const persistentDialog = document.querySelector('.persistent-dialog');
  const validateBtn = document.getElementById('validateColor');
  const artworkImage = document.getElementById('artworkImage');
  const perso2Image = document.querySelector('.perso2-image');
  if (cardsRow) {
    cardsRow.classList.add('fadeOut');
    cardsRow.addEventListener('animationend', () => {
      cardsRow.style.display = 'none'; 
      perso2Image.style.transition =
        "top 1s cubic-bezier(0.19, 1, 0.22, 1), right 1s cubic-bezier(0.19, 1, 0.22, 1), width 1s cubic-bezier(0.19, 1, 0.22, 1), height 1s cubic-bezier(0.19, 1, 0.22, 1)";
      perso2Image.style.top = "60.25rem"; 
      setTimeout(() => {
        fadeToNewImage(artworkImage, "images/pfinalesymbolisme.webp");
        persistentDialog.classList.add('success');
        perso2Image.classList.add('success');
        validateBtn.textContent = "Suivant";
        document.body.classList.add('success-state');
        const persistentTitle = document.getElementById('persistentTitle');
        const persistentText = document.getElementById('persistentText');
        persistentTitle.textContent = "Odilon Redon";
        persistentText.textContent = "Bravo ! En révélant les nuances de mystère et de souffrance, tu as capturé l’intensité de cette scène. Tu as parfaitement su faire revivre l’émotion que j’ai voulu transmettre à travers Saint Sébastien.";
        validateBtn.removeEventListener('click', validateColorHandler);
        validateBtn.addEventListener('click', () => {
          window.location.href = "end-game.html";
        });
      }, 300); 
    }, { once: true });
  }
}
function fadeToNewImage(imgElement, newSrc) {
  imgElement.style.transition = "opacity 0.6s";
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = newSrc; 
    imgElement.style.opacity = 1; 
  }, 600);
}