document.addEventListener('DOMContentLoaded', () => {
    // Ajout de la classe fade-in à l'élément body pour l'animation au chargement
    document.body.classList.add('fade-in');
    
    // Sélection du bouton Accueil
    const homeButton = document.getElementById('start-button');

    homeButton.addEventListener('click', (e) => {
      e.preventDefault(); // Empêche la navigation immédiate

      // Ajout de la classe fade-out pour démarrer l'animation
      document.body.classList.add('fade-out');

      // Attendre la fin de l'animation avant de naviguer
      document.body.addEventListener('animationend', () => {
        window.location.href = 'start-renaissance.html';
      }, { once: true }); // L'écouteur est supprimé après la première exécution
    });
  });