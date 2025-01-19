// script.js

// Variables globales
let draggedImage = null;
let clonedImage = null;
let initialTouchPosition = { x: 0, y: 0 };
let currentDialogueIndex = 0;
let currentSequence = [];
let typewriterInterval; // Variable pour stocker l'intervalle de l'effet typewriter
let isTyping = false; // Indicateur si le texte est en cours de frappe

const winningSequence = ["ARGILE", "ARGILE", "CIRE", "PLATRE", "TUYAU", "BRONZE", "MARTEAU"];

// Dialogues
const dialogues = [
    {
        id: 1,
        text: "Bienvenue, Apprenti ! Je suis Jean-Louis Ernest Meissonier, peintre et sculpteur. Aujourd'hui, je vais t'enseigner les bases de l'art de la sculpture de bronze. Crois-moi, c'est un savoir-faire bien plus complexe qu'il n'y paraît ! Il est tout à fait normal que tu ne saches pas tout faire. Je vais t’épauler pour chaque étape. Sois bien attentif !",
        action: "SUIVANT"
    },
    {
        id: 2,
        text: "Bon, pour commencer il va falloir que tu sculptes un modèle en argile. C’est la première étape qui va nous permettre ensuite de faire un moule. Prends le morceau d’argile que je t’ai laissé sur la table et place le sur ton plan de travail.",
        action: "POSER ARGILE"
    },
    {
        id: 3,
        text: "Parfait ! Maintenant il faut que tu sculptes ce morceau pour créer le modèle. Ajoute encore un peu d'argile !",
        action: "POSER ARGILE"
    },
    {
        id: 4,
        text: "Génial ! Tu as réussi la première étape ! La prochaine étape est de créer un moule creux à base de ton modèle. C’est un peu compliqué alors je vais le faire pour toi, ne t’inquiètes pas.",
        action: "SUIVANT"
    },
    {
        id: 5,
        text: "Voilà le moule creux du modèle, maintenant il faut verser la cire dedans. Prends le pot de cire que je t’ai laissé et verse-le.",
        action: "POSER CIRE"
    },
    {
        id: 6,
        text: "Cette nouvelle sculpture faite de cire est désormais notre modèle. Elle va être essentielle pour la conception de notre vrai moule où sera versé par la suite le bronze en fusion.",
        action: "SUIVANT"
    },
    {
        id: 7,
        text: "Maintenant que notre fine couche de cire a séché, il faut que tu remplisses l’intérieur de plâtre. Cela va permettre de créer un noyau dur à l’intérieur qui servira pour notre moule final.",
        action: "POSER PLATRE"
    },
    {
        id: 8,
        text: "Voilà, le plâtre a séché, je m’occupe de démouler notre modèle de cire. Pour cette étape, nous allons poser des tuyaux de cire sur notre modèle.",
        action: "SUIVANT"
    },
    {
        id: 9,
        text: "C’est un peu compliqué mais ces tuyaux vont permettre l’évacuation de l’air ainsi que l’écoulement de la cire lorsque nous la ferons fondre plus tard. La fonte de la cire va créer un interstice. C’est un petit écart entre l’intérieur du moule de cire, et le moule final que nous allons créer prochainement, celui où sera versé le bronze.",
        action: "SUIVANT"
    },
    {
        id: 10,
        text: "Nous allons également planter des clous dans notre modèle. Cela permettra de faire tenir le tout et de maintenir l’écart entre le moule et le noyau de plâtre. Je te laisse fixer les tuyaux de cire et les clous à différents endroits sur notre modèle. Assure-toi que ces clous pénètrent également le noyau de plâtre.",
        action: "POSER TUYAU"
    },
    {
        id: 11,
        text: "A présent, je vais utiliser de la potée réfractaire pour créer le moule final. C’est dans ce moule que sera coulé le bronze en fusion. J’applique donc de la potée de façon à recouvrir l’ensemble de notre modèle de cire.",
        action: "SUIVANT"
    },
    {
        id: 12,
        text: "Voilà, désormais notre cire est compressée entre notre noyaux de plâtre et le moule de potée. Faire fondre cette cire va permettre de la vider et créer écart entre le moule de potée et le plâtre. Ne t’inquiète pas, les clous vont permettre de maintenir le noyau du moule en place.",
        action: "SUIVANT"
    },
    {
        id: 13,
        text: "Bravo ! En ayant mis le moule au four, tu as fait totalement fondre la cire ! Cela a permis de libérer l’espace nécessaire au coulage du bronze.",
        action: "SUIVANT"
    },
    {
        id: 14,
        text: "Nous arrivons presque à la fin, je vais te confier la responsabilité de faire couler le bronze en fusion dans le moule. Mais avant, nous devons mettre le moule dans un bac de sable par sécurité.",
        action: "SUIVANT"
    },
    {
        id: 15,
        text: "Parfait, es-tu prêt ? Prends maintenant le bronze en fusion et verse-le délicatement dans le moule.",
        action: "POSER BRONZE"
    },
    {
        id: 16,
        text: "Tu fais un travail remarquable, bravo ! Attendons que le bronze refroidisse et se solidifie.",
        action: "SUIVANT"
    },
    {
        id: 17,
        text: "Voilà, ça devrait être prêt. Je vais te laisser le privilège de casser le moule de potée ainsi que le noyau intérieur en plâtre pour enfin révéler notre sculpture de bronze. Prends le maillet que je t’ai mis à disposition et casse-le !",
        action: "POSER MARTEAU"
    },
    {
        id: 18,
        text: "Splendide ! Nous formons une bonne équipe. Bon, comme tu peux le remarquer ce n’est pas totalement terminé, il reste quelques petites retouches à faire comme retirer les clous et les tuyaux qui servaient autrefois à l’évacuation de la cire et de l’air.",
        action: "SUIVANT"
    },
    {
        id: 19,
        text: "Mais après ces petites retouches, il ne reste plus qu’à ajouter de la patine à la sculpture pour lui donner son aspect unique et ses propriétés protectrices contre la corrosion. C’est une étape un peu compliquée mais ne t’inquiète pas, je m’en charge.",
        action: "SUIVANT"
    },
    {
        id: 20,
        text: "Grâce à ton aide précieuse, notre œuvre est enfin terminée ! Elle prend vie sous nos yeux. Appelons-la Le Voyageur. Regarde avec fierté le fruit de notre travail. Ta patience et ton talent m'ont bien impressionné. J’ai de la chance de t’avoir eu comme apprenti sur ce projet.",
        action: "SUIVANT"
    },
    {
        id: 21,
        text: "Le Voyageur t'attend un peu plus loin dans le musée. Cherche-le et admire-le à nouveau. Et surtout, continue d’observer, imaginer et créer. Bon voyage, mon apprenti !",
        action: "SUIVANT"
    }
];

