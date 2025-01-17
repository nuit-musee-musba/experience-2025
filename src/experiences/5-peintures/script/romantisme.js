// ======================== CONFIGURATION DU JEU ========================
const rounds = [
  {
    name: "Le corps de la femme",
    image: "images/p1romantisme.webp",
    persistentTitle: "Le corps de la femme",
    persistentText: "La peau de la femme représente la pureté et la fragilité.",
    correctColor: "#D0C0A7",
    failTitle: "Henri Gervex",
    failText: "Faux ! \n\nAttention, le corps de la femme représente la délicatesse !",
    perso2Pos: "25.25rem" // Position pour ce round
  },
  {
    name: "Les draps",
    image: "images/p2romantisme.webp",
    persistentTitle: "Les draps",
    persistentText: "J’aimerais attirer l’attention avec les draps, avec un air d'innocence et de vulnérabilité.",
    correctColor: "#D7D7D7",
    failTitle: "Henri Gervex",
    failText: "Faux ! \n\nAttention, les draps représente la fragilité.",
    perso2Pos: "25.25rem" // Position pour ce round
  },
  {
    name: "La couverture",
    image: "images/p3romantisme.webp",
    persistentTitle: "La couverture",
    persistentText: "Cette couverture évoque la mélancolie.",
    correctColor: "#637988",
    failTitle: "Henri Gervex",
    failText: "Faux ! \n\nAttention, la couverture évoque la tristesse.",
    perso2Pos: "19.25rem" // Position pour ce round
  },
  {
    name: "Le corset",
    image: "images/p4romantisme.webp",
    persistentTitle: "Le corset",
    persistentText: "Le corset est associé à l’amour et au désir.",
    correctColor: "#853E2F",
    failTitle: "Henri Gervex",
    failText: "Faux ! \n\nAttention, le corset représente la sensualité.",
    perso2Pos: "19.25rem" // Position pour ce round
  },
];

const successTitle = "Réussi !";
const successText = "Tu as réussi";

// ======================== ÉTAT DU JEU ========================
let currentRoundIndex = 0;
let selectedColor = null; // Couleur sélectionnée par l’utilisateur

// ======================== SÉLECTION DES ÉLÉMENTS DOM ========================
const artworkImage = document.getElementById('artworkImage');
const persistentTitle = document.getElementById('persistentTitle');
const persistentText = document.getElementById('persistentText');
const colorCards = document.querySelectorAll('.color-card');
const validateBtn = document.getElementById('validateColor');

// Boîte de dialogue en bas de l'écran
const contentBlock = document.querySelector('.content-block');
const dialogueTextElem = document.getElementById('dialogueText');
const titleElement = contentBlock.querySelector('h1');
const overlay = document.getElementById('overlay');
const character = document.querySelector('.character');
const perso2Image = document.querySelector('.perso2-image'); // Nouvelle sélection

// Boutons dans la boîte de dialogue
const nextButton = document.getElementById('nextDialogue');
const closeDialogBtn = document.getElementById('closeDialog');

// ======================== INITIALISATION ========================
window.addEventListener('DOMContentLoaded', () => {
  // On démarre sur le premier round
  loadRound(currentRoundIndex);
});

// ======================== FONCTION : Charger un round ========================
function loadRound(index) {
  const roundData = rounds[index];

  // Désactiver la transition pour les rounds
  perso2Image.style.transition = "none";

  // Mettre à jour l’image principale
  fadeToNewImage(artworkImage, roundData.image);

  // Mettre à jour la *persistent-dialog* (titre et texte)
  persistentTitle.textContent = roundData.persistentTitle;
  persistentText.textContent = roundData.persistentText;

  // Réinitialiser la sélection de couleur
  selectedColor = null;
  colorCards.forEach((c) => c.classList.remove("selected"));

  // Mettre à jour la position de perso2-image
  if (roundData.perso2Pos) {
    perso2Image.style.top = roundData.perso2Pos;
  }
}




// ======================== FONCTION : Fade d’une image à une autre ========================
function fadeToNewImage(imgElement, newSrc) {
  // Transition "fadeOut" puis "fadeIn"
  imgElement.style.transition = "opacity 0.6s";
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = newSrc;
    imgElement.style.opacity = 1;
  }, 600);
}

// ======================== GESTION DU CHOIX DE COULEUR ========================
colorCards.forEach(card => {
  card.addEventListener('click', () => {
    // Retire la classe "selected" sur toutes
    colorCards.forEach(c => c.classList.remove('selected'));
    // Ajoute "selected" à la carte cliquée
    card.classList.add('selected');
    selectedColor = card.dataset.color;
  });
});

// ======================== SÉPARATION DU HANDLER ========================
let typingTimeoutId = null; // Variable pour stocker l'ID du timeout
let isTyping = false; // Indicateur d'état de l'effet typewriter

function validateColorHandler() {
  if (!selectedColor) {
    // Aucune couleur sélectionnée
    showDialogBox("Choisis d’abord une couleur en cliquant sur une carte !", "Erreur");
    return;
  }

  // Vérifier si la couleur est la bonne pour ce round
  const roundData = rounds[currentRoundIndex];
  if (selectedColor === roundData.correctColor) {
    // Bonne réponse
    currentRoundIndex++;
    if (currentRoundIndex < rounds.length) {
      // Passer au round suivant
      loadRound(currentRoundIndex);
    } else {
      // Il n’y a plus de round => Succès final
      triggerSuccessState();
    }
  } else {
    // Mauvaise réponse => on affiche le dialogue d’erreur
    showDialogBox(roundData.failText, roundData.failTitle);
  }
}

