
const rounds = [
  {
    name: "Les saints",
    image: "/5-peintures/images/p1renaissance.webp",
    persistentTitle: "Les saints",
    persistentText: "Les vêtements des saints doivent refléter leur force, \nleur passion et leur sacrifice pour la foi.",
    correctColor: "#BD5A4E",
    failTitle: "PERUGIN, Pietro di Cristoforo Vannucci",
    failText: "Faux ! \n\nAttention, les Saints reflètent la passion du Christ !"
  },
  {
    name: "Les auréoles",
    image: "/5-peintures/images/p2renaissance.webp",
    persistentTitle: "La Vierge",
    persistentText: "La robe de la Vierge, doit évoquer la sérénité, \nla sagesse et le lien entre le ciel et la terre.",
    correctColor: "#3C514A",
    failTitle: "PERUGIN, Pietro di Cristoforo Vannucci",
    failText: "Faux ! \n\nAttention, La Vierge évoque la sagesse et la spiritualité !"
  },
  {
    name: "La Vierge",
    image: "/5-peintures/images/p3renaissance.webp",
    persistentTitle: "Les auréoles",
    persistentText: "Les auréoles doivent briller comme un symbole divin, \npour rappeler la pureté et la sainteté des personnages.",
    correctColor: "#9C8A54",
    failTitle: "PERUGIN, Pietro di Cristoforo Vannucci",
    failText: "Faux ! \n\nAttention les auréoles brillent comme des étoiles !"
  }
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
  fadeToNewImage(artworkImage, roundData.image);
  persistentTitle.textContent = roundData.persistentTitle;
  persistentText.textContent = roundData.persistentText;
  selectedColor = null;
  colorCards.forEach(c => c.classList.remove('selected'));
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
      setTimeout(() => {
        fadeToNewImage(artworkImage, "/5-peintures/images/pfinalerenaissance.webp");
        persistentDialog.classList.add('success');
        perso2Image.classList.add('success');
        validateBtn.textContent = "Suivant";
        while (validateBtn.firstChild) {
          validateBtn.removeChild(validateBtn.firstChild);
        }
        validateBtn.textContent = "Suivant";
        document.body.classList.add('success-state');
        const persistentTitle = document.getElementById('persistentTitle');
        const persistentText = document.getElementById('persistentText');
        persistentTitle.textContent = "PERUGIN, Pietro di Cristoforo Vannucci";
        persistentText.textContent = "J'ai choisi des couleurs pour exprimer des idées profondes : la lumière pour le divin, des teintes fortes pour la foi et l'amour, et des nuances douces pour la paix et la sagesse. Chaque choix aide à transmettre l’émotion que je voulais partager.";
        validateBtn.removeEventListener('click', validateColorHandler); 
        validateBtn.addEventListener('click', () => {
          window.location.href = "end-game.html";
        });
      }, 300); 
    }, { once: true });
  }
}
