export const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        responseDetails: {
            text: "Paris est la capitale de la France, célèbre pour la Tour Eiffel et sa gastronomie.",
            media: "/../src/img/paris.png"
        },
        media: "experience-2025/public/3-techniques/Sloumez.png",
        difficulties: {
            easy: {
                choices: ["Paris", "Londres", "Berlin", "Madrid"],
                correct: "A"
            },
            medium: {
                choices: ["Paris", "Londres", "Rome", "Athènes"],
                correct: "A"
            },
            hard: {
                choices: ["Nantes", "Marseille", "Lille", "Paris"],
                correct: "D"
            }
        }
    },
    {
        question: "Combien font 5 + 7 ?",
        responseDetails: {
            text: "5 + 7 font 12. Un simple calcul mental !",
            media: "/../src/img/calcul.png"
        },
        media: "/../src/img/julie.png",
        difficulties: {
            easy: {
                choices: ["10", "12", "15", "13"],
                correct: "B"
            },
            medium: {
                choices: ["11", "12", "14", "13"],
                correct: "B"
            },
            hard: {
                choices: ["12", "13", "14", "15"],
                correct: "A"
            }
        }
    },
    {
        question: "Quelle est la couleur du ciel ?",
        responseDetails: {
            text: "Le ciel apparaît bleu en raison de la diffusion de la lumière par l’atmosphère.",
            media: "/../src/img/sky.png"
        },
        media: "/../src/video/OaaaoaoaoaoaoaoaaaaaAAAAOOO.mp4",
        difficulties: {
            easy: {
                choices: ["Rouge", "Bleu", "Vert", "Jaune"],
                correct: "B"
            },
            medium: {
                choices: ["Bleu", "Vert", "Gris", "Noir"],
                correct: "A"
            },
            hard: {
                choices: ["Bleu ciel", "Bleu marine", "Turquoise", "Cyan"],
                correct: "A"
            }
        }
    },
    {
        question: "Qu'est-ce qu'un zoubie ?",
        responseDetails: {
            text: "Un zoubie est une invention farfelue ! La réponse n’a pas d’importance ici.",
            media: "/../src/img/fun.png"
        },
        media: "",
        difficulties: {
            easy: {
                choices: ["Facil", "prout", "Facil", "Facil"],
                correct: "B"
            },
            medium: {
                choices: ["prout", "medium", "medium", "medium"],
                correct: "A"
            },
            hard: {
                choices: ["hard", "prout", "hard", "hard"],
                correct: "B"
            }
        }
    }
];
