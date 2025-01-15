export const questions = [

    /*

    {

    
        //Q1
        question: "Pour toi, quel outil est utilisé pour réaliser cette œuvre ?", //souligner outils
        responseDetails: {
            text: "L'appareil photo permet de capturer des images avec précision et de jouer avec la lumière et les angles pour produire une œuvre visuelle unique.",
            media: "img/card/photo.jpg"
        },
        media: "img/art/electrikGarden.jpg",
        cartel: [
            { id: "artistName", text: "Candillon Ruddy" },
            { id: "artName", text: "Electrik garden" },
            { id: "artDate", text: "1994" },
            { id: "useTechnique", text: "Photographie collée sur aluminium" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "img/card/massette.jpg" },
                    { text: "", image: "img/card/photo.jpg" },
                    { text: "", image: "img/card/ebauchoir.jpg" }, //canne à souffler 
                    { text: "", image: "img/card/mirette.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "img/card/massette.jpg" },
                    { text: "", image: "img/card/photo.jpg" },
                    { text: "", image: "img/card/peintureHuile.jpg" },
                    { text: "", image: "img/card/fusain.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "img/card/peintureHuile.jpg" }, //aquerelle
                    { text: "", image: "img/card/photo.jpg" },
                    { text: "", image: "img/card/peintureHuile.jpg" }, 
                    { text: "", image: "img/card/peintureHuile.jpg" } //gouache
                ],
                correct: "B"
            }
        }
    },

    */









    {
        //Q2
        question: "À toi ! De quel matériau est composée cette œuvre ?", //souligner matériau
        responseDetails: {
            text: "Cette œuvre est composée de grès, un matériau robuste et polyvalent souvent utilisé pour sa durabilité et sa texture idéale pour la sculpture ou la céramique.",
            media: "img/card/gres.jpg"
        },
        media: "img/art/coupeGres.jpg",
        cartel: [
            { id: "artistName", text: "Buthaud René" },
            { id: "artName", text: "Petite coupe grès avec profil" },
            { id: "artDate", text: "1950-1951" },
            { id: "useTechnique", text: "Grès" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique", "artName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "img/card/verre.jpg" },
                    { text: "", image: "img/card/bronze.jpg" },
                    { text: "", image: "img/card/gres.jpg" },
                    { text: "", image: "img/card/laine.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "img/card/porcelaine.jpg" },
                    { text: "", image: "img/card/terreCuite.jpg" },
                    { text: "", image: "img/card/gres.jpg" },
                    { text: "", image: "img/card/laine.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "img/card/marbre.jpg" },
                    { text: "", image: "img/card/terreCuite.jpg" },
                    { text: "", image: "img/card/gres.jpg" },
                    { text: "", image: "img/card/porcelaine.jpg" } //faience
                ],
                correct: "C"
            }
        }
    },







    {
        //Q3
        question: "À toi de jouer ! Quel matériau n’entre pas dans la composition de cette œuvre ?", //souligner matériau et pas
        responseDetails: {
            text: "Cette œuvre à été réalisée avec de la laine, du chanvre et de la corde. ",
            media: "" //pas d'image good
        },
        media: "img/art/arbreVie.jpg",
        cartel: [
            { id: "artistName", text: "Dartois Daniel" },
            { id: "artName", text: "L'arbre de vie" },
            { id: "artDate", text: "20ᵉ siècle" },
            { id: "useTechnique", text: "Tapisserie en laine, chanvre et corde" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "img/card/peintureHuile.jpg" },
                    { text: "", image: "img/card/corde.jpg" },
                    { text: "", image: "img/card/laine.jpg" },
                    { text: "", image: "img/card/chanvre.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "img/card/porcelaine.jpg" },
                    { text: "", image: "img/card/corde.jpg" },
                    { text: "", image: "img/card/laine.jpg" },
                    { text: "", image: "img/card/chanvre.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "img/card/sisal.jpg" },
                    { text: "", image: "img/card/corde.jpg" },
                    { text: "", image: "img/card/laine.jpg" },
                    { text: "", image: "img/card/chanvre.jpg" }
                ],
                correct: "A"
            }
        }
    },



/*

    {
        //Q4
        question: "Selon toi, quelle est la nature de cette œuvre ?", //souligner nature
        responseDetails: {
            text: "La photogravure permet de graver des images sur des plaques avec une grande précision. C’est une technique parfaite pour capturer des scènes comme celles de Fraternité.",
            media: "img/card/photogravure.jpg" //indispo actuellement
        },
        media: "img/art/fraternité.jpg",
        cartel: [
            { id: "artistName", text: "Audibran François-Adolphe-Bruneau" },
            { id: "artName", text: "Fraternité" },
            { id: "artDate", text: "19ᵉ  siècle" },
            { id: "useTechnique", text: "Photogravure (d'une lithographie) sur papier." },
             { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "img/card/ceramique.jpg" },
                    { text: "", image: "img/card/verrerie.jpg" },
                    { text: "", image: "img/card/sculpture.jpg" },
                    { text: "", image: "img/card/photogravure.jpg" } //indispo actuellement
                ],
                correct: "D"
            },
            medium: {
                choices: [
                    { text: "", image: "img/card/linogravure.jpg" }, //indispo actuellement
                    { text: "", image: "img/card/sculpture.jpg" },
                    { text: "", image: "img/card/heliogravure.jpg" }, //indispo actuellement
                    { text: "", image: "img/card/photogravure.jpg" } //indispo actuellement
                ],
                correct: "D"
            },
            hard: {
                choices: [
                    { text: "", image: "img/card/dessin.jpg" },
                    { text: "", image: "img/card/photographie.jpg" },
                    { text: "", image: "img/card/linogravure.jpg" }, //indispo actuellement
                    { text: "", image: "img/card/photogravure.jpg" } //indispo actuellement
                ],
                correct: "D"
            }
        }
    },

    */



    {
        //Q5
        question: "C'est ton tour ! Quel est le matériau présent dans cette œuvre ?", //souligner matériau
        responseDetails: {
            text: "Le matériau employé est le fer. Il est à la fois solide et esthétique. Cela permet de créer des pièces utiles et décoratives.",
            media: "img/card/fer.jpg"
        },
        media: "img/art/grilleDecorative.jpg",
        cartel: [
            { id: "artistName", text: "Saupique Georges Laurent" },
            { id: "artName", text: "Grille décorative - Ronde-bosse" },
            { id: "artDate", text: "20ᵉ siècle" },
            { id: "useTechnique", text: "Découpage et montage de fer et aluminium doré sur armature métallique" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "img/card/fer.jpg" },
                    { text: "", image: "img/card/peintureHuile.jpg" }, //gouache
                    { text: "", image: "img/minePlomb.jpg" },
                    { text: "", image: "img/card/verre.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "img/card/fer.jpg" },
                    { text: "", image: "img/card/bronze.jpg" },
                    { text: "", image: "img/card/corde.jpg" },
                    { text: "", image: "img/card/verre.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "img/card/fer.jpg" },
                    { text: "", image: "img/card/bronze.jpg" },
                    { text: "", image: "img/card/gres.jpg" },
                    { text: "", image: "img/card/marbre.jpg" }
                ],
                correct: "A"
            }
        }
    },


    

    {
        //Q6
        question: "Prêts ? Parmi cette liste, quel matériau n’est pas utilisé ?", //souligner matériau et pas
        responseDetails: {
            text: "L’encre de chine, la mine de plomb et la sanguine ont été utilisées pour réaliser cette œuvre. La sanguine est reconnaissable grâce à ses pigments rouge terre. ",
            media: "" //pas d'image good
        },
        media: "img/art/christSamaritaine.jpg", 
        cartel: [
            { id: "artistName", text: "Weyer Gabriel" },
            { id: "artName", text: "Le Christ et la Samaritaine" },
            { id: "artDate", text: "17ᵉ siècle" },
            { id: "useTechnique", text: "Mine de plomb, sanguine, plume et lavis d'encre de Chine sur papier beige collé sur papier" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "img/card/minePlomb.jpg" },
                    { text: "", image: "img/card/sanguine.jpg" },
                    { text: "", image: "img/card/encreChine.jpg" },
                    { text: "", image: "img/card/cristal.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "img/card/minePlomb.jpg" },
                    { text: "", image: "img/card/sanguine.jpg" },
                    { text: "", image: "img/card/peintureHuile.jpg" }, //aquarelle
                    { text: "", image: "img/card/cristal.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "img/card/minePlomb.jpg" },
                    { text: "", image: "img/card/sanguine.jpg" },
                    { text: "", image: "img/card/fusain.jpg" },
                    { text: "", image: "img/card/cristal.jpg" }
                ],
                correct: "C"
            }
        }
    },

    


    {
        //Q7
        question: "Pour toi, sur quel matériau repose cette œuvre ?", //souligner matériau
        responseDetails: {
            text: "Cette œuvre repose sur un carton, un support pratique et léger, souvent utilisé pour les esquisses ou les études de paysages.",
            media: "img/card/carton.jpg"
        },
        media: "img/art/paysageBoise.jpg",
        cartel: [
            { id: "artistName", text: "Paysage boisé" },
            { id: "artName", text: "Hugues Clovis" },
            { id: "artDate", text: "1906" },
            { id: "useTechnique", text: "Fusain sur carton" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "img/card/corde.jpg" },
                    { text: "", image: "img/card/fer.jpg" },
                    { text: "", image: "img/card/carton.jpg" },
                    { text: "", image: "img/card/verre.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "img/card/marbre.jpg" },
                    { text: "", image: "img/card/fer.jpg" }, //toile
                    { text: "", image: "img/card/carton.jpg" },
                    { text: "", image: "img/card/verre.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "img/card/bois.jpg" },
                    { text: "", image: "img/card/fer.jpg" }, //toile
                    { text: "", image: "img/card/carton.jpg" },
                    { text: "", image: "img/card/papier.jpg" }
                ],
                correct: "C"
            }
        }
    },

    /*

    {
        //Q8
        question: "C'est ton tour ! Avec quel outil cette œuvre est réalisée ?", //souligner outils
        responseDetails: {
            text: "Cette œuvre a été réalisée avec de l’aquarelle, une technique de peinture fluide qui utilise des pigments dilués dans l’eau pour créer des effets de transparence et de légèreté.",
            media: "img/card/aquarelle.jpg"
        },
        media: "img/art/bordeauxPrisVif.jpg",
        cartel: [
            { id: "artistName", text: "Bordeaux pris sur le vif : sonnets, impressions vues" },
            { id: "artName", text: "René Arar" },
            { id: "artDate", text: "1947" },
            { id: "useTechnique", text: "crayon, plume, encre, encre de Chine, lavis d'encre de Chine, aquarelle et crayon de couleur, sur papier" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "img/card/aquarelle.jpg" }, //aquarelle
                    { text: "", image: "img/card/photo.jpg" },
                    { text: "", image: "img/card/laine.jpg" },
                    { text: "", image: "img/card/encreChine.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "img/card/aquarelle.jpg" }, //aquarelle
                    { text: "", image: "img/card/gouache.jpg" }, //gouache
                    { text: "", image: "img/card/crayonConté.jpg" }, //conté
                    { text: "", image: "img/card/encreChine.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "img/card/aquarelle.jpg" }, //aquarelle
                    { text: "", image: "img/card/gouache.jpg" }, //gouache
                    { text: "", image: "img/card/acrylique.jpg" }, //acrylique
                    { text: "", image: "img/card/peintureHuile.jpg" }
                ],
                correct: "A"
            }
        }
    },
*/

{
    //Q9   
    question: "Pour toi, en quel matériau est fabriqué ce médaillon ?", //souligner matériau
    responseDetails: {
        text: "Ce médaillon est fabriqué en plâtre, un matériau idéal pour les sculptures décoratives et les reliefs détaillés.",
        media: "img/card/platre.jpg"
    },
    media: "img/art/medailleVilleBordeaux.jpg",
    cartel: [
        { id: "artistName", text: "Ville de Bordeaux - Médaille" },
        { id: "artName", text: "Dubois Henri Alfred Auguste" },
        { id: "artDate", text: "19ᵉ siècle" },
        { id: "useTechnique", text: "Moulage en plâtre" },
        { id: "whereMuseum", text: "En réserve" }
    ],
    hide: ["useTechnique"],
    difficulties: {
        easy: {
            choices: [
                { text: "", image: "img/card/platre.jpg" }, 
                { text: "", image: "img/card/corde.jpg" },
                { text: "", image: "img/card/chanvre.jpg" },
                { text: "", image: "img/card/verre.jpg" }
            ],
            correct: "A"
        },
        medium: {
            choices: [
                { text: "", image: "img/card/platre.jpg" },
                { text: "", image: "img/card/bronze.jpg" }, 
                { text: "", image: "img/card/porcelaine.jpg" },
                { text: "", image: "img/card/cristal.jpg" }
            ],
            correct: "A"
        },
        hard: {
            choices: [
                { text: "", image: "img/card/platre.jpg" }, 
                { text: "", image: "img/card/gres.jpg" }, 
                { text: "", image: "img/card/marbre.jpg" },
                { text: "", image: "img/card/cristal.jpg" }
            ],
            correct: "A"
        }
    }
},
    




{
    //Q9   
    question: "Attention ! Quel élément n’est pas employé dans cette œuvre ?", //souligner pas & outils
    responseDetails: {
        text: "Cette œuvre à été réalisée avec de l’aquarelle, de l’encre de chine et du crayon.  L’encre de chine est une encre noire utilisée pour la peinture et l’écriture.",
        media: "img/card/aquarelle.jpg"
    },
    media: "img/art/paysageBoise.jpg",
    cartel: [
        { id: "artistName", text: "Paysage boisé" },
        { id: "artName", text: "Hugues Clovis" },
        { id: "artDate", text: "1906" },
        { id: "useTechnique", text: "Fusain sur carton" },
        { id: "whereMuseum", text: "En réserve" }
    ],
    hide: ["useTechnique"],
    difficulties: {
        easy: {
            choices: [
                { text: "", image: "img/card/aquarelle.jpg" }, //aquarelle
                { text: "", image: "img/card/photo.jpg" },
                { text: "", image: "img/card/laine.jpg" },
                { text: "", image: "img/card/encreChine.jpg" }
            ],
            correct: "A"
        },
        medium: {
            choices: [
                { text: "", image: "img/card/aquarelle.jpg" }, //aquarelle
                { text: "", image: "img/card/gouache.jpg" }, //gouache
                { text: "", image: "img/card/crayonConté.jpg" }, //conté
                { text: "", image: "img/card/encreChine.jpg" }
            ],
            correct: "A"
        },
        hard: {
            choices: [
                { text: "", image: "img/card/aquarelle.jpg" }, //aquarelle
                { text: "", image: "img/card/gouache.jpg" }, //gouache
                { text: "", image: "img/card/acrylique.jpg" }, //acrylique
                { text: "", image: "img/card/peintureHuile.jpg" }
            ],
            correct: "A"
        }
    }
},







{
    //Q10   
    question: "Pour toi, en quel matériau est fabriqué ce médaillon ?", //souligner matériau
    responseDetails: {
        text: "Ce médaillon est fabriqué en plâtre, un matériau idéal pour les sculptures décoratives et les reliefs détaillés.",
        media: "img/card/platre.jpg"
    },
    media: "img/art/medailleVilleBordeaux.jpg",
    cartel: [
        { id: "artistName", text: "Ville de Bordeaux - Médaille" },
        { id: "artName", text: "Dubois Henri Alfred Auguste" },
        { id: "artDate", text: "19ᵉ siècle" },
        { id: "useTechnique", text: "Moulage en plâtre" },
        { id: "whereMuseum", text: "En réserve" }
    ],
    hide: ["useTechnique"],
    difficulties: {
        easy: {
            choices: [
                { text: "", image: "img/card/platre.jpg" }, 
                { text: "", image: "img/card/corde.jpg" },
                { text: "", image: "img/card/chanvre.jpg" },
                { text: "", image: "img/card/verre.jpg" }
            ],
            correct: "A"
        },
        medium: {
            choices: [
                { text: "", image: "img/card/platre.jpg" },
                { text: "", image: "img/card/bronze.jpg" }, 
                { text: "", image: "img/card/porcelaine.jpg" },
                { text: "", image: "img/card/cristal.jpg" }
            ],
            correct: "A"
        },
        hard: {
            choices: [
                { text: "", image: "img/card/platre.jpg" }, 
                { text: "", image: "img/card/gres.jpg" }, 
                { text: "", image: "img/card/marbre.jpg" },
                { text: "", image: "img/card/cristal.jpg" }
            ],
            correct: "A"
        }
    }
},
    




{
    //Q11
    question: "Avec quoi cette œuvre est réalisée ?", //souligner quoi
    responseDetails: {
        text: "L’œuvre a été réalisée en cire, un matériau malléable et polyvalent prisé par les artistes pour son aptitude à capturer les détails les plus fins.",
        media: "img/card/cire.jpg"
    },
    media: "img/art/figurineChat.jpg",
    cartel: [
        { id: "artistName", text: "Chat - Figurine - sur socle" },
        { id: "artName", text: "Steinlen Théophile Alexandre" },
        { id: "artDate", text: "20ᵉ siècle" },
        { id: "useTechnique", text: "Modelage de cire" },
        { id: "whereMuseum", text: "En réserve" }
    ],
    hide: ["useTechnique"],
    difficulties: {
        easy: {
            choices: [
                { text: "", image: "img/card/fusain.jpg" }, 
                { text: "", image: "img/card/crayon.jpg" },
                { text: "", image: "img/card/cire.jpg" },
                { text: "", image: "img/card/peintureHuile.jpg" } //aquarelle
            ],
            correct: "C"
        },
        medium: {
            choices: [
                { text: "", image: "img/card/fusain.jpg" }, 
                { text: "", image: "img/card/crayon.jpg" },
                { text: "", image: "img/card/cire.jpg" },
                { text: "", image: "img/card/platre.jpg" }
            ],
            correct: "C"
        },
        hard: {
            choices: [
                { text: "", image: "img/card/mabre.jpg" }, 
                { text: "", image: "img/card/gres.jpg" },
                { text: "", image: "img/card/cire.jpg" },
                { text: "", image: "img/card/platre.jpg" }
            ],
            correct: "C"
        }
    }
},






{
    //Q12
    question: "Selon toi, quelle est la nature de cette œuvre ?", //souligner nature
    responseDetails: {
        text: "Cette œuvre est un dessin, une création visuelle réalisée à la main avec de l'encre et la technique du lavis.",
        media: "img/card/dessin.jpg"
    },
    media: "img/art/DessinDetailTempleBoudhiste.jpg",
    cartel: [
        { id: "artistName", text: "Détail d'un temple bouddhiste" },
        { id: "artName", text: "Piechaud Dominique" },
        { id: "artDate", text: "1958" },
        { id: "useTechnique", text: "Dessin encre et lavis sur papier" },
        { id: "whereMuseum", text: "En réserve" }
    ],
    hide: ["useTechnique"],
    difficulties: {
        easy: {
            choices: [
                { text: "", image: "img/card/ceramique.jpg" }, 
                { text: "", image: "img/card/ferronerie.jpg" },
                { text: "", image: "img/card/dessin.jpg" },
                { text: "", image: "img/card/verrerie.jpg" } 
            ],
            correct: "C"
        },
        medium: {
            choices: [
                { text: "", image: "img/card/photographie.jpg" }, 
                { text: "", image: "img/card/peinture.jpg" },
                { text: "", image: "img/card/dessin.jpg" },
                { text: "", image: "img/card/verrerie.jpg" }
            ],
            correct: "C"
        },
        hard: {
            choices: [
                { text: "", image: "img/card/photographie.jpg" }, 
                { text: "", image: "img/card/peinture.jpg" },
                { text: "", image: "img/card/dessin.jpg" },
                { text: "", image: "img/card/sculpture.jpg" }
            ],
            correct: "C"
        }
    }
},








{
    //Q13
    question: "Pour toi, quel est le matériau principal de cette œuvre ?", //souligner matériau
    responseDetails: {
        text: "Le matériau est le verre, utilisé pour sa transparence, sa luminosité et sa capacité à être façonné sous haute température.",
        media: "img/card/verre.jpg"
    },
    media: "img/art/vaseGlobeVerre.jpg",
    cartel: [
        { id: "artistName", text: "Vase globe en verre, blanc opaque" },
        { id: "artName", text: "Sabino Marius-Ernest" },
        { id: "artDate", text: "Inconnue" },
        { id: "useTechnique", text: "Verre" },
        { id: "whereMuseum", text: "En réserve" }
    ],
    hide: ["useTechnique", "artName"],
    difficulties: {
        easy: {
            choices: [
                { text: "", image: "img/card/corde.jpg" }, 
                { text: "", image: "img/card/fer.jpg" }, //toile
                { text: "", image: "img/card/sanguine.jpg" },
                { text: "", image: "img/card/verre.jpg" } 
            ],
            correct: "D"
        },
        medium: {
            choices: [
                { text: "", image: "img/card/marbre.jpg" }, 
                { text: "", image: "img/card/cristal.jpg" },
                { text: "", image: "img/card/sanguine.jpg" },
                { text: "", image: "img/card/verre.jpg" }
            ],
            correct: "D"
        },
        hard: {
            choices: [
                { text: "", image: "img/card/opaline.jpg" }, 
                { text: "", image: "img/card/porcelaine.jpg" },
                { text: "", image: "img/card/marbre.jpg" },
                { text: "", image: "img/card/verre.jpg" }
            ],
            correct: "D"
        }
    }
},






{
    //Q14
    question: "A toi ! Quel est le matériau de cette œuvre ?", //souligner matériau
    responseDetails: {
        text: "L’œuvre a été réalisée en terre cuite, un matériau naturel très apprécié pour la sculpture. La terre cuite est facile à modeler lorsqu’elle est humide et, une fois cuite, elle devient solide et durable",
        media: "img/card/terreCuite.jpg"
    },
    media: "img/art/hebe.jpg",
    cartel: [
        { id: "artistName", text: "Hébé" },
        { id: "artName", text: "Berruer Pierre-François" },
        { id: "artDate", text: "1767" },
        { id: "useTechnique", text: "Terre cuite" },
        { id: "whereMuseum", text: "Exposée" }
    ],
    hide: ["useTechnique"],
    difficulties: {
        easy: {
            choices: [
                { text: "", image: "img/card/terreCuite.jpg" }, 
                { text: "", image: "img/card/encreChine.jpg" },
                { text: "", image: "img/card/corde.jpg" },
                { text: "", image: "img/card/verre.jpg" } 
            ],
            correct: "A"
        },
        medium: {
            choices: [
                { text: "", image: "img/card/terreCuite.jpg" }, 
                { text: "", image: "img/card/cristal.jpg" },
                { text: "", image: "img/card/marbre.jpg" },
                { text: "", image: "img/card/verre.jpg" }
            ],
            correct: "A"
        },
        hard: {
            choices: [
                { text: "", image: "img/card/terreCuite.jpg" }, 
                { text: "", image: "img/card/gres.jpg" },
                { text: "", image: "img/card/marbre.jpg" },
                { text: "", image: "img/card/platre.jpg" }
            ],
            correct: "A"
        }
    }
},


/*

{
    //Q15
    question: "Quelle est la nature de cette œuvre ?", //souligner nature
    responseDetails: {
        text: "L’œuvre a été réalisée en terre cuite, un matériau naturel très apprécié pour la sculpture. La terre cuite est facile à modeler lorsqu’elle est humide et, une fois cuite, elle devient solide et durable",
        media: "img/card/terreCuite.jpg"
    },
    media: "img/art/hebe.jpg",
    cartel: [
        { id: "artistName", text: "Sainte couronnée" },
        { id: "artName", text: "Anonyme français XVème" },
        { id: "artDate", text: "15ᵉ siècle" },
        { id: "useTechnique", text: "Ronde bosse en pierre" },
        { id: "whereMuseum", text: "Exposée"}
    ],
    hide: ["useTechnique"],
    difficulties: {
        easy: {
            choices: [
                { text: "", image: "img/card/dessin.jpg" }, 
                { text: "", image: "img/card/peinture.jpg" },
                { text: "", image: "img/card/rondeBosse.jpg" }, //ronde bosse
                { text: "", image: "img/card/ceramique.jpg" } 
            ],
            correct: "C"
        },
        medium: {
            choices: [
                { text: "", image: "img/card/ferronerie.jpg" }, 
                { text: "", image: "img/card/verrerie.jpg" },
                { text: "", image: "img/card/rondeBosse.jpg" }, //ronde bosse
                { text: "", image: "img/card/ceramique.jpg" }
            ],
            correct: "C"
        },
        hard: {
            choices: [
                { text: "", image: "img/card/terreCuite.jpg" }, //haut relief
                { text: "", image: "img/card/gres.jpg" }, //bas relief
                { text: "", image: "img/card/marbre.jpg" }, //ronde bosse
                { text: "", image: "img/card/ceramique.jpg" }
            ],
            correct: "C"
        }
    }
},

*/





];