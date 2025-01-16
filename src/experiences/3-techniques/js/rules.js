const titreModal = document.querySelector(".titre-modal");
const textModal = document.querySelector(".modal p");
const buttonNext = document.getElementById("button-next-rules");
const buttonBegin = document.querySelector(".begin-cart-game"); 
buttonBegin.style.display = "none";

const textes = [
    {
        titre: "Salutations à vous !",
        texte: "Bienvenue dans le NomQuizz ! Réveillez votre âme d’artiste et préparez-vous à en apprendre plus sur les techniques, matériaux et outils qui créent toutes nos meilleures œuvres."
    },
    {
        titre: "Comment jouer ?",
        texte: "Pour chaque question, vous sélectionnez une difficulté. Plus la difficulté est élevée, plus vous remportez de points. Si vous échouez, la main passe à votre adversaire."
    },
    {
        titre: "Dernier rappel !",
        texte: "Après huit questions, le joueur avec le plus de points est désigné vainqueur.<br/>Alors, êtes-vous prêts ?"
    }
];

let currentIndex = 0;

buttonNext.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= textes.length) {

        buttonNext.style.display = "none";
        buttonBegin.style.display = "block";
    } else {
        titreModal.textContent = textes[currentIndex].titre;
        textModal.innerHTML = textes[currentIndex].texte; 
    }
});
