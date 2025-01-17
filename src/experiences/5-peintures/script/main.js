window.addEventListener("load", () => {
  // 1) Duplique les cartes -> 3 blocs => infini
  duplicateCardsForInfiniteScroll();

  // 2) On se positionne (optionnel) sur le 2e bloc
  centerOnSecondBlock();

  // 3) Ajuste l’échelle de la carte (emphase) au démarrage
  scaleCenterCard();

  // 4) Boutons “flèche”
  document.getElementById("prevButton").addEventListener("click", () => {
    scrollToSmooth(cardsContainer.scrollLeft - CARD_WIDTH);
  });
  document.getElementById("nextButton").addEventListener("click", () => {
    scrollToSmooth(cardsContainer.scrollLeft + CARD_WIDTH);
  });

  // 5) Flèches clavier
  document.addEventListener("keydown", handleKeyDown);

  // 6) Gérer l’infinite scroll après défilement
  let scrollEndTimeout;
  cardsContainer.addEventListener("scroll", () => {
    // Mettre à jour l’emphase en direct
    window.requestAnimationFrame(scaleCenterCard);

    // Debounce : on attend la fin du scroll
    if (scrollEndTimeout) clearTimeout(scrollEndTimeout);
    scrollEndTimeout = setTimeout(() => {
      infiniteScrollCheck();
    }, 150);
  });

  // 7) Bouton “Démarrer” -> redirection basée sur le card-title
  document.getElementById("startButton").addEventListener("click", () => {
    if (currentCenterCard) {
      const title = currentCenterCard.querySelector(".card-title")?.textContent;
      console.log("Carte sélectionnée :", title);

      if (title.includes("Renaissance")) {
        window.location.href = "start-renaissance.html";
      } else if (title.includes("Baroque")) {
        window.location.href = "start-baroque.html";
      } else {
        console.log("Aucune redirection définie pour ce titre.");
        // Optionnel : redirection par défaut ou affichage d'un message
        // window.location.href = "start-default.html";
      }
    } else {
      console.log("Aucune carte sélectionnée");
    }
  });
});

// Sélecteur
const cardsContainer = document.querySelector(".cards-container");
const CARD_WIDTH = 420;

// On stocke la carte la plus proche du centre dans une variable globale
let currentCenterCard = null;

/**
 * (1) Duplique 2 fois le bloc initial => 3 blocs au total.
 */
function duplicateCardsForInfiniteScroll() {
  const originalCards = [...cardsContainer.children];
  const nbCards = originalCards.length;
  
  for (let i = 0; i < nbCards * 2; i++) {
    const clone = originalCards[i % nbCards].cloneNode(true);
    cardsContainer.appendChild(clone);
  }
}

/**
 * (2) Centre le scroll sur le second bloc.
 */
function centerOnSecondBlock() {
  const totalWidth = cardsContainer.scrollWidth;
  const oneThird = totalWidth / 3;
  cardsContainer.scrollLeft = oneThird;
}

/**
 * (3) Infinite scroll -> repositionne seulement en cas d’excès.
 */
function infiniteScrollCheck() {
  const totalWidth = cardsContainer.scrollWidth;
  const oneThird = totalWidth / 3;
  const scrollLeft = cardsContainer.scrollLeft;

  // On laisse une marge pour éviter le recadrage trop vite
  const offset = 100;

  if (scrollLeft < oneThird - offset) {
    cardsContainer.scrollLeft += oneThird;
  } else if (scrollLeft > 2 * oneThird + offset) {
    cardsContainer.scrollLeft -= oneThird;
  }
}

/**
 * (4) Met en emphase la carte la plus proche du centre
 *     + stocke cette carte dans currentCenterCard.
 */
function scaleCenterCard() {
  const cards = document.querySelectorAll(".card");
  const containerRect = cardsContainer.getBoundingClientRect();
  const containerCenterX = containerRect.left + containerRect.width / 2;

  let minDistance = Infinity;
  let closestCard = null;

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(containerCenterX - cardCenterX);

    // Distance max pour l'effet
    const maxDistance = 200;

    if (distance < maxDistance) {
      // ratio [1 ... 1.1]
      const ratio = 1 + (1 - distance / maxDistance) * 0.1;
      // margin horizontale [0 ... 10px]
      const marginValue = 10 * (1 - distance / maxDistance);
      // Ombre [5 ... 25px]
      const baseShadow = 5;
      const maxShadow = 25;
      const shadowSize = baseShadow + (maxShadow - baseShadow) * (1 - distance / maxDistance);

      card.style.transform = `scale(${ratio})`;
      card.style.margin = `0 ${marginValue}px`;
      card.style.boxShadow = `0 0 ${shadowSize}px rgba(0,0,0,0.9)`;
    } else {
      card.style.transform = "scale(1)";
      card.style.margin = "0";
      card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.6)";
    }

    // Trouve la carte la + proche pour l'enregistrer
    if (distance < minDistance) {
      minDistance = distance;
      closestCard = card;
    }
  });

  // Stocke la carte la plus proche
  currentCenterCard = closestCard;
}

/**
 * (5) Gestion du clavier (flèches Gauche/Droite).
 */
function handleKeyDown(e) {
  if (e.key === "ArrowLeft") {
    scrollToSmooth(cardsContainer.scrollLeft - CARD_WIDTH);
  } else if (e.key === "ArrowRight") {
    scrollToSmooth(cardsContainer.scrollLeft + CARD_WIDTH);
  }
}

/**
 * (6) Scroll avec une animation custom ~800ms (easeInOutQuad).
 */
function scrollToSmooth(targetScrollLeft, duration = 800) {
  const start = cardsContainer.scrollLeft;
  const change = targetScrollLeft - start;
  let currentTime = 0;
  const increment = 20;

  function animateScroll() {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    cardsContainer.scrollLeft = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  }
  animateScroll();
}

/**
 * Easing “easeInOutQuad”
 */
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
