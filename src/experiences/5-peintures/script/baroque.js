
const rounds = [
  {
    name: "Jésus dans son linceul",
    image: "/5-peintures/images/p1baroque.webp",
    persistentTitle: "Jésus dans son linceul",
    persistentText: "Pour moi la couleur de la peau du Christ représente sa pureté, son innocence et sa vulnérabilité.",
    correctColor: "#F6EAAE",
    failTitle: "VAN DEN HOECKE Jan",
    failText: "Faux ! \n\nAttention, les draps représentent la sainteté !",
    perso2Pos: "26.25rem" 
  },
  {
    name: "La Vierge",
    image: "/5-peintures/images/p2baroque.webp",
    persistentTitle: "La Vierge",
    persistentText: "Le vêtement de la vierge évoque la divinité céleste et la compassion.",
    correctColor: "#51617A",
    failTitle: "VAN DEN HOECKE Jan",
    failText: "Faux ! \n\nAttention, la vierge Marie représente la loyauté !",
    perso2Pos: "20.25rem" 
  },
  {
    name: "Vêtement",
    image: "/5-peintures/images/p3baroque.webp",
    persistentTitle: "Vêtement",
    persistentText: "Ce vêtement est synonyme de sacrifice.",
    correctColor: "#BF7D65",
    failTitle: "VAN DEN HOECKE Jan",
    failText: "Faux ! \n\nAttention, le vêtement représente le dévouement !",
    perso2Pos: "14.25rem" 
  },
  {
    name: "L’homme",
    image: "/5-peintures/images/p4baroque.webp",
    persistentTitle: "L’homme",
    persistentText: "L'homme au premier plan contraste avec le blanc, symbolisant le deuil et la gravité.",
    correctColor: "#715C3E",
    failTitle: "VAN DEN HOECKE Jan",
    failText: "Faux ! \n\nAttention, l’homme représente la perte !",
    perso2Pos: "20.25rem" 
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
        fadeToNewImage(artworkImage, "/5-peintures/images/pfinalebaroque.webp");
        persistentDialog.classList.add('success');
        perso2Image.classList.add('success');
        validateBtn.textContent = "Suivant";
        document.body.classList.add('success-state');
        const persistentTitle = document.getElementById('persistentTitle');
        const persistentText = document.getElementById('persistentText');
        persistentTitle.textContent = "VAN DEN HOECKE Jan";
        persistentText.textContent = "Bravo ! Avec tes choix de couleurs, tu as ressenti toute l’émotion que j’ai voulu transmettre : la douleur du deuil et la profondeur de la foi. Merci de faire revivre mon œuvre !";
        validateBtn.removeEventListener('click', validateColorHandler);
        validateBtn.addEventListener('click', () => {
          window.location.href = "end-game.html";
        });
      }, 300); 
    }, { once: true });
  }
}
