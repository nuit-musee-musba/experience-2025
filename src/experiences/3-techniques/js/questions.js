export const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        responseDetails: {
            text: "Paris est la capitale de la France, célèbre pour la Tour Eiffel et sa gastronomie.",
            media: "video/placeolder.mov"
        },
        media: "img/placeolder.png",
        cartel: [
            { id: "artistName", text: "Claude Monet" },
            { id: "artName", text: "Impression, soleil levant" },
            { id: "artDate", text: "1872" },
            { id: "useTechnique", text: "Peinture à l'huile" }
        ],
        hide: ["artDate"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "img/card/paris.jpg" },
                    { text: "", image: "img/card/london.jpg" },
                    { text: "", image: "img/card/berlin.jpg" },
                    { text: "", image: "img/card/madrid.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "Paris", image: "img/paris.jpg" },
                    { text: "Londres", image: "img/london.jpg" },
                    { text: "Rome", image: "img/rome.jpg" },
                    { text: "Athènes", image: "img/athens.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "Nantes", image: "img/nantes.jpg" },
                    { text: "Marseille", image: "img/marseille.jpg" },
                    { text: "Lille", image: "img/lille.jpg" },
                    { text: "Paris", image: "img/paris.jpg" }
                ],
                correct: "D"
            }
        }
    },
    {
        question: "Combien font 5 + 7 ?",
        responseDetails: {
            text: "5 + 7 font 12. Un simple calcul mental !",
            media: "video/placeolder.mov"
        },
        media: "img/placeolder.png",
        cartel: [
            { id: "artistName", text: "Jean pierre" },
            { id: "artName", text: "Impression, soleil levant" },
            { id: "artDate", text: "1872" },
            { id: "useTechnique", text: "Peinture à l'huile" }
        ],
        hide: ["artDate"],
        difficulties: {
            easy: {
                choices: [
                    { text: "10", image: "img/number10.jpg" },
                    { text: "12", image: "img/number12.jpg" },
                    { text: "15", image: "img/number15.jpg" },
                    { text: "13", image: "img/number13.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "11", image: "img/number11.jpg" },
                    { text: "12", image: "img/number12.jpg" },
                    { text: "14", image: "img/number14.jpg" },
                    { text: "13", image: "img/number13.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "12", image: "img/number12.jpg" },
                    { text: "13", image: "img/number13.jpg" },
                    { text: "14", image: "img/number14.jpg" },
                    { text: "15", image: "img/number15.jpg" }
                ],
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
        media: "video/placeolder.mov",
        cartel: [
            { id: "artistName", text: "Stephane" },
            { id: "artName", text: "Impression, soleil levant" },
            { id: "artDate", text: "1872" },
            { id: "useTechnique", text: "Peinture à l'huile" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "Rouge", image: "img/red.jpg" },
                    { text: "Bleu", image: "img/blue.jpg" },
                    { text: "Vert", image: "img/green.jpg" },
                    { text: "Jaune", image: "img/yellow.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "Bleu", image: "img/blue.jpg" },
                    { text: "Vert", image: "img/green.jpg" },
                    { text: "Gris", image: "img/gray.jpg" },
                    { text: "Noir", image: "img/black.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "Bleu ciel", image: "img/skyblue.jpg" },
                    { text: "Bleu marine", image: "img/navyblue.jpg" },
                    { text: "Turquoise", image: "img/turquoise.jpg" },
                    { text: "Cyan", image: "img/cyan.jpg" }
                ],
                correct: "A"
            }
        }
    }
];
