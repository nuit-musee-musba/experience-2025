// Dialogue initial à afficher au chargement
const dialogues = [
  "Je suis Perugino le peintre de ce tableau !\nObserve bien, il montre une scène religieuse avec des couleurs vives.\n\nParmi un choix de trois palettes de couleurs différentes, devine laquelle a été utilisée dans mon tableau !"
];

let currentDialogue = 0;
let isTyping = false;

// Sélecteurs
const dialogueText = document.getElementById('dialogueText');
const nextButton = document.getElementById('nextDialogue');
const closeDialogBtn = document.getElementById('closeDialog');
const btnText = document.getElementById('btnText');
const contentBlock = document.querySelector('.content-block');
const overlay = document.getElementById('overlay');
const character = document.querySelector('.character');
const titleElement = contentBlock.querySelector('h1');

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
      // Si c'est le dernier dialogue, afficher "Fermer" avec FadeIn
      if (currentDialogue === dialogues.length - 1) {
        setTimeout(() => {
          closeDialogBtn.classList.add('visible');
        }, 100); // Petit délai pour synchroniser avec l'animation
      } else {
        // Pour les dialogues suivants, afficher "Suivant"
        nextButton.classList.remove('hidden');
      }
    }
  }
  addChar();
}

// Gérer le clic "Suivant"
function showNextDialogue() {
  if (isTyping) {
    dialogueText.innerHTML = `<p class="dialogue-text">${dialogues[currentDialogue]}</p>`;
    isTyping = false;
    // Afficher "Fermer" si c'est le dernier dialogue
    if (currentDialogue === dialogues.length - 1) {
      closeDialogBtn.classList.add('visible');
    }
    return;
  }

  currentDialogue++;

  // Afficher "Fermer" au dernier dialogue
  if (currentDialogue === dialogues.length - 1) {
    // On masque le bouton "Suivant" entièrement
    nextButton.classList.add('hidden');
    // On affiche le bouton "Fermer" avec FadeIn
    closeDialogBtn.classList.add('visible');
  }

  // Afficher le dialogue suivant si disponible
  if (currentDialogue < dialogues.length) {
    dialogueText.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('dialogue-text');
    dialogueText.appendChild(p);
    typeWriter(dialogues[currentDialogue], p);
  }
}

// Initialiser au chargement
window.addEventListener('load', () => {
  // Faire apparaître le main game avec un fondu
  const mainGameScreen = document.getElementById('mainGameScreen');
  mainGameScreen.classList.add('visible');

  // Afficher la boîte de dialogue initiale avec l'overlay noir
  const p = document.createElement('p');
  p.classList.add('dialogue-text');
  dialogueText.appendChild(p);
  typeWriter(dialogues[0], p);

  contentBlock.style.display = 'block';
  contentBlock.classList.add('visible');

  // Afficher le personnage avec une animation de slideIn
  character.classList.add('visible', 'slideInLeft');

  // Afficher l'overlay noir
  overlay.classList.add('visible');
});

// Clic sur "Suivant"
nextButton.addEventListener('click', showNextDialogue);

// Clic sur "Fermer" => on cache la dialogbox et l’overlay avec FadeOut
closeDialogBtn.addEventListener('click', () => {
  // Supprimer les classes d'animation précédentes
  contentBlock.classList.remove('fadeInUp', 'visible');
  
  // Appliquer l'animation de fadeOutDown à la boîte de dialogue
  contentBlock.classList.add('fadeOutDown');

  // Appliquer l'animation de fadeOut à l'overlay
  overlay.classList.remove('visible');
  overlay.classList.add('fade-out');

  // Appliquer l'animation de slideOutLeft au personnage
  character.classList.remove('slideInLeft');
  character.classList.add('slideOutLeft');
});

// Écouteur pour la fin de l'animation fadeOutDown
contentBlock.addEventListener('animationend', (event) => {
  if (event.animationName === 'fadeOutDown') {
    contentBlock.style.display = 'none';
    contentBlock.classList.remove('fadeOutDown');
  }
});

// Écouteur pour la fin de l'animation fadeOut sur l'overlay
overlay.addEventListener('animationend', (event) => {
  if (event.animationName === 'fadeOut') {
    overlay.classList.remove('fade-out');
  }
});

// Écouteur pour la fin de l'animation slideOutLeft sur le personnage
character.addEventListener('animationend', (event) => {
  if (event.animationName === 'slideOutLeft') {
    character.style.display = 'none';
    character.classList.remove('slideOutLeft');
  }
});