// Images de dialogue associées aux étapes
const dialogueImages = {
    3: "/4-sculpture/Images/Item_Argile.webp",
    4: "/4-sculpture/Images/Sculpture_Etape_1.webp",
    5: "/4-sculpture/Images/Sculpture_Etape_2.webp",
    6: "/4-sculpture/Images/Sculpture_Etape_3.webp",
    7: "/4-sculpture/Images/Sculpture_Etape_3.webp",
    8: "/4-sculpture/Images/Sculpture_Etape_4.webp",
    9: "/4-sculpture/Images/Sculpture_Etape_5.webp",
    10: "/4-sculpture/Images/Sculpture_Etape_5.webp",
    11: "/4-sculpture/Images/Sculpture_Etape_6.webp",
    12: "/4-sculpture/Images/Sculpture_Etape_7.webp",
    13: "/4-sculpture/Images/Sculpture_Etape_8.webp",
    14: "/4-sculpture/Images/Sculpture_Etape_9.webp",
    15: "/4-sculpture/Images/Sculpture_Etape_9.webp",
    16: "/4-sculpture/Images/Sculpture_Etape_10.webp",
    17: "/4-sculpture/Images/Sculpture_Etape_11.webp",
    18: "/4-sculpture/Images/Sculpture_Etape_12.webp",
    19: "/4-sculpture/Images/Sculpture_Etape_13.webp",
    20: "/4-sculpture/Images/Sculpture_Etape_13.webp",
    21: "/4-sculpture/Images/Sculpture_Etape_13.webp",
};

// Fonction pour l'effet Typewriter
function typeWriter(element, text, speed, callback) {
    element.textContent = ''; // Efface le contenu actuel
    let i = 0;
    isTyping = true;
    typewriterInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typewriterInterval); // Arrête l'intervalle une fois le texte complet
            isTyping = false;
            if (callback) callback();
        }
    }, speed);
}

// Fonction pour mettre à jour le dialogue affiché
function updateDialogue() {
    const dialogueElement = document.getElementById("dialogue-text");
    const nextDialogueElement = document.getElementById("next-dialogue");
    const dialogue = dialogues[currentDialogueIndex];

    // Utilisation de l'effet Typewriter avec une vitesse de 20ms par caractère
    typeWriter(dialogueElement, dialogue.text, 20, () => {
        // Après la fin de l'effet Typewriter, afficher ou masquer le bouton "Suivant"
        if (dialogue.action === "SUIVANT") {
            nextDialogueElement.style.display = "block";
        } else {
            nextDialogueElement.style.display = "none";
        }
    });

    // Masquer le bouton "Suivant" pendant l'effet Typewriter
    nextDialogueElement.style.display = "none";

    const imagePath = dialogueImages[dialogue.id] || null;
    updateWorkAreaImage(imagePath);

    updateProgressBar();
}

