const titreModal = document.querySelector(".titre-modal");
const textModal = document.querySelector(".modal p");
const buttonNext = document.getElementById("button-next-rules");
const buttonBegin = document.querySelector(".begin-cart-game"); 
buttonBegin.style.display = "none";

const textes = [
    {
        titre: "Salutations à vous !",
        texte: "Bienvenue dans CARTES & CARTELS ! Réveillez votre âme d’artiste et préparez-vous à en apprendre plus sur ces petits écriteaux qui accompagnent toutes nos meilleures œuvres."
    },
    {
        titre: "Comment jouer ?",
        texte: "Pour chaque question, 3 niveaux de difficulté sont proposés. Plus le niveau est élevé, plus vous remportez de points. En cas de mauvaise réponse, la main passe au joueur suivant."
    },
    {
        titre: "Dernier rappel !",
        texte: "A la fin de la partie, le joueur avec le plus de points est désigné vainqueur.<br/>Alors, êtes-vous prêts ?"
    }
];

let currentIndex = 0;

buttonNext.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= textes.length - 1) {

        buttonNext.style.display = "none";
        buttonBegin.style.display = "block";
    } else {
        titreModal.textContent = textes[currentIndex].titre;
        textModal.innerHTML = textes[currentIndex].texte; 
    }
});
