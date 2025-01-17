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
  let selectedColor = null; // couleur sélectionnée par l’utilisateur
  
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
    persistentText.textContent  = roundData.persistentText;
  
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
  
  // ======================== Clic sur "Valider" ========================
  validateBtn.addEventListener('click', () => {
    if(!selectedColor) {
      // Aucune couleur sélectionnée
      showDialogBox("Choisis d’abord une couleur en cliquant sur une carte !", "Erreur");
      return;
    }
  
    // Vérifier si la couleur est la bonne pour ce round
    const roundData = rounds[currentRoundIndex];
    if(selectedColor === roundData.correctColor) {
      // Bonne réponse
      currentRoundIndex++;
      if(currentRoundIndex < rounds.length) {
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
  });
  
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
  
    // Réafficher le personnage s'il était masqué
    if (!character.classList.contains('visible')) {
      character.classList.remove('hidden', 'slideOutLeft');
      character.classList.add('visible', 'slideInLeft');
    }
  }
  
  // Quand on clique sur "Fermer" dans la boîte de dialogue
  closeDialogBtn.addEventListener('click', () => {
    // Masquer la boîte de dialogue
    contentBlock.classList.remove('visible');
    // Masquer l'overlay
    overlay.classList.remove('visible');
    
    // Animer le personnage pour le faire disparaître
    if (character.classList.contains('visible')) {
      character.classList.remove('slideInLeft');
      character.classList.add('slideOutLeft');
  
      // Après l'animation, masquer le personnage
      setTimeout(() => {
        character.classList.remove('visible', 'slideOutLeft');
        character.classList.add('hidden');
      }, 800); // Durée de l'animation de sortie (doit correspondre à l'animation CSS)
    }
  });
  
  // ======================== EFFET "Machine à écrire" ========================
  let isTyping = false;
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
  
  // ======================== FONCTION : Gérer l'État de Succès ========================
  function triggerSuccessState() {
    // 1. Remplacer l'image par pfinalerenaissance.png avec un fondu
    fadeToNewImage(artworkImage, "images/pfinalerenaissance.png");
  
    // 2. Déplacer le persistent-dialog avec une animation fluide
    const persistentDialog = document.querySelector('.persistent-dialog');
    persistentDialog.classList.add('success');
  
    // 3. Déplacer et redimensionner le character avec une animation fluide
    perso2Image.classList.add('success');
  
    // 4. Changer le texte du bouton "Choisir" en "Suivant"
    validateBtn.textContent = "Suivant";
    validateBtn.querySelector('#btnText')?.remove(); // Supprimer le span si présent
    const arrowIcon = validateBtn.querySelector('.arrow-icon');
    if (arrowIcon) {
      arrowIcon.remove(); // Supprimer la flèche si présente
    }
  
    // 5. Modifier l'apparence du bouton pour correspondre aux styles de succès
    document.body.classList.add('success-state');
  
    // 6. Ajouter un nouvel écouteur pour rediriger vers end-game.html
    validateBtn.removeEventListener('click', validateColorHandler); // Supprimer l'ancien écouteur
    validateBtn.addEventListener('click', () => {
      window.location.href = "end-game.html";
    });
  }
  
  // ======================== GESTION DES ÉVÉNEMENTS ========================
  // Séparer le handler pour pouvoir le supprimer plus tard
  function validateColorHandler() {
    if(!selectedColor) {
      // Aucune couleur sélectionnée
      showDialogBox("Choisis d’abord une couleur en cliquant sur une carte !", "Erreur");
      return;
    }
  
    // Vérifier si la couleur est la bonne pour ce round
    const roundData = rounds[currentRoundIndex];
    if(selectedColor === roundData.correctColor) {
      // Bonne réponse
      currentRoundIndex++;
      if(currentRoundIndex < rounds.length) {
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
  
  // Remplacer l'écouteur initial par le handler séparé
  validateBtn.removeEventListener('click', validateBtn.onclick);
  validateBtn.addEventListener('click', validateColorHandler);
