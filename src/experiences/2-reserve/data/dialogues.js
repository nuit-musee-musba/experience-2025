// Dialogue id :
// i-s-d :
// i : iteration de la scène (0, première arrivée, 1, deuxième passage, 2, dernier passage)
// s : numéro de scène. 0 - bienvenue, 1 - reserve, 2 - exposition, 3 - fin du jeu.
// d : numéro de dialogue.
export default [
    {
        id : "0-0-0",
        emotion : 0,
        text : "Ah, bonjour !\n" +
            "Mes tableaux m'avaient prédit ta venue... Je me nomme Tristan, le Gardien des Trésors du MUSBA. J'ai besoin de ton imagination pour créer une exposition extraordinaire avant l’arrivée pressante des visiteurs.\n",
    },
    {
        id: "0-0-1",
        emotion : 0,
        text : "Cette salle t'attendais pour que tu la remplisses de magie, mais avant toute chose, laisse-moi te guider vers un lieu secret.",
    },
    {
        id: "0-1-0",
        emotion : 0,
        text : "Bienvenue dans l’un de mes royaumes cachés : la réserve des peintures. C'est ici, dans ces vastes salles secrètes et protégées des regards, que nous conservons précieusement plus de 8 000 œuvres. En tant que régisseur, je suis le gardien de ces trésors mais je le partage aujourd'hui avec toi !\n"
    },
    {
        id: "0-1-1",
        emotion : 0,
        text : "Parmi toutes ces œuvres endormies tu peux prendre ton temps pour parler avec elles. Mais attention : il t’en faut choisir trois qui chanteront en harmonie. Si tu clique sur un tableau, tu pourras peut-être l'entendre te souffler ses secrets...",
    },
    {
        id : "0-2-0",
        emotion : 0,
        text: "Place ton tableau sur un des murs de la salle."
    },
    {
        id : "0-2-1",
        emotion : 0,
        text: "Observe comme l'espace d'exposition réagit à ta sélection ! En tant que conservateur, ton rôle est aussi de créer un dialogue entre l'œuvre et son environnement. La scénographie de la salle s'adapte à cette magie."
    },
    {
        id : "1-2-1",
        emotion : 0,
        text: "Par ma veste en velours étoilé ! On dirait que tu deviens un vrai magicien du musée ! Tu as le don pour faire parler les tableaux entre eux et raconter de belles histoires aux visiteurs."
    },
    {
        id : "2-2-1",
        emotion : 0,
        text: "La transformation est complète ! Tu as su donner un nouveau souffle à ces œuvres, les sortir de leur sommeil dans la réserve pour leur offrir la lumière qu'elles méritent."
    },
    {
        id : "2-2-2",
        emotion : 0,
        text: "Félicitations, tu es un vrai magicien des musées ! C'est comme si tu avais créé ton propre film avec des peintures !",
    },
    {
        id : "3-0-0",
        emotion : 0,
        text: "Souhaites-tu poursuivre ta formation de conservateur et créer une nouvelle exposition ? De nombreux tableaux attendent de dévoiler leur histoire"
    },
]