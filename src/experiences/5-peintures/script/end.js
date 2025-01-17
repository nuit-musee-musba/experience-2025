// script/end.js

document.addEventListener("DOMContentLoaded", function() {
    // Appliquer le fade-in après le chargement complet du DOM
    document.body.classList.add("fade-in");
    
    // Sélectionner le bouton "Accueil"
    const homeButton = document.getElementById("home-button");
    
    homeButton.addEventListener("click", function() {
      // Appliquer le fade-out
      document.body.classList.add("fade-out");
      
      // Attendre 2 secondes (2000 ms) avant de rediriger
      setTimeout(function() {
        window.location.href = "index.html";
      }, 2000);
    });
  });
  