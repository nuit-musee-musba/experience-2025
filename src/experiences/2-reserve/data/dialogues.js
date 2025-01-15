// Dialogue id :
// i-s-d :
// i : iteration de la scène (0, première arrivée, 1, deuxième passage, 2, dernier passage)
// s : numéro de scène. 0 - bienvenue, 1 - reserve, 2 - exposition, 3 - fin du jeu.
// d : numéro de dialogue.
export default [
    {
        id : "0-0-0",
        emotion : 0,
        text : "Bonjour et bienvenue !\n" +
            "Je suis le nouveau conservateur du MUSBA, je dois organiser la prochaine exposition du musée avant que les visiteurs n’arrivent. Peux-tu m’aider ?\n",
    },
    {
        id: "0-0-1",
        emotion : 1,
        text : "Voici une salle à ta disposition, transforme-la comme tu le souhaites avec les tableaux qui t’enchantent. Mais d’abord suis-moi !",
    },
    {
        id: "0-1-0",
        emotion : 1,
        text : "Nous voici dans la réserve du musée, le lieu où sont stockées toutes les œuvres non exposées du musée. Il y en a plus de 8 000 !\n"
    },
    {
        id: 3,
        emotion : 1,
        text : "Bravo vous pouvez le placer",
    },
    {
        id: 4,
        emotion : 0,
        text : "C'est beau",
    },
]