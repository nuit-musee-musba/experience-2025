// colorGame.js

// =================== SYSTÈME DE DIALOGUE REUTILISÉ ===================
const initialDialogues = [
    "Bienvenue dans le deuxième jeu ! Choisis une couleur pour découvrir sa signification."
    // Tu peux ajouter d'autres dialogues initiaux si nécessaire
];
let currentDialogue = 0;
let isTyping = false;

// Sélecteurs
const dialogueText = document.getElementById('dialogueText');
const nextButton = document.getElementById('nextDialogue');
const closeDialogBtn = document.getElementById('closeDialog');

// Machine à écrire
function typeWriter(text, element) {
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
    }
  }
  addChar();
}

// Fonction pour afficher le dialogue suivant
function showNextDialogue() {
  if (isTyping) {
    dialogueText.innerHTML = `<p class="dialogue-text">${initialDialogues[currentDialogue]}</p>`;
    isTyping = false;
    return;
  }

  currentDialogue++;

  // Si on a atteint la fin des dialogues initiaux
  if (currentDialogue >= initialDialogues.length) {
    nextButton.classList.add('hidden');
    closeDialogBtn.classList.remove('hidden');
  } else {
    // Afficher le dialogue suivant
    dialogueText.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('dialogue-text');
    dialogueText.appendChild(p);
    typeWriter(initialDialogues[currentDialogue], p);
  }
}

// Initialiser au chargement
window.addEventListener('load', () => {
  const p = document.createElement('p');
  p.classList.add('dialogue-text');
  dialogueText.appendChild(p);
  typeWriter(initialDialogues[0], p);
});

// Clic sur "Suivant"
nextButton.addEventListener('click', showNextDialogue);

// Clic sur "Fermer" => on cache la dialogbox, le perso et l’overlay
closeDialogBtn.addEventListener('click', () => {
  const contentBlock = document.querySelector('.content-block');
  const character = document.querySelector('.character');
  const overlay = document.getElementById('overlay');

  // FadeOut animations
  contentBlock.style.animation = "fadeOutDown 0.8s ease-out forwards";
  character.style.animation = "slideOutLeft 0.8s ease-out forwards";
  overlay.style.animation = "fadeOut 0.8s ease-out forwards";

  // Après 0.8s, on masque complètement ces éléments
  setTimeout(() => {
    contentBlock.style.display = 'none';
    character.style.display = 'none';
    overlay.style.display = 'none';
  }, 800);
});

// =================== GESTION DU CHOIX DE COULEUR ===================
let selectedColor = null;
const colorCards = document.querySelectorAll('.color-card');

colorCards.forEach(card => {
    card.addEventListener('click', () => {
      // Retire la classe "selected" sur toutes
      colorCards.forEach(c => c.classList.remove('selected'));
      // Ajoute "selected" à la carte cliquée
      card.classList.add('selected');
      selectedColor = card.dataset.color;
    });
  });

// Clic sur "Valider"
const validateBtn = document.getElementById('validateColor');
validateBtn.addEventListener('click', () => {
  if(!selectedColor) {
    showDialogBox("Choisis d’abord une couleur en cliquant sur une carte !", "Erreur");
    return;
  }

  // Définir les dialogues selon la couleur sélectionnée
  let colorDialogues = [];
  let title = "";

  if(selectedColor === '#9C8A54') {
    title = "Signification de l'Or";
    colorDialogues = [
      "Or.\n\nDivin, Sacré, Éternel.\n\nL'or représente la richesse, la gloire et la lumière divine dans l'art de la Renaissance."
    ];
  } else if(selectedColor === '#3C514A') {
    title = "Signification du Bleu/Vert";
    colorDialogues = [
      "Bleu/Vert.\n\nSpiritualité, Pureté, Élévation.\n\nCes couleurs symbolisent la foi, l'espoir et la sérénité des saints."
    ];
  } else if(selectedColor === '#BD5A4E') {
    title = "Signification du Rouge";
    colorDialogues = [
      "Rouge.\n\nAmour divin, Foi, Sacrifice.\n\nLe rouge incarne la passion, la force et le martyr des saints dans leurs dévotions."
    ];
  }

  // Lancer le dialogue
  launchColorDialogue(title, colorDialogues);
});

// Fonction pour lancer le dialogue de la couleur choisie
function launchColorDialogue(title, dialoguesArray) {
  // Réinitialiser les dialogues
  currentDialogue = 0;
  isTyping = false;

  // Définir les nouveaux dialogues
  const originalDialogues = initialDialogues.slice(); // sauvegarde des dialogues initiaux
  initialDialogues.length = 0; // vider le tableau initialDialogues
  initialDialogues.push(...dialoguesArray); // ajouter les nouveaux dialogues

  // Afficher le premier dialogue de la couleur
  showDialogBox(initialDialogues[0], title);

  // Si plusieurs dialogues, gérer les boutons
  if (initialDialogues.length > 1) {
    nextButton.classList.remove('hidden');
    closeDialogBtn.classList.add('hidden');
  } else {
    nextButton.classList.add('hidden');
    closeDialogBtn.classList.remove('hidden');
  }

  // Restaurer les dialogues initiaux après avoir terminé
  // Optionnel : si tu veux permettre de revenir aux dialogues initiaux
  // Tu peux ajuster cette logique selon tes besoins
}

// =================== SYSTÈME DE DIALOGUE REUTILISÉ ===================
function showDialogBox(dialogueTextContent, title) {
  const contentBlock = document.querySelector('.content-block');
  const character = document.querySelector('.character');
  const overlay = document.getElementById('overlay');
  const dialogueText = document.getElementById('dialogueText');
  const titleElement = contentBlock.querySelector('h1');

  // Si un 'title' est fourni, on l'affiche dans le h1
  if (title) {
    titleElement.textContent = title;
  }

  // Réinitialiser le texte de la boîte de dialogue
  dialogueText.innerHTML = '';
  const p = document.createElement('p');
  p.classList.add('dialogue-text');
  dialogueText.appendChild(p);

  // Activer la machine à écrire
  typeWriter(dialogueTextContent, p);

  // Réafficher la boîte de dialogue
  contentBlock.style.display = 'block';
  contentBlock.style.animation = 'fadeInUp 0.8s ease-out forwards';

  // Réafficher le personnage si masqué
  if (character.style.display === 'none' || character.style.opacity === '0') {
    character.style.display = 'flex';
    character.style.animation = 'none';
    character.style.transform = 'translateX(-100%)';
    void character.offsetWidth; // reflow
    character.style.animation = 'slideInLeft 1s forwards'; 
    character.style.opacity = '1';
  }

  // Réafficher l'overlay
  overlay.style.display = 'block';
  overlay.style.animation = 'fadeIn 0.8s ease-out forwards';
}
