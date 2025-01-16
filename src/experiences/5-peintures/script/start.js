// ---------------------- Gestion du dialogue -------------------------
const dialogues = [
  "On invente des techniques comme la perspective pour donner de la profondeur aux tableaux, ou de la peinture à l’huile pour des couleurs plus vives. Ce sont des portraits, des scènes religieuses ou mythologiques, avec des corps beaux et parfaits.",
  "Deuxième message du dialogue...",
  // 3ᵉ phrase => Perugin
  "Je suis Perugin le peintre de ce tableau !\nObserve le bien, il montre une scène religieuse avec des couleurs vives.\n\nParmi un choix de trois palettes de couleurs différentes devine laquelle a été utilisée dans mon tableau !"
];

let currentDialogue = 0;
let isTyping = false;

// Sélecteurs
const dialogueText = document.getElementById('dialogueText');
const nextButton = document.getElementById('nextDialogue');
const closeDialogBtn = document.getElementById('closeDialog');
const arrowIcon = nextButton.querySelector('.arrow-icon');
const btnText = document.getElementById('btnText');

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

// Gérer le clic "Suivant"
function showNextDialogue() {
  if (isTyping) {
    dialogueText.innerHTML = `<p class="dialogue-text">${dialogues[currentDialogue]}</p>`;
    isTyping = false;
    return;
  }

  currentDialogue++;

  // === AJOUTE CE TEST pour afficher directement "Fermer" au dernier dialogue ===
  if (currentDialogue === dialogues.length - 1) {
    // On masque le bouton "Suivant" entièrement
    nextButton.classList.add('hidden');
    // On affiche le bouton "Fermer"
    closeDialogBtn.classList.remove('hidden');
  }

  // On affiche normalement le dialogue suivant
  dialogueText.innerHTML = '';
  const p = document.createElement('p');
  p.classList.add('dialogue-text');
  dialogueText.appendChild(p);
  typeWriter(dialogues[currentDialogue], p);
}



// Initialiser au chargement
window.addEventListener('load', () => {
  const p = document.createElement('p');
  p.classList.add('dialogue-text');
  dialogueText.appendChild(p);
  typeWriter(dialogues[0], p);
});

// Clic sur "Suivant"
nextButton.addEventListener('click', showNextDialogue);

// Clic sur "Fermer" => on cache la dialogbox, le perso et l’overlay
closeDialogBtn.addEventListener('click', () => {
  const contentBlock = document.querySelector('.content-block');
  const character = document.querySelector('.character');
  const overlay = document.getElementById('overlay');

  // Option 1 : disparition immédiate
  // contentBlock.style.display = 'none';
  // character.style.display = 'none';
  // overlay.classList.remove('visible');
  // overlay.style.display = 'none';

  // Option 2 : fadeOut
  contentBlock.style.animation = "fadeOutDown 0.8s ease-out forwards";

  // Personnage : slideOutLeft
  character.style.animation = "slideOutLeft 0.8s ease-out forwards";

  // Overlay : simple fadeOut
  overlay.style.animation = "fadeOut 0.8s ease-out forwards";
  fadeOutArtworksAndShowMainScreen();
  // Après 0.8s, on masque complètement ces éléments
  setTimeout(() => {
    contentBlock.style.display = 'none';
    character.style.display = 'none';
    overlay.style.display = 'none';
  }, 800);
});

// ------------------- Transition vers écran principal ----------------

const artworkElems = document.querySelectorAll('.artwork');
const overlay = document.getElementById('overlay');
const mainGameScreen = document.getElementById('mainGameScreen');

function fadeOutArtworksAndShowMainScreen() {
  // FadeOut artworks
  artworkElems.forEach((art, index) => {
    art.style.animation = "fadeOut 1s forwards";
    art.style.animationDelay = (index * 0.2) + "s";
  });

  // Après 1.5s, on affiche l’overlay et l’écran principal
  setTimeout(() => {
    overlay.classList.add('visible');
    mainGameScreen.classList.add('visible');
  }, 1500);

  // On peut masquer les artworks du DOM après 2s
  setTimeout(() => {
    const artworkContainer = document.querySelector('.artwork-container');
    artworkContainer.style.display = 'none';
  }, 2000);
}

// Fonction pour réinitialiser et afficher la boîte de dialogue
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

// Réafficher le personnage si nécessaire (et réinitialiser son animation)
if (character.style.display === 'none' || character.style.opacity === '0') {
  // Remettre hors-champ pour redémarrer l'anim 'slideInLeft'
  character.style.display = 'flex';
  character.style.animation = 'none';                  // Retire l’anim précédente
  character.style.transform = 'translateX(-100%)';     // Position de départ à gauche
  void character.offsetWidth;                          // Force un "reflow" (technique CSS)
  character.style.animation = 'slideInLeft 1s forwards'; 
  character.style.opacity = '1';
}

// Réafficher l'overlay
overlay.style.display = 'block';
overlay.style.animation = 'fadeIn 0.8s ease-out forwards';
}