// ======================== Clic sur "Valider" ========================
validateBtn.addEventListener('click', validateColorHandler);

// ======================== SYSTÈME DE DIALOGUE (réutilisable) ========================
function showDialogBox(dialogueText, title) {
  // Mise à jour du titre
  if (title) {
    titleElement.textContent = title;
  } else {
    titleElement.textContent = "";
  }

  // On vide et on insère le texte
  dialogueTextElem.innerHTML = "";
  const p = document.createElement('p');
  p.classList.add('dialogue-text');
  dialogueTextElem.appendChild(p);

  // Machine à écrire
  typeWriter(dialogueText, p);

  // On rend la boîte de dialogue visible
  contentBlock.classList.add('visible');

  // Overlay
  overlay.classList.add('visible');

  // On masque le bouton "Suivant" (pas utile dans ce jeu linéaire)
  nextButton.classList.add('hidden');

  // On affiche le bouton "Fermer" pour fermer la pop-up
  closeDialogBtn.classList.remove('hidden');
  closeDialogBtn.classList.add('visible'); // Ajout de la classe 'visible'

  // Réafficher le personnage s'il était masqué
  if (!character.classList.contains('visible')) {
    character.classList.remove('hidden', 'slideOutLeft');
    character.classList.add('visible', 'slideInLeft');
  }
}

// ======================== FERMETURE DU DIALOGUE AVEC ANIMATION ========================
closeDialogBtn.addEventListener('click', () => {
  // Annuler l'effet typewriter si en cours
  if (isTyping && typingTimeoutId) {
    isTyping = false;
    clearTimeout(typingTimeoutId);
    typingTimeoutId = null;
  }

  // Ajouter la classe d'animation fadeOutDown à contentBlock
  contentBlock.classList.add('fadeOutDown');

  // Ajouter la classe d'animation fadeOut à overlay
  overlay.classList.add('fadeOut');

  // Masquer le bouton "Fermer"
  closeDialogBtn.classList.remove('visible');
  closeDialogBtn.classList.add('hidden');

  // Animer le personnage pour le faire disparaître
  if (character.classList.contains('visible')) {
    character.classList.remove('slideInLeft');
    character.classList.add('slideOutLeft');
  }

  // Écouter la fin de l'animation sur contentBlock
  contentBlock.addEventListener('animationend', handleDialogFadeOut, { once: true });
});

// Fonction pour gérer la fin de l'animation fadeOutDown
function handleDialogFadeOut() {
  // Retirer les classes d'animation
  contentBlock.classList.remove('fadeOutDown');

  // Masquer la boîte de dialogue
  contentBlock.classList.remove('visible');

  // Masquer l'overlay
  overlay.classList.remove('visible');
  overlay.classList.remove('fadeOut');

  // Masquer le personnage après l'animation de sortie
  if (character.classList.contains('slideOutLeft')) {
    setTimeout(() => {
      character.classList.remove('visible', 'slideOutLeft');
      character.classList.add('hidden');
    }, 800); // Durée de l'animation de sortie (doit correspondre à l'animation CSS)
  }
}

// ======================== EFFET "Machine à écrire" ========================
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

// ======================== FONCTION : Gérer l'État de Succès ========================
function triggerSuccessState() {
  const cardsRow = document.querySelector('.cards-row');
  const persistentDialog = document.querySelector('.persistent-dialog');
  const validateBtn = document.getElementById('validateColor');
  const artworkImage = document.getElementById('artworkImage');
  const perso2Image = document.querySelector('.perso2-image');

  // Étape 1 : Faire disparaître les cartes avec l'animation fadeOutDown
  if (cardsRow) {
    cardsRow.classList.add('fadeOut');
    cardsRow.addEventListener('animationend', () => {
      cardsRow.style.display = 'none'; // Masquer définitivement après l'animation

      // Étape 2 : Réactiver la transition
      perso2Image.style.transition =
        "top 1s cubic-bezier(0.19, 1, 0.22, 1), right 1s cubic-bezier(0.19, 1, 0.22, 1), width 1s cubic-bezier(0.19, 1, 0.22, 1), height 1s cubic-bezier(0.19, 1, 0.22, 1)";
      perso2Image.style.top = "60.25rem"; // Revenir à la position initiale
      // Étape 3 : Après un court délai, exécuter le reste des animations et mises à jour
      setTimeout(() => {
        fadeToNewImage(artworkImage, "images/pfinaleromantisme.webp");

        persistentDialog.classList.add('success');
        perso2Image.classList.add('success');

        validateBtn.textContent = "Suivant";

        document.body.classList.add('success-state');

        const persistentTitle = document.getElementById('persistentTitle');
        const persistentText = document.getElementById('persistentText');
        persistentTitle.textContent = "Henri Gervex";
        persistentText.textContent = "Bravo ! En révélant les nuances de passion et de désir, tu as capturé l’intensité de cette scène. Tu as parfaitement su faire revivre l’émotion que j’ai voulu transmettre à travers Rolla.";

        validateBtn.removeEventListener('click', validateColorHandler);
        validateBtn.addEventListener('click', () => {
          window.location.href = "end-game.html";
        });
      }, 300); // Délai après disparition des cartes (ajustable)
    }, { once: true });
  }
}


// ======================== FONCTION : Fade d’une image à une autre ========================
function fadeToNewImage(imgElement, newSrc) {
  // Transition "fadeOut" puis "fadeIn"
  imgElement.style.transition = "opacity 0.6s";
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = newSrc; // Changer la source de l'image
    imgElement.style.opacity = 1; // Réapparaître progressivement
  }, 600);
}