// Fonction pour réinitialiser et afficher la boîte de dialogue
function showDialogBox(dialogueTextContent, title) {
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

  // Réafficher la boîte de dialogue avec l'animation fadeInUp
  contentBlock.style.display = 'block';
  
  // Supprimer les animations précédentes
  contentBlock.classList.remove('fadeOutDown', 'visible');
  
  // Ajouter les nouvelles classes d'animation
  contentBlock.classList.add('visible', 'fadeInUp');

  // Réafficher l'overlay noir
  overlay.classList.remove('fade-out');
  overlay.classList.add('visible');

  // Réafficher le personnage avec une animation de slideIn
  character.style.display = 'flex';
  character.classList.remove('slideOutLeft');
  character.classList.add('visible', 'slideInLeft');
}

// Gestion des choix de palette de couleurs
document.querySelectorAll('input[name="palette"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    const value = event.target.value;
    if (value === 'palette2') {
      // Dialogues de succès
      const successDialogues = [
        "BRAVO !\n\nLes tons doux et lumineux du Perugino soulignent la sérénité de la Vierge et la spiritualité des saints. Bravo pour avoir décodé cette première étape du processus créatif !",
        "Maintenant que tu as compris l’importance de la palette dans l'interprétation d’un tableau, passons à une nouvelle étape !",
        "Ici, tu vas recolorier un élément clé du tableau, d’après ce que j’aimerais exprimer. Chaque couleur a une signification particulière ! Maintiens une couleur appuyée pour avoir sa symbolique. Glisse la bonne couleur sur l’élément en noir et blanc pour recoloriser mon tableau !"
      ];

      let currentSuccessIndex = 0;

      // Fonction pour afficher le dialogue de succès suivant
      function showNextSuccessDialogue() {
        if (currentSuccessIndex < successDialogues.length) {
          const text = successDialogues[currentSuccessIndex];
          showDialogBox(text, "PERUGINO, Pietro di Cristoforo Vannucci");
          currentSuccessIndex++;

          if (currentSuccessIndex === successDialogues.length) {
            nextButton.classList.add('hidden');
            closeDialogBtn.classList.add('visible'); // Ajout du FadeIn
          } else {
            nextButton.classList.remove('hidden');
            closeDialogBtn.classList.remove('visible'); // Masquer "Fermer" si ce n'est pas le dernier dialogue
          }
        }
      }

      // Gérer le clic sur "Suivant" pour les dialogues de succès
      function handleSuccessNext() {
        showNextSuccessDialogue();
      }

      // Gérer le clic sur "Fermer" après les dialogues de succès
      function handleSuccessClose() {
        // 1) FadeOut de la palette
        const paletteOptions = document.querySelector('.color-palette-options');
        paletteOptions.classList.add('fadeOut');
        paletteOptions.addEventListener('animationend', () => {
          paletteOptions.remove();
        }, { once: true });

        // 2) FadeOut du h2 principal
        const mainGameH2 = document.querySelector('.main-game-content h2');
        mainGameH2.classList.add('fadeOut');
        mainGameH2.addEventListener('animationend', () => {
          mainGameH2.remove();
        }, { once: true });

        // 3) FadeOut du art-info
        const artInfo = document.querySelector('.art-info');
        artInfo.classList.add('fadeOut');
        artInfo.addEventListener('animationend', () => {
          artInfo.remove();
        }, { once: true });

        // 4) On enlève les eventListeners spéciaux
        nextButton.removeEventListener('click', handleSuccessNext);
        closeDialogBtn.removeEventListener('click', handleSuccessClose);

        // 5) On remet l’écouteur normal "showNextDialogue"
        nextButton.addEventListener('click', showNextDialogue);

        // 6) On masque « Fermer »
        closeDialogBtn.classList.remove('visible');

        // 7) Rediriger vers le 2ᵉ jeu après un délai
        setTimeout(() => {
          window.location.href = "renaissance.html";
        }, 1000);
      }

      // --- 1) Initialiser les boutons ---
      nextButton.classList.remove('hidden');
      closeDialogBtn.classList.remove('visible');

      // --- 2) On détache l’événement normal de "Suivant" ---
      nextButton.removeEventListener('click', showNextDialogue);

      // --- 3) On attache nos propres événements ---
      nextButton.addEventListener('click', handleSuccessNext);
      closeDialogBtn.addEventListener('click', handleSuccessClose);

      // --- 4) On lance l’affichage du premier dialogue de succès ---
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