// Exemple d'utilisation sur les radios
document.querySelectorAll('input[name="palette"]').forEach((radio) => {
radio.addEventListener('change', (event) => {
  const value = event.target.value;
  if (value === 'palette2') {
    // --- 1) Tableau des 3 dialogues ---
    const successDialogues = [
      // 1ère page
      "BRAVO !\n\nLes tons doux et lumineux du Pérugin soulignent la sérénité de la Vierge et la spiritualité des saints. Bravo pour avoir décodé cette première étape du processus créatif !",
      
      // 2ème page
      "Maintenant que tu as compris l’importance de la palette dans l'interprétation d’un tableau, passons à une nouvelle étape !",
      
      // 3ème page
      "Ici, tu vas recolorier un élément clé du tableau, d’après ce que j’aimerais exprimer. Chaque couleur a une signification particulière ! Maintiens une couleur appuyée pour avoir sa symbolique. Glisse la bonne couleur sur l’élément en noir et blanc pour recoloriser mon tableau !"
    ];
    
    // Index pour suivre quelle page de successDialogues on affiche
    let currentSuccessIndex = 0;
  
    /**
     * Affiche la page suivante (ou la page courante) dans la boîte de dialogue.
     * - Si on arrive à la 3ᵉ page, on cache « Suivant » et montre « Fermer ».
     * - Sinon, on cache « Fermer » et montre « Suivant ».
     */
    function showNextSuccessDialogue() {
      // Tant qu’il reste des pages à afficher…
      if (currentSuccessIndex < successDialogues.length) {
        // On affiche le texte
        const text = successDialogues[currentSuccessIndex];
        showDialogBox(text, "PERUGIN, Pietro di Cristoforo Vannucci");
        currentSuccessIndex++;
  
        // Si c’est la dernière page (3ᵉ) qu’on vient d’afficher :
        if (currentSuccessIndex === successDialogues.length) {
          // On masque « Suivant » et on affiche « Fermer »
          nextButton.classList.add('hidden');
          closeDialogBtn.classList.remove('hidden');
        } else {
          // Sinon on affiche « Suivant », on masque « Fermer »
          nextButton.classList.remove('hidden');
          closeDialogBtn.classList.add('hidden');
        }
      }
    }
  
    /**
     * Gère le clic sur « Suivant » (uniquement pour ces dialogues "success")
     */
    function handleSuccessNext() {
      showNextSuccessDialogue();
    }
  
    /**
     * Gère le clic sur « Fermer » (quand on est à la dernière page).
     *  - On supprime la palette, on recentre art-info,
     *  - On remet le comportement normal du bouton « Suivant ».
     */
    function handleSuccessClose() {
      // 1) FadeOut de la palette
      const paletteOptions = document.querySelector('.color-palette-options');
      paletteOptions.style.animation = "fadeOut 0.8s forwards";
      setTimeout(() => {
        paletteOptions.remove();
      }, 800);
    
      // 2) FadeOut du h2 principal
      const mainGameH2 = document.querySelector('.main-game-content h2');
      mainGameH2.style.animation = "fadeOut 0.8s forwards";
      setTimeout(() => {
        mainGameH2.remove();
      }, 800);
    
      // 3) FadeOut du art-info
      const artInfo = document.querySelector('.art-info');
      artInfo.style.animation = "fadeOut 0.8s forwards";
      setTimeout(() => {
        artInfo.remove();
      }, 800);
    
      // 4) On enlève nos eventListeners "spéciaux"
      nextButton.removeEventListener('click', handleSuccessNext);
      closeDialogBtn.removeEventListener('click', handleSuccessClose);
    
      // 5) On remet l’écouteur normal "showNextDialogue"
      nextButton.addEventListener('click', showNextDialogue);
    
      // 6) On masque « Fermer »
      closeDialogBtn.classList.add('hidden');
    
      // 7) (Facultatif) Rediriger vers le 2ᵉ jeu après un petit délai
      //    si tu veux automatiquement basculer sur une autre page HTML
      setTimeout(() => {
        window.location.href = "second-game.html";
      }, 1000);
    }
    
  
    // --- 2) On force « Suivant » visible et on masque « Fermer » au début ---
    nextButton.classList.remove('hidden');
    closeDialogBtn.classList.add('hidden');
  
    // --- 3) On détache l’événement normal de « Suivant » ---
    nextButton.removeEventListener('click', showNextDialogue);
  
    // --- 4) On attache nos propres événements ---
    nextButton.addEventListener('click', handleSuccessNext);
    closeDialogBtn.addEventListener('click', handleSuccessClose);
  
    // --- 5) On lance l’affichage de la première page de ce mini-dialogue ---
    showNextSuccessDialogue();
  } else if (value === 'palette1') {
    showDialogBox(
      "FAUX !\n\nCe n’est pas la bonne palette, elle est plus foncée, mais réessaye encore !", 
      "PERUGIN, Pietro di Cristoforo Vannucci"
    );
  } else if (value === 'palette3') {
    showDialogBox(
      "FAUX !\n\nCe n’est pas la bonne palette, mais réessaye encore !", 
      "PERUGIN, Pietro di Cristoforo Vannucci"
    );
  }
});
});