// Fonction pour mettre à jour la barre de progression
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressPercentage = ((currentDialogueIndex + 1) / dialogues.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Fonction pour mettre à jour l'image dans la zone de travail
function updateWorkAreaImage(imagePath) {
    const workArea = document.getElementById("work-area");

    // Supprimer l'image existante
    const existingImage = workArea.querySelector("img");
    if (existingImage) {
        existingImage.remove();
    }

    // Ajouter la nouvelle image si un chemin est fourni
    if (imagePath) {
        const img = document.createElement("img");
        img.src = imagePath;
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";
        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        workArea.appendChild(img);
    }
}

// Gestionnaire pour le bouton "Suivant"
document.getElementById("next-dialogue").addEventListener("click", () => {
    if (isTyping) {
        // Si le texte est en cours de frappe, terminer immédiatement l'effet Typewriter
        clearInterval(typewriterInterval);
        const dialogueElement = document.getElementById("dialogue-text");
        const dialogue = dialogues[currentDialogueIndex];
        dialogueElement.textContent = dialogue.text;
        isTyping = false;

        // Afficher ou masquer le bouton "Suivant" en fonction de l'action
        const nextDialogueElement = document.getElementById("next-dialogue");
        if (dialogue.action === "SUIVANT") {
            nextDialogueElement.style.display = "block";
        } else {
            nextDialogueElement.style.display = "none";
        }
    } else {
        // Passer au dialogue suivant
        const currentAction = dialogues[currentDialogueIndex].action;

        if (currentAction === "SUIVANT") {
            currentDialogueIndex++;
            if (currentDialogueIndex < dialogues.length) {
                updateDialogue();
            } else {
                // Optionnel : gérer la fin des dialogues
                console.log("Tous les dialogues ont été affichés.");
            }
        }
    }
});

// Fonction touchEnd
function touchEnd(event) {
    if (clonedImage) {
        const touchX = event.changedTouches[0].clientX;
        const touchY = event.changedTouches[0].clientY;

        let dropZone = document.elementFromPoint(touchX, touchY);

        // Trouver l'élément avec l'ID "work-area" ou son parent
        while (dropZone && dropZone.id !== "work-area" && dropZone.parentElement) {
            dropZone = dropZone.parentElement;
        }

        if (dropZone && dropZone.id === "work-area") {
            const itemName = draggedImage.alt.toUpperCase();
            const currentAction = dialogues[currentDialogueIndex].action;

            if (currentAction === `POSER ${itemName}`) {
                currentSequence.push(itemName);
                currentDialogueIndex++;
                updateDialogue();
            }
        }

        clonedImage.remove();
        clonedImage = null;
    }

    draggedImage = null;
}

// Fonction touchStart
function touchStart(event) {
    const touch = event.touches[0];
    draggedImage = event.target;

    if (draggedImage.tagName === "IMG") {
        clonedImage = draggedImage.cloneNode(true);
        clonedImage.style.position = "absolute";
        clonedImage.style.zIndex = 1000;
        clonedImage.style.pointerEvents = "none";

        const { width, height } = draggedImage.getBoundingClientRect();
        clonedImage.style.width = `${width}px`;
        clonedImage.style.height = `${height}px`;
        clonedImage.style.objectFit = "contain";
        document.body.appendChild(clonedImage);

        initialTouchPosition = { x: touch.clientX, y: touch.clientY };
        clonedImage.style.left = `${initialTouchPosition.x - width / 2}px`;
        clonedImage.style.top = `${initialTouchPosition.y - height / 2}px`;
    }
}

// Fonction touchMove
function touchMove(event) {
    if (clonedImage) {
        const touch = event.touches[0];
        const deltaX = touch.clientX - initialTouchPosition.x;
        const deltaY = touch.clientY - initialTouchPosition.y;

        const { width, height } = draggedImage.getBoundingClientRect();
        clonedImage.style.left = `${initialTouchPosition.x + deltaX - width / 2}px`;
        clonedImage.style.top = `${initialTouchPosition.y + deltaY - height / 2}px`;
    }
}

// Gestionnaire pour le bouton de menu
document.getElementById("menu-button").addEventListener("click", () => {
    window.location.href = "./1-hub/index.html"; // Remplacez par le chemin correct si nécessaire
});

// Fonction pour initialiser les écouteurs d'événements
function initializeEventListeners() {
    const inventoryImages = document.querySelectorAll('.draggable-item');

    inventoryImages.forEach(img => {
        img.addEventListener('touchstart', touchStart);
        img.addEventListener('touchmove', touchMove);
        img.addEventListener('touchend', touchEnd);
    });

    // Permettre de cliquer sur le dialogue pour accélérer l'affichage
    const dialogueElement = document.getElementById("dialogue-text");
    dialogueElement.addEventListener('click', () => {
        if (isTyping) {
            clearInterval(typewriterInterval);
            dialogueElement.textContent = dialogues[currentDialogueIndex].text;
            isTyping = false;

            // Afficher ou masquer le bouton "Suivant" en fonction de l'action
            const nextDialogueElement = document.getElementById("next-dialogue");
            const dialogue = dialogues[currentDialogueIndex];
            if (dialogue.action === "SUIVANT") {
                nextDialogueElement.style.display = "block";
            } else {
                nextDialogueElement.style.display = "none";
            }
        }
    });
}

// Initialiser le dialogue au chargement
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    updateDialogue();
});
