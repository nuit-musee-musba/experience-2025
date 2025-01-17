// ======================== CONFIGURATION DU JEU ========================
const rounds = [
  {
    name: "Jésus dans son linceul",
    image: "images/p1baroque.webp",
    persistentTitle: "Jésus dans son linceul",
    persistentText: "Pour moi la couleur de la peau du Christ représente sa pureté, son innocence et sa vulnérabilité.",
    correctColor: "#F6EAAE",
    failTitle: "VAN DEN HOECKE Jan",
    failText: "Faux ! \n\nAttention, les draps représentent la sainteté !",
    perso2Pos: "26.25rem" // Position pour ce round
  },
  {
    name: "La Vierge",
    image: "images/p2baroque.webp",
    persistentTitle: "La Vierge",
    persistentText: "Le vêtement de la vierge évoque la divinité céleste et la compassion.",
    correctColor: "#51617A",
    failTitle: "VAN DEN HOECKE Jan",
    failText: "Faux ! \n\nAttention, la vierge Marie représente la loyauté !",
    perso2Pos: "20.25rem" // Position pour ce round
  },
  {
    name: "Vêtement",
    image: "images/p3baroque.webp",
    persistentTitle: "Vêtement",
    persistentText: "Ce vêtement est synonyme de sacrifice.",
    correctColor: "#BF7D65",
    failTitle: "VAN DEN HOECKE Jan",
    failText: "Faux ! \n\nAttention, le vêtement représente le dévouement !",
    perso2Pos: "14.25rem" // Position pour ce round
  },
  {
    name: "L’homme",
    image: "images/p4baroque.webp",
    persistentTitle: "L’homme",
    persistentText: "L'homme au premier plan contraste avec le blanc, symbolisant le deuil et la gravité.",
    correctColor: "#715C3E",
    failTitle: "VAN DEN HOECKE Jan",
    failText: "Faux ! \n\nAttention, l’homme représente la perte !",
    perso2Pos: "20.25rem" // Position pour ce round
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
        fadeToNewImage(artworkImage, "images/pfinalebaroque.webp");

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
