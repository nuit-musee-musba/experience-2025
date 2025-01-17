// ======================== CONFIGURATION DU JEU ========================
const rounds = [
  {
    name: "Les saints",
    image: "images/p1renaissance.png",
    persistentTitle: "Les saints",
    persistentText: "Les vêtements des saints doivent refléter leur force, \nleur passion et leur sacrifice pour la foi.",
    correctColor: "#BD5A4E",
    failTitle: "PERUGIN, Pietro di Cristoforo Vannucci",
    failText: "Faux ! \n\nAttention, les Saints reflètent la passion du Christ !"
  },
  {
    name: "Les auréoles",
    image: "images/p2renaissance.png",
    persistentTitle: "La Vierge",
    persistentText: "La robe de la Vierge, doit évoquer la sérénité, \nla sagesse et le lien entre le ciel et la terre.",
    correctColor: "#3C514A",
    failTitle: "PERUGIN, Pietro di Cristoforo Vannucci",
    failText: "Faux ! \n\nAttention, La Vierge évoque la sagesse et la spiritualité !"
  },
  {
    name: "La Vierge",
    image: "images/p3renaissance.png",
    persistentTitle: "Les auréoles",
    persistentText: "Les auréoles doivent briller comme un symbole divin, \npour rappeler la pureté et la sainteté des personnages.",
    correctColor: "#9C8A54",
    failTitle: "PERUGIN, Pietro di Cristoforo Vannucci",
    failText: "Faux ! \n\nAttention les auréoles brillent comme des étoiles !"
  }
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

  // Mettre à jour l’image principale
  fadeToNewImage(artworkImage, roundData.image);

  // Mettre à jour la *persistent-dialog* (titre et texte)
  persistentTitle.textContent = roundData.persistentTitle;
  persistentText.textContent = roundData.persistentText;

  // Réinitialiser la sélection de couleur
  selectedColor = null;
  colorCards.forEach(c => c.classList.remove('selected'));
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
    // Ajouter la classe d'animation
    cardsRow.classList.add('fadeOut');
    cardsRow.addEventListener('animationend', () => {
      cardsRow.style.display = 'none'; // Masquer définitivement après l'animation

      // Étape 2 : Après un court délai, exécuter le reste des animations et mises à jour
      setTimeout(() => {
        // Remplacer l'image par pfinalerenaissance.png avec un fondu
        fadeToNewImage(artworkImage, "images/pfinalerenaissance.png");

        // Déplacer le persistent-dialog avec une animation fluide
        persistentDialog.classList.add('success');

        // Déplacer et redimensionner le personnage avec une animation fluide
        perso2Image.classList.add('success');

        // Changer le texte du bouton "Choisir" en "Suivant"
        validateBtn.textContent = "Suivant";
        while (validateBtn.firstChild) {
          validateBtn.removeChild(validateBtn.firstChild);
        }
        validateBtn.textContent = "Suivant";

        // Modifier l'apparence du bouton pour correspondre aux styles de succès
        document.body.classList.add('success-state');

        // Mettre à jour le titre et le texte de la boîte de dialogue persistante
        const persistentTitle = document.getElementById('persistentTitle');
        const persistentText = document.getElementById('persistentText');
        persistentTitle.textContent = "PERUGIN, Pietro di Cristoforo Vannucci";
        persistentText.textContent = "J'ai choisi des couleurs pour exprimer des idées profondes : la lumière pour le divin, des teintes fortes pour la foi et l'amour, et des nuances douces pour la paix et la sagesse. Chaque choix aide à transmettre l’émotion que je voulais partager.";

        // Ajouter un nouvel écouteur pour rediriger vers end-game.html
        validateBtn.removeEventListener('click', validateColorHandler); // Supprimer l'ancien écouteur
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
