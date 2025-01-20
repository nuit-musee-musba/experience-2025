export const questions = [



    {


        //Q1
        question: "Quel outil est utilisé pour réaliser cette œuvre ?", //souligner outils
        responseDetails: {
            text: "L'appareil photo permet de capturer des images avec précision et de jouer avec la lumière et les angles pour produire une œuvre visuelle unique.",
            media: ""
        },
        media: "/3-techniques/art/electrikGarden.png",
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
                    { text: "", image: "/3-techniques/card/massette.jpg" },
                    { text: "", image: "/3-techniques/card/photo.jpg" },
                    { text: "", image: "/3-techniques/card/canneSouffler.jpg" },
                    { text: "", image: "/3-techniques/card/mirette.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/massette.jpg" },
                    { text: "", image: "/3-techniques/card/photo.jpg" },
                    { text: "", image: "/3-techniques/card/peintureHuile.jpg" },
                    { text: "", image: "/3-techniques/card/fusain.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" },
                    { text: "", image: "/3-techniques/card/photo.jpg" },
                    { text: "", image: "/3-techniques/card/peintureHuile.jpg" },
                    { text: "", image: "/3-techniques/card/gouache.jpg" }
                ],
                correct: "B"
            }
        }
    },







    {
        //Q2
        question: "De quel matériau est composée cette œuvre ?", //souligner matériau
        responseDetails: {
            text: "Cette œuvre est composée de grès, un matériau robuste et polyvalent souvent utilisé pour sa durabilité et sa texture idéale,  notamment en sculpture ou en céramique.",
            media: ""
        },
        media: "/3-techniques/art/coupeGres.png",
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
                    { text: "", image: "/3-techniques/card/verre.jpg" },
                    { text: "", image: "/3-techniques/card/bronze.jpg" },
                    { text: "", image: "/3-techniques/card/gres.jpg" },
                    { text: "", image: "/3-techniques/card/laine.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/porcelaine.jpg" },
                    { text: "", image: "/3-techniques/card/terreCuite.jpg" },
                    { text: "", image: "/3-techniques/card/gres.jpg" },
                    { text: "", image: "/3-techniques/card/laine.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/marbre.jpg" },
                    { text: "", image: "/3-techniques/card/terreCuite.jpg" },
                    { text: "", image: "/3-techniques/card/gres.jpg" },
                    { text: "", image: "/3-techniques/card/faience.jpg" }
                ],
                correct: "C"
            }
        }
    },







    {
        //Q3
        question: "Quel matériau n’entre pas dans la composition de cette œuvre ?", //souligner matériau et pas
        responseDetails: {
            text: "Cette œuvre a été réalisée avec de la laine, du chanvre et de la corde. La texture riche et l'usage habile des fibres mettent en valeur un travail artisanal exceptionnel.",
            media: ""
        },
        media: "/3-techniques/art/arbreVie.png",
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
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" },
                    { text: "", image: "/3-techniques/card/corde.jpg" },
                    { text: "", image: "/3-techniques/card/laine.jpg" },
                    { text: "", image: "/3-techniques/card/chanvre.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/porcelaine.jpg" },
                    { text: "", image: "/3-techniques/card/corde.jpg" },
                    { text: "", image: "/3-techniques/card/laine.jpg" },
                    { text: "", image: "/3-techniques/card/chanvre.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/sisal.jpg" },
                    { text: "", image: "/3-techniques/card/corde.jpg" },
                    { text: "", image: "/3-techniques/card/laine.jpg" },
                    { text: "", image: "/3-techniques/card/chanvre.jpg" }
                ],
                correct: "A"
            }
        }
    },





    {
        //Q4
        question: "Quelle est la nature de cette œuvre ?", //souligner nature
        responseDetails: {
            text: "La photogravure permet de graver des images sur des plaques avec une grande précision. C’est une technique parfaite pour capturer des scènes comme celles de Fraternité.", //Fraternité en italic
            media: ""
        },
        media: "/3-techniques/art/fraternité.png",
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
                    { text: "", image: "/3-techniques/card/ceramique.jpg" },
                    { text: "", image: "/3-techniques/card/verrerie.jpg" },
                    { text: "", image: "/3-techniques/card/sculpture.jpg" },
                    { text: "", image: "/3-techniques/card/photogravure.jpg" }
                ],
                correct: "D"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/linogravure.jpg" },
                    { text: "", image: "/3-techniques/card/sculpture.jpg" },
                    { text: "", image: "/3-techniques/card/heliogravure.jpg" },
                    { text: "", image: "/3-techniques/card/photogravure.jpg" }
                ],
                correct: "D"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/dessin.jpg" },
                    { text: "", image: "/3-techniques/card/photographie.jpg" },
                    { text: "", image: "/3-techniques/card/linogravure.jpg" },
                    { text: "", image: "/3-techniques/card/photogravure.jpg" }
                ],
                correct: "D"
            }
        }
    },





    {
        //Q5
        question: "Quel est le matériau présent dans cette œuvre ?", //souligner matériau
        responseDetails: {
            text: "Le matériau employé est le fer : il est à la fois solide et esthétique. Cela permet de créer des pièces à la fois utiles et décoratives.",
            media: ""
        },
        media: "/3-techniques/art/grilleDecorative.png",
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
                    { text: "", image: "/3-techniques/card/fer.jpg" },
                    { text: "", image: "/3-techniques/card/gouache.jpg" },
                    { text: "", image: "/3-techniques/minePlomb.jpg" },
                    { text: "", image: "/3-techniques/card/verre.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/fer.jpg" },
                    { text: "", image: "/3-techniques/card/bronze.jpg" },
                    { text: "", image: "/3-techniques/card/corde.jpg" },
                    { text: "", image: "/3-techniques/card/verre.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/fer.jpg" },
                    { text: "", image: "/3-techniques/card/bronze.jpg" },
                    { text: "", image: "/3-techniques/card/gres.jpg" },
                    { text: "", image: "/3-techniques/card/marbre.jpg" }
                ],
                correct: "A"
            }
        }
    },




    {
        //Q6
        question: "Parmi cette liste, quel matériau n’est pas utilisé ?", //souligner matériau et pas
        responseDetails: {
            text: "L’encre de chine, la mine de plomb et la sanguine ont été utilisées pour réaliser cette œuvre. La sanguine est reconnaissable grâce à ses pigments rouge terre.  L’encre de chine est une encre noire utilisée pour la peinture et l’écriture.",
            media: ""
        },
        media: "/3-techniques/art/christSamaritaine.png",
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
                    { text: "", image: "/3-techniques/card/minePlomb.jpg" },
                    { text: "", image: "/3-techniques/card/sanguine.jpg" },
                    { text: "", image: "/3-techniques/card/cristal.jpg" },
                    { text: "", image: "/3-techniques/card/encreChine.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/minePlomb.jpg" },
                    { text: "", image: "/3-techniques/card/sanguine.jpg" },
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" },
                    { text: "", image: "/3-techniques/card/encreChine.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/minePlomb.jpg" },
                    { text: "", image: "/3-techniques/card/sanguine.jpg" },
                    { text: "", image: "/3-techniques/card/fusain.jpg" },
                    { text: "", image: "/3-techniques/card/encreChine.jpg" }
                ],
                correct: "C"
            }
        }
    },




    {
        //Q7
        question: "Sur quel matériau repose cette œuvre ?", //souligner matériau
        responseDetails: {
            text: "Cette œuvre repose sur un carton, un support pratique et léger, souvent utilisé pour les esquisses ou les études de paysages.",
            media: ""
        },
        media: "/3-techniques/art/paysageBoise.png",
        cartel: [
            { id: "artistName", text: "Hugues Clovis" },
            { id: "artName", text: "Paysage boisé" },
            { id: "artDate", text: "1906" },
            { id: "useTechnique", text: "Fusain sur carton" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/corde.jpg" },
                    { text: "", image: "/3-techniques/card/fer.jpg" },
                    { text: "", image: "/3-techniques/card/carton.jpg" },
                    { text: "", image: "/3-techniques/card/verre.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/marbre.jpg" },
                    { text: "", image: "/3-techniques/card/toile.jpg" },
                    { text: "", image: "/3-techniques/card/carton.jpg" },
                    { text: "", image: "/3-techniques/card/verre.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/bois.jpg" },
                    { text: "", image: "/3-techniques/card/toile.jpg" },
                    { text: "", image: "/3-techniques/card/carton.jpg" },
                    { text: "", image: "/3-techniques/card/papier.jpg" }
                ],
                correct: "C"
            }
        }
    },



    {
        //Q8
        question: "Avec quel outil cette œuvre est réalisée ?", //souligner outils
        responseDetails: {
            text: "Cette œuvre a été réalisée avec de l’aquarelle, une technique de peinture fluide qui utilise des pigments dilués dans l’eau pour créer des effets de transparence et de légèreté.",
            media: ""
        },
        media: "/3-techniques/art/jeuneFemmeFilletteLisant.png",
        cartel: [
            { id: "artistName", text: "Anonyme français XIXème" },
            { id: "artName", text: "Jeune femme et fillette lisant" },
            { id: "artDate", text: "19ᵉ siècle" },
            { id: "useTechnique", text: "Aquarelle sur papier" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" },
                    { text: "", image: "/3-techniques/card/photo.jpg" },
                    { text: "", image: "/3-techniques/card/laine.jpg" },
                    { text: "", image: "/3-techniques/card/encreChine.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" },
                    { text: "", image: "/3-techniques/card/gouache.jpg" },
                    { text: "", image: "/3-techniques/card/crayonConte.jpg" },
                    { text: "", image: "/3-techniques/card/encreChine.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" },
                    { text: "", image: "/3-techniques/card/gouache.jpg" },
                    { text: "", image: "/3-techniques/card/acrylique.jpg" },
                    { text: "", image: "/3-techniques/card/peintureHuile.jpg" }
                ],
                correct: "A"
            }
        }
    },






    {
        //Q9   
        question: "Quel élément n’est pas employé dans cette œuvre ?", //souligner pas & outils
        responseDetails: {
            text: "Cette œuvre a été réalisée avec de l’aquarelle, de l’encre de chine et du crayon.  L’encre de chine est une encre noire utilisée pour la peinture et l’écriture.",
            media: ""
        },
        media: "/3-techniques/art/bordeauxPrisVif.png",
        cartel: [
            { id: "artistName", text: "Hugues Clovis" },
            { id: "artName", text: "Paysage boisé" },
            { id: "artDate", text: "1906" },
            { id: "useTechnique", text: "Fusain sur carton" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/encreChine.jpg" },
                    { text: "", image: "/3-techniques/card/crayon.jpg" },
                    { text: "", image: "/3-techniques/card/massette.jpg" },
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/encreChine.jpg" },
                    { text: "", image: "/3-techniques/card/crayon.jpg" },
                    { text: "", image: "/3-techniques/card/ebauchoir.jpg" },
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/encreChine.jpg" },
                    { text: "", image: "/3-techniques/card/crayon.jpg" },
                    { text: "", image: "/3-techniques/card/minePlomb.jpg" },
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" }
                ],
                correct: "C"
            }
        }
    },







    {
        //Q10   
        question: "En quel matériau est fabriqué ce médaillon ?", //souligner matériau
        responseDetails: {
            text: "Ce médaillon est fabriqué en plâtre, un matériau idéal pour les sculptures décoratives et les reliefs détaillés.",
            media: ""
        },
        media: "/3-techniques/art/medailleVilleBordeaux.png",
        cartel: [
            { id: "artistName", text: "Dubois Henri Alfred Auguste" },
            { id: "artName", text: "Ville de Bordeaux - Médaille " },
            { id: "artDate", text: "19ᵉ siècle" },
            { id: "useTechnique", text: "Moulage en plâtre" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/platre.jpg" },
                    { text: "", image: "/3-techniques/card/corde.jpg" },
                    { text: "", image: "/3-techniques/card/chanvre.jpg" },
                    { text: "", image: "/3-techniques/card/verre.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/platre.jpg" },
                    { text: "", image: "/3-techniques/card/bronze.jpg" },
                    { text: "", image: "/3-techniques/card/porcelaine.jpg" },
                    { text: "", image: "/3-techniques/card/cristal.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/platre.jpg" },
                    { text: "", image: "/3-techniques/card/gres.jpg" },
                    { text: "", image: "/3-techniques/card/marbre.jpg" },
                    { text: "", image: "/3-techniques/card/cristal.jpg" }
                ],
                correct: "A"
            }
        }
    },





    {
        //Q11
        question: "Avec quoi cette œuvre est réalisée ?", //souligner quoi
        responseDetails: {
            text: "L’œuvre a été réalisée en cire, un matériau malléable et polyvalent apprécié des artistes pour son aptitude à capturer les détails les plus fins. ",
            media: ""
        },
        media: "/3-techniques/art/figurineChat.png",
        cartel: [
            { id: "artistName", text: "Steinlen Théophile Alexandre" },
            { id: "artName", text: "Chat - Figurine - sur socle" },
            { id: "artDate", text: "20ᵉ siècle" },
            { id: "useTechnique", text: "Modelage de cire" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/fusain.jpg" },
                    { text: "", image: "/3-techniques/card/crayon.jpg" },
                    { text: "", image: "/3-techniques/card/cire.jpg" },
                    { text: "", image: "/3-techniques/card/acrylique.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/fusain.jpg" },
                    { text: "", image: "/3-techniques/card/crayon.jpg" },
                    { text: "", image: "/3-techniques/card/cire.jpg" },
                    { text: "", image: "/3-techniques/card/platre.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/marbre.jpg" },
                    { text: "", image: "/3-techniques/card/gres.jpg" },
                    { text: "", image: "/3-techniques/card/cire.jpg" },
                    { text: "", image: "/3-techniques/card/platre.jpg" }
                ],
                correct: "C"
            }
        }
    },






    {
        //Q12
        question: "Quelle est la nature de cette œuvre ?", //souligner nature
        responseDetails: {
            text: "Cette œuvre est un dessin, une création visuelle réalisée à la main avec de l'encre et la technique du lavis.",
            media: ""
        },
        media: "/3-techniques/art/DessinDetailTempleBoudhiste.jpg",
        cartel: [
            { id: "artistName", text: "Piechaud Dominique" },
            { id: "artName", text: "Détail d'un temple bouddhiste" },
            { id: "artDate", text: "1958" },
            { id: "useTechnique", text: "Dessin encre et lavis sur papier" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/ceramique.jpg" },
                    { text: "", image: "/3-techniques/card/ferronnerie.jpg" },
                    { text: "", image: "/3-techniques/card/dessin.jpg" },
                    { text: "", image: "/3-techniques/card/verrerie.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/photographie.jpg" },
                    { text: "", image: "/3-techniques/card/peinture.jpg" },
                    { text: "", image: "/3-techniques/card/dessin.jpg" },
                    { text: "", image: "/3-techniques/card/verrerie.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/photographie.jpg" },
                    { text: "", image: "/3-techniques/card/peinture.jpg" },
                    { text: "", image: "/3-techniques/card/dessin.jpg" },
                    { text: "", image: "/3-techniques/card/sculpture.jpg" }
                ],
                correct: "C"
            }
        }
    },








    {
        //Q13
        question: "Quel est le matériau principal de cette œuvre ?", //souligner matériau
        responseDetails: {
            text: "Le matériau est le verre, utilisé pour sa transparence, sa luminosité et sa capacité à être façonné sous haute température.",
            media: ""
        },
        media: "/3-techniques/art/vaseGlobeVerre.png",
        cartel: [
            { id: "artistName", text: "Sabino Marius-Ernest" },
            { id: "artName", text: "Vase globe en verre, blanc opaque" },
            { id: "artDate", text: "Inconnue" },
            { id: "useTechnique", text: "Verre" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique", "artName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/corde.jpg" },
                    { text: "", image: "/3-techniques/card/toile.jpg" },
                    { text: "", image: "/3-techniques/card/sanguine.jpg" },
                    { text: "", image: "/3-techniques/card/verre.jpg" }
                ],
                correct: "D"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/marbre.jpg" },
                    { text: "", image: "/3-techniques/card/cristal.jpg" },
                    { text: "", image: "/3-techniques/card/sanguine.jpg" },
                    { text: "", image: "/3-techniques/card/verre.jpg" }
                ],
                correct: "D"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/opaline.jpg" },
                    { text: "", image: "/3-techniques/card/porcelaine.jpg" },
                    { text: "", image: "/3-techniques/card/marbre.jpg" },
                    { text: "", image: "/3-techniques/card/verre.jpg" }
                ],
                correct: "D"
            }
        }
    },






    {
        //Q14
        question: "Quel est le matériau de cette œuvre ?", //souligner matériau
        responseDetails: {
            text: "L’œuvre a été réalisée en terre cuite, un matériau naturel très apprécié pour la sculpture. La terre cuite est facile à modeler lorsqu’elle est humide et une fois cuite, elle devient solide et durable.",
            media: ""
        },
        media: "/3-techniques/art/hebe.png",
        cartel: [
            { id: "artistName", text: "Berruer Pierre-François" },
            { id: "artName", text: "Hébé" },
            { id: "artDate", text: "1767" },
            { id: "useTechnique", text: "Terre cuite" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/terreCuite.jpg" },
                    { text: "", image: "/3-techniques/card/encreChine.jpg" },
                    { text: "", image: "/3-techniques/card/corde.jpg" },
                    { text: "", image: "/3-techniques/card/verre.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/terreCuite.jpg" },
                    { text: "", image: "/3-techniques/card/cristal.jpg" },
                    { text: "", image: "/3-techniques/card/marbre.jpg" },
                    { text: "", image: "/3-techniques/card/verre.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/terreCuite.jpg" },
                    { text: "", image: "/3-techniques/card/gres.jpg" },
                    { text: "", image: "/3-techniques/card/marbre.jpg" },
                    { text: "", image: "/3-techniques/card/platre.jpg" }
                ],
                correct: "A"
            }
        }
    },




    {
        //Q15
        question: "Quelle est la nature de cette œuvre ?", //souligner nature
        responseDetails: {
            text: "Cette œuvre est une statuette en ronde-bosse, ce qui signifie qu’elle est sculptée en trois dimensions et peut être admirée sous tous les angles.",
            media: ""
        },
        media: "/3-techniques/art/sainteMarieMadeleine.png",
        cartel: [
            { id: "artistName", text: "Anonyme français XVème" },
            { id: "artName", text: "Sainte couronnée" },
            { id: "artDate", text: "15ᵉ siècle" },
            { id: "useTechnique", text: "Ronde bosse en pierre" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/dessin.jpg" },
                    { text: "", image: "/3-techniques/card/peinture.jpg" },
                    { text: "", image: "/3-techniques/card/rondeBosse.jpg" },
                    { text: "", image: "/3-techniques/card/ceramique.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/ferronnerie.jpg" },
                    { text: "", image: "/3-techniques/card/verrerie.jpg" },
                    { text: "", image: "/3-techniques/card/rondeBosse.jpg" },
                    { text: "", image: "/3-techniques/card/ceramique.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/hautRelief.jpg" },
                    { text: "", image: "/3-techniques/card/basRelief.jpg" },
                    { text: "", image: "/3-techniques/card/rondeBosse.jpg" },
                    { text: "", image: "/3-techniques/card/ceramique.jpg" }
                ],
                correct: "C"
            }
        }
    },





    {
        //Q16
        question: "Où cette peinture a été réalisée ?", //souligner peinture
        responseDetails: {
            text: "L'œuvre Jardin au Pyla d' Albert Marquet est une ode à la simplicité et à la lumière du sud-ouest de la France. Dans ce tableau, Marquet capture la quiétude d'un jardin baigné par la douce lumière côtière du Pyla, près du bassin d'Arcachon à la Teste-de-Buch ",//italic le jardin au pyla
            media: ""
        },
        media: "/3-techniques/art/jardinPyla.png",
        cartel: [
            { id: "artistName", text: "Marquet Albert" },
            { id: "artName", text: "Jardin au Pyla" },
            { id: "artDate", text: "1935" },
            { id: "useTechnique", text: "Huile sur toile" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/NouvelleAquitaine.jpg" },
                    { text: "", image: "/3-techniques/card/Occitanie.jpg" },
                    { text: "", image: "/3-techniques/card/ProvenceAlpesCotesAzur.jpg" },
                    { text: "", image: "/3-techniques/card/Corse.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/Gironde.jpg" },
                    { text: "", image: "/3-techniques/card/Landes.jpg" },
                    { text: "", image: "/3-techniques/card/PyreneesAtlantiques.jpg" },
                    { text: "", image: "/3-techniques/card/LotEtGaronne.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/LaTesteDeBuch.jpg" },
                    { text: "", image: "/3-techniques/card/Arcachon.jpg" },
                    { text: "", image: "/3-techniques/card/LègeCapFerret.jpg" },
                    { text: "", image: "/3-techniques/card/GujanMestras.jpg" }
                ],
                correct: "A"
            }
        }
    },


    {
        //Q17
        question: "Quel est ce bâtiment ?", //souligner batiment
        responseDetails: {
            text: "L'Église Sainte-Croix est l'abbatiale d'un ancien monastère bénédictin, fondé au 7ᵉ siècle. Le clocher à droite du portail remonte au 12ᵉ siècle, son porche au 11e tandis que le clocher de gauche a été rajouté au 19ᵉ siècle par l'architecte Paul Abadie.",
            media: ""
        },
        media: "/3-techniques/art/egliseSainteCroix.png",
        cartel: [
            { id: "artistName", text: " Anonyme français XIXème" },
            { id: "artName", text: "L'Église Sainte-Croix à Bordeaux" },
            { id: "artDate", text: "19ᵉ siècle" },
            { id: "useTechnique", text: "Gravure sur papier" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["artName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/CiteDuVin.jpg" },
                    { text: "", image: "/3-techniques/card/EgliseSainteCroix.jpg" },
                    { text: "", image: "/3-techniques/card/PontDePierre.jpg" },
                    { text: "", image: "/3-techniques/card/MECA.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/BasiliqueSaintMichel.jpg" },
                    { text: "", image: "/3-techniques/card/EgliseSainteCroix.jpg" },
                    { text: "", image: "/3-techniques/card/GareSaintJean.jpg" },
                    { text: "", image: "/3-techniques/card/GrosseCloche.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/PresbytereDeEglise.jpg" },
                    { text: "", image: "/3-techniques/card/EgliseSainteCroix.jpg" },
                    { text: "", image: "/3-techniques/card/BasiliqueSaintMichel.jpg" },
                    { text: "", image: "/3-techniques/card/CathedraleSaintAndreDeBordeaux.jpg" }
                ],
                correct: "B"
            }
        }
    },




    {
        //Q18
        question: "Quel est ce bâtiment ?", //souligner batiment
        responseDetails: {
            text: "Elle a pris le nom de porte d'Aquitaine le 18 novembre 1753 afin d'honorer le second fils de la Dauphine, le duc d'Aquitaine Xavier de France qui venait de naître.",
            media: ""
        },
        media: "/3-techniques/art/porteAquitaineBordeaux.png",
        cartel: [
            { id: "artistName", text: "Drouyn Léo" },
            { id: "artName", text: "Porte d'Aquitaine à Bordeaux" },
            { id: "artDate", text: "19ᵉ siècle" },
            { id: "useTechnique", text: "Dessin à la plume sur papier" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["artName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/PorteAquitaine.jpg" },
                    { text: "", image: "/3-techniques/card/CiteDuVin.jpg" },
                    { text: "", image: "/3-techniques/card/PontChabanDelmas.jpg" },
                    { text: "", image: "/3-techniques/card/BordeauxMetropoleArena.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/PorteAquitaine.jpg" },
                    { text: "", image: "/3-techniques/card/BasiliqueSaintMichel.jpg" },
                    { text: "", image: "/3-techniques/card/PontChabanDelmas.jpg" },
                    { text: "", image: "/3-techniques/card/EgliseSainteCroix.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/PorteAquitaine.jpg" },
                    { text: "", image: "/3-techniques/card/PorteDeBourgogne.jpg" },
                    { text: "", image: "/3-techniques/card/PorteDijeaux.jpg" },
                    { text: "", image: "/3-techniques/card/PorteDeLaMonnaie.jpg" }
                ],
                correct: "A"
            }
        }
    },





    {
        //Q19
        question: " Quel est le bâtiment représenté ici?", //souligner batiment
        responseDetails: {
            text: "La porte Cailhau se dresse sur la place du Palais du côté du fleuve. Située entre les embouchures des deux principales rivières de Bordeaux, le Peugue et la Devèze, c'était la principale entrée dans la ville depuis le port.",
            media: ""
        },
        media: "/3-techniques/art/bordeauxPorteCailleau.png",
        cartel: [
            { id: "artistName", text: "Drouyn Léo" },
            { id: "artName", text: "Bordeaux, Porte du Cailleau" },
            { id: "artDate", text: "02/08/1894" },
            { id: "useTechnique", text: "Dessin à la plume sur papier collé sur carton" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["artName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/CiteDuVin.jpg" },
                    { text: "", image: "/3-techniques/card/PontChabanDelmas.jpg" },
                    { text: "", image: "/3-techniques/card/PorteDuCailleau.jpg" },
                    { text: "", image: "/3-techniques/card/MECA.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/EgliseSainteCroix.jpg" },
                    { text: "", image: "/3-techniques/card/GareSaintJean.jpg" },
                    { text: "", image: "/3-techniques/card/PorteDuCailleau.jpg" },
                    { text: "", image: "/3-techniques/card/PontDePierre.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/PorteSaintEloi.jpg" },
                    { text: "", image: "/3-techniques/card/GrosseCloche.jpg" },
                    { text: "", image: "/3-techniques/card/PorteDesSalinieres.jpg" }
                ],
                correct: "C"
            }
        }
    },







    {
        //Q20
        question: "Qui est la déesse représentée ici ?", //souligner déesse
        responseDetails: {
            text: "L’œuvre représente Diane, la déesse romaine de la chasse et de la nature. Elle est un symbole de force et de grâce.",
            media: ""
        },
        media: "/3-techniques/art/dianeChasseresse.jpg",
        cartel: [
            { id: "artistName", text: "Bate Louis Robert" },
            { id: "artName", text: "Diane chasseresse - Groupe relié" },
            { id: "artDate", text: "1933" },
            { id: "useTechnique", text: "Bronze, fonte à cire perdue : épreuve unique" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/Diane.jpg" },
                    { text: "", image: "/3-techniques/card/Mercure.jpg" },
                    { text: "", image: "/3-techniques/card/Pluton.jpg" },
                    { text: "", image: "/3-techniques/card/Jupiter.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/Diane.jpg" },
                    { text: "", image: "/3-techniques/card/Mercure.jpg" },
                    { text: "", image: "/3-techniques/card/Pluton.jpg" },
                    { text: "", image: "/3-techniques/card/Minerve.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/Diane.jpg" },
                    { text: "", image: "/3-techniques/card/Junon.jpg" },
                    { text: "", image: "/3-techniques/card/Vénus.jpg" },
                    { text: "", image: "/3-techniques/card/Minerve.jpg" }
                ],
                correct: "A"
            }
        }
    },





    {
        //Q21
        question: "Sous quel nom connaît-on cette peinture à l'huile de Rosa Bonheur ?", //souligner nom
        responseDetails: {
            text: "L'œuvre La Foulaison du blé en Camargue, réalisée par Rosa Bonheur, met en lumière le travail agricole dans la région de la Camargue avec une maîtrise artistique remarquable. ", //italic foulaison du blé en camargue
            media: ""
        },
        media: "/3-techniques/art/foulaisonBleCamargue.png",
        cartel: [
            { id: "artistName", text: "Bonheur Rosa" },
            { id: "artName", text: "La Foulaison du blé en Camargue" },
            { id: "artDate", text: "1864-1899" },
            { id: "useTechnique", text: "Huile sur toile" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/SoleilEte.jpg" },
                    { text: "", image: "/3-techniques/card/LeRetourDeLaFoire.jpg" },
                    { text: "", image: "/3-techniques/card/TetesDeChevaux.jpg" },
                    { text: "", image: "/3-techniques/card/LaFoulaisonDuBléEnCamargue.jpg" }
                ],
                correct: "D"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/LesChevaux.jpg" },
                    { text: "", image: "/3-techniques/card/LaFoulaisonDuFoinEnCatalogne.jpg" },
                    { text: "", image: "/3-techniques/card/LeFoin.jpg" },
                    { text: "", image: "/3-techniques/card/LaFoulaisonDuBléEnCamargue.jpg" }
                ],
                correct: "D"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/LaFoulaisonDuFoinEnCamargue.jpg" },
                    { text: "", image: "/3-techniques/card/LaFoulaisonDuBléEnCatalogne.jpg" },
                    { text: "", image: "/3-techniques/card/LaFoulaisonDuFoinEnCatalogne.jpg" },
                    { text: "", image: "/3-techniques/card/LaFoulaisonDuBléEnCamargue.jpg" }
                ],
                correct: "D"
            }
        }
    },






    {
        //Q22
        question: "Comment s’appelle le personnage sur ce portrait ? ", //souligner personnage
        responseDetails: {
            text: "L'œuvre rend hommage à Jean Racine, l'un des plus grands dramaturges français du XVIIᵉ siècle.",
            media: ""
        },
        media: "/3-techniques/art/portraitFillsLouisXIV.png",
        cartel: [
            { id: "artistName", text: "Boullogne Bon" },
            { id: "artName", text: "Portrait d'un fils légitimé de Louis XIV - Portrait de Jean Racine" },
            { id: "artDate", text: "17ᵉ siècle" },
            { id: "useTechnique", text: "Huile sur toile" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["artName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/SimoneDeBeauvoir.jpg" },
                    { text: "", image: "/3-techniques/card/JeanRacine.jpg" },
                    { text: "", image: "/3-techniques/card/RosaParks.jpg" },
                    { text: "", image: "/3-techniques/card/MarieCurie.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/Charlemagne.jpg" },
                    { text: "", image: "/3-techniques/card/JeanRacine.jpg" },
                    { text: "", image: "/3-techniques/card/Moliere.jpg" },
                    { text: "", image: "/3-techniques/card/VictorHugo.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/LouisXIV.jpg" },
                    { text: "", image: "/3-techniques/card/JeanRacine.jpg" },
                    { text: "", image: "/3-techniques/card/Moliere.jpg" },
                    { text: "", image: "/3-techniques/card/PierreCorneille.jpg" }
                ],
                correct: "B"
            }
        }
    },




    {
        //Q23
        question: "Qui est le peintre de cette œuvre ?", //souligner peintre
        responseDetails: {
            text: "Odilon Redon est un peintre et graveur symboliste français. Son art explore les aspects de la pensée et la part sombre de l'âme humaine, empreinte des mécanismes du rêve.",
            media: ""
        },
        media: "/3-techniques/art/portraitMadameRedon.png",
        cartel: [
            { id: "artistName", text: "Redon Odilon" },
            { id: "artName", text: "Portrait de Madame Redon" },
            { id: "artDate", text: "1911" },
            { id: "useTechnique", text: "Pastel sur papier" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artistName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/WolfgangMozart.jpg" },
                    { text: "", image: "/3-techniques/card/OdilonRedon.jpg" },
                    { text: "", image: "/3-techniques/card/MaxVerstappen.jpg" },
                    { text: "", image: "/3-techniques/card/MargotRobbie.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/ClaudeMonet.jpg" },
                    { text: "", image: "/3-techniques/card/OdilonRedon.jpg" },
                    { text: "", image: "/3-techniques/card/VincentVanGogh.jpg" },
                    { text: "", image: "/3-techniques/card/PietMondrian.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/ClaudeMonet.jpg" },
                    { text: "", image: "/3-techniques/card/OdilonRedon.jpg" },
                    { text: "", image: "/3-techniques/card/VincentVanGogh.jpg" },
                    { text: "", image: "/3-techniques/card/GastonRedon.jpg" }
                ],
                correct: "B"
            }
        }
    },





    {
        //Q24
        question: "Qui est le peintre de cette œuvre ?", //souligner peintre
        responseDetails: {
            text: "L'œuvre réalisée par Eugène Delacroix illustre avec intensité et mouvement une scène dramatique de chasse dans un paysage exotique. Inspiré par ses voyages en Afrique du Nord, Delacroix capture ici la confrontation entre l'homme et la nature sauvage.",
            media: ""
        },
        media: "/3-techniques/art/chasseLions.png",
        cartel: [
            { id: "artistName", text: "Delacroix Eugène" },
            { id: "artName", text: "La Chasse aux lions" },
            { id: "artDate", text: "30/07/1854 - 30/04/1855" },
            { id: "useTechnique", text: "Huile sur toile" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artistName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/EugeneDelacroix.jpg" },
                    { text: "", image: "/3-techniques/card/AntoinedeSaintExupery.jpg" },
                    { text: "", image: "/3-techniques/card/EmmanuelMacron.jpg" },
                    { text: "", image: "/3-techniques/card/EmileZola.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/EugeneDelacroix.jpg" },
                    { text: "", image: "/3-techniques/card/RosaBonheur.jpg" },
                    { text: "", image: "/3-techniques/card/SuzanneValadon.jpg" },
                    { text: "", image: "/3-techniques/card/ClaudeMonet.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/ClaudeMonet.jpg" },
                    { text: "", image: "/3-techniques/card/RosaBonheur.jpg" },
                    { text: "", image: "/3-techniques/card/FranciscoDeGoya.jpg" },
                    { text: "", image: "/3-techniques/card/ClaudeMonet.jpg" }
                ],
                correct: "B"
            }
        }
    },






    {
        //Q25
        question: "Quelle est la nationalité du sculpteur de cette œuvre ?", //souligner nationnalité
        responseDetails: {
            text: "Cette œuvre est d'origine espagnole. Réalisée entre 1430 et 1470, elle témoigne du savoir-faire des sculpteurs espagnols du XVe siècle, notamment dans le travail de l'albâtre, un matériau choisi pour sa finesse et sa capacité à restituer les détails avec élégance.",
            media: ""
        },
        media: "/3-techniques/art/visitation.png",
        cartel: [
            { id: "artistName", text: "Anonyme espagnol XVᵉ siècle" },
            { id: "artName", text: "La Visitation - Elisabeth et la Vierge" },
            { id: "artDate", text: "430-1470 (vers)" },
            { id: "useTechnique", text: "Ronde-bosse en albâtre; traces de polychromie" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artistName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/Brésilien.jpg" },
                    { text: "", image: "/3-techniques/card/Américain.jpg" },
                    { text: "", image: "/3-techniques/card/Espagnol.jpg" },
                    { text: "", image: "/3-techniques/card/Chinois.jpg" }
                ],
                correct: "C"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/Belge.jpg" },
                    { text: "", image: "/3-techniques/card/Américain.jpg" },
                    { text: "", image: "/3-techniques/card/Espagnol.jpg" },
                    { text: "", image: "/3-techniques/card/Chinois.jpg" }
                ],
                correct: "C"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/Français.jpg" },
                    { text: "", image: "/3-techniques/card/Anglais.jpg" },
                    { text: "", image: "/3-techniques/card/Espagnol.jpg" },
                    { text: "", image: "/3-techniques/card/Italien.jpg" }
                ],
                correct: "C"
            }
        }
    },




    {
        //Q26
        question: "Quand cette peinture a été réalisée ?", //souligner quand et peinture
        responseDetails: {
            text: "L'œuvre a été réalisée en 1945, ce qui la situe au XXᵉ siècle. Cette période artistique est marquée par une grande diversité de styles et d'expérimentations, influencée par les bouleversements historiques et les courants modernes. ",
            media: ""
        },
        media: "/3-techniques/art/compositionConstructionsChamps.jpg",
        cartel: [
            { id: "artistName", text: "Boyer-Chantoiseau Odette" },
            { id: "artName", text: "Composition - Constructions dans les champs" },
            { id: "artDate", text: "1945" },
            { id: "useTechnique", text: "Huile sur toile" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artDate"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/Prehistoire.jpg" },
                    { text: "", image: "/3-techniques/card/Antiquite.jpg" },
                    { text: "", image: "/3-techniques/card/MoyenAge.jpg" },
                    { text: "", image: "/3-techniques/card/EpoqueContemporaine.jpg" }
                ],
                correct: "D"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/17e.jpg" },
                    { text: "", image: "/3-techniques/card/21e.jpg" },
                    { text: "", image: "/3-techniques/card/18e.jpg" },
                    { text: "", image: "/3-techniques/card/20e.jpg" }
                ],
                correct: "D"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/1900-1920.jpg" },
                    { text: "", image: "/3-techniques/card/1960-1980.jpg" },
                    { text: "", image: "/3-techniques/card/1920-1940.jpg" },
                    { text: "", image: "/3-techniques/card/1940-1960.jpg" }
                ],
                correct: "D"
            }
        }
    },




    {
        //Q27
        question: "Quand cette peinture a été réalisée ?", //souligner quand et peinture
        responseDetails: {
            text: "L'œuvre a été réalisée entre 1658 et 1660, ce qui la situe au XVIIᵉ siècle. Cette période correspond à l'âge d'or de la peinture baroque, caractérisée par des compositions dynamiques, des contrastes marqués et une grande expressivité.",
            media: ""
        },
        media: "/3-techniques/art/adorationBergers.png",
        cartel: [
            { id: "artistName", text: "Hondius Abraham Daniëlsz" },
            { id: "artName", text: "L'Adoration des bergers" },
            { id: "artDate", text: "1658-1660" },
            { id: "useTechnique", text: "Huile sur ardoise" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artDate"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/Antiquite.jpg" },
                    { text: "", image: "/3-techniques/card/TempsModernes.jpg" },
                    { text: "", image: "/3-techniques/card/Prehistoire.jpg" },
                    { text: "", image: "/3-techniques/card/MoyenAge.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/18e.jpg" },
                    { text: "", image: "/3-techniques/card/17e.jpg" },
                    { text: "", image: "/3-techniques/card/21e.jpg" },
                    { text: "", image: "/3-techniques/card/20e.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/1700-1750.jpg" },
                    { text: "", image: "/3-techniques/card/1650-1700.jpg" },
                    { text: "", image: "/3-techniques/card/1550-1600.jpg" },
                    { text: "", image: "/3-techniques/card/1600-1650.jpg" }
                ],
                correct: "B"
            }
        }
    },




    {
        //Q28
        question: "Quand cette peinture a été réalisée ?", //souligner quand et peinture
        responseDetails: {
            text: "L'œuvre de Victoire-Élisabeth Calcagni capture la beauté mélancolique d'un paysage baigné par la lumière douce et froide de l'hiver. Elle a été réalisée entre 1963 et 1964.",
            media: ""
        },
        media: "/3-techniques/art/soleilHiver.jpg",
        cartel: [
            { id: "artistName", text: "Calcagni Victoire-Elisabeth" },
            { id: "artName", text: "Soleil d'hiver" },
            { id: "artDate", text: "1963-1964" },
            { id: "useTechnique", text: "Huile sur toile" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["artDate"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/Prehistoire.jpg" },
                    { text: "", image: "/3-techniques/card/Antiquite.jpg" },
                    { text: "", image: "/3-techniques/card/MoyenAge.jpg" },
                    { text: "", image: "/3-techniques/card/EpoqueContemporaine.jpg" }
                ],
                correct: "D"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/17e.jpg" },
                    { text: "", image: "/3-techniques/card/21e.jpg" },
                    { text: "", image: "/3-techniques/card/18e.jpg" },
                    { text: "", image: "/3-techniques/card/20e.jpg" }
                ],
                correct: "D"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/1900-1920.jpg" },
                    { text: "", image: "/3-techniques/card/1920–1940.jpg" },
                    { text: "", image: "/3-techniques/card/1960-1980.jpg" },
                    { text: "", image: "/3-techniques/card/1940-1960.jpg" }
                ],
                correct: "D"
            }
        }
    },








    {
        //Q29
        question: "Quand cette peinture a été réalisée ?", //souligner quand et peinture
        responseDetails: {
            text: "L'œuvre a été réalisée en 1469, ce qui la situe au XVᵉ siècle. Cette période est marquée par l'art gothique tardif, où l'on retrouve une grande attention aux détails, des expressions empreintes de piété et une mise en scène soignée des figures religieuses. ",
            media: ""
        },
        media: "/3-techniques/art/viergePitieSaints.png",
        cartel: [
            { id: "artistName", text: "Clot Hans" },
            { id: "artName", text: "Vierge de Pitié entourée de saints" },
            { id: "artDate", text: "1469" },
            { id: "useTechnique", text: "Huile sur bois" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artDate"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/Antiquite.jpg" },
                    { text: "", image: "/3-techniques/card/MoyenAge.jpg" },
                    { text: "", image: "/3-techniques/card/Prehistoire.jpg" },
                    { text: "", image: "/3-techniques/card/EpoqueContemporaine.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/19e.jpg" },
                    { text: "", image: "/3-techniques/card/15e.jpg" },
                    { text: "", image: "/3-techniques/card/16e.jpg" },
                    { text: "", image: "/3-techniques/card/17e.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/1800-1830.jpg" },
                    { text: "", image: "/3-techniques/card/1460-1480.jpg" },
                    { text: "", image: "/3-techniques/card/1830-1850.jpg" },
                    { text: "", image: "/3-techniques/card/1620-1650.jpg" }
                ],
                correct: "B"
            }
        }
    },







    {
        //Q30
        question: "Quel domaine est représenté ici ? ", //souligner domaine
        responseDetails: {
            text: "L'œuvre Les Beaux-Arts de Nicolas Henry Jeaurat de Bertry représente une allégorie des arts, mettant en scène des éléments emblématiques du monde artistique. À travers cette composition, l'artiste illustre l'importance des disciplines telles que la peinture, la sculpture et l'architecture, qui étaient au cœur des préoccupations culturelles du XVIIIᵉ siècle.", //italic Les Beaus-Arts
            media: ""
        },
        media: "/3-techniques/art/beauxArts.png",
        cartel: [
            { id: "artistName", text: "Jeaurat de Bertry Nicolas Henry" },
            { id: "artName", text: "Les Beaux-Arts" },
            { id: "artDate", text: "18ᵉ siècle" },
            { id: "useTechnique", text: "Huile sur toile" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artistName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/Cuisine.jpg" },
                    { text: "", image: "/3-techniques/card/BeauxArts.jpg" },
                    { text: "", image: "/3-techniques/card/Technologie.jpg" },
                    { text: "", image: "/3-techniques/card/Sport.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/Languesetrangeres.jpg" },
                    { text: "", image: "/3-techniques/card/BeauxArts.jpg" },
                    { text: "", image: "/3-techniques/card/Biologie.jpg" },
                    { text: "", image: "/3-techniques/card/Mathematiques.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/Languesetrangeres.jpg" },
                    { text: "", image: "/3-techniques/card/BeauxArts.jpg" },
                    { text: "", image: "/3-techniques/card/Histoire.jpg" },
                    { text: "", image: "/3-techniques/card/Philosophie.jpg" }
                ],
                correct: "B"
            }
        }
    },







    {
        //Q31
        question: "Sur quel matériau repose cette œuvre ? ", //souligner repose
        responseDetails: {
            text: "L'œuvre, réalisée par Odilon Redon (dit Bertrand Redon), est exécutée sur un support en papier en utilisant la technique du pastel. Ce choix de support permet d'obtenir des nuances subtiles et des dégradés doux, caractéristiques du travail d'Odilon Redon.",
            media: ""
        },
        media: "/3-techniques/art/saintSebastian.png",
        cartel: [
            { id: "artistName", text: "Redon Odilon" },
            { id: "artName", text: "Saint Sébastien" },
            { id: "artDate", text: "1910" },
            { id: "useTechnique", text: "Pastel sur papier" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/verre.jpg" },
                    { text: "", image: "/3-techniques/card/papier.jpg" },
                    { text: "", image: "/3-techniques/card/corde.jpg" },
                    { text: "", image: "/3-techniques/card/fer.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/marbre.jpg" },
                    { text: "", image: "/3-techniques/card/papier.jpg" },
                    { text: "", image: "/3-techniques/card/terreCuite.jpg" },
                    { text: "", image: "/3-techniques/card/carton.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/toile.jpg" },
                    { text: "", image: "/3-techniques/card/papier.jpg" },
                    { text: "", image: "/3-techniques/card/bois.jpg" },
                    { text: "", image: "/3-techniques/card/carton.jpg" }
                ],
                correct: "B"
            }
        }
    },






    {
        //Q32
        question: "Quel outil est utilisé pour cette œuvre ?", //souligner outil
        responseDetails: {
            text: "Pour réaliser cette œuvre, Henri Matisse a utilisé le fusain sur papier. Le fusain, un outil de dessin composé de charbon de bois, permet d'obtenir des tracés à la fois précis et expressifs, ainsi que de riches variations de tons, du noir profond aux nuances plus légères.",
            media: ""
        },
        media: "/3-techniques/art/natureMorte.png",
        cartel: [
            { id: "artistName", text: "Matisse Henri" },
            { id: "artName", text: "Nature morte, fruits et fleurs" },
            { id: "artDate", text: "1942" },
            { id: "useTechnique", text: "Fusain sur papier" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/verre.jpg" },
                    { text: "", image: "/3-techniques/card/laine.jpg" },
                    { text: "", image: "/3-techniques/card/massette.jpg" },
                    { text: "", image: "/3-techniques/card/fusain.jpg" }
                ],
                correct: "D"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/encreChine.jpg" },
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" },
                    { text: "", image: "/3-techniques/card/acrylique.jpg" },
                    { text: "", image: "/3-techniques/card/fusain.jpg" }
                ],
                correct: "D"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/encreChine.jpg" },
                    { text: "", image: "/3-techniques/card/crayon.jpg" },
                    { text: "", image: "/3-techniques/card/minePlomb.jpg" },
                    { text: "", image: "/3-techniques/card/fusain.jpg" }
                ],
                correct: "D"
            }
        }
    },





    {
        //Q33
        question: "Quand cette peinture a été réalisée ?", //souligner quand
        responseDetails: {
            text: "Pour réaliser cette œuvre en 2019, Denis Monfleur a utilisé des outils de sculpture adaptés à la pouzzolane de Chambois émaillée et à la lave du Mont-Dore. Ces matériaux volcaniques sont associés à des instruments robustes tels que des ciseaux à pierre, maillets et meules diamantées, permettant de tailler avec précision et de révéler les textures uniques de la roche.",
            media: ""
        },
        media: "/3-techniques/art/galerieRoiReine.png",
        cartel: [
            { id: "artistName", text: "Monfleur Denis" },
            { id: "artName", text: "Galerie des rois et des reines" },
            { id: "artDate", text: "2019" },
            { id: "useTechnique", text: "Pouzzolane de Chambois émaillée et lave du Mont-Dore" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artDate"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/MoyenAge.jpg" },
                    { text: "", image: "/3-techniques/card/Antiquite.jpg" },
                    { text: "", image: "/3-techniques/card/EpoqueContemporaine.jpg" },
                    { text: "", image: "/3-techniques/card/Prehistoire.jpg" }
                ],
                correct: "B"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/20e.jpg" },
                    { text: "", image: "/3-techniques/card/22e.jpg" },
                    { text: "", image: "/3-techniques/card/21e.jpg" },
                    { text: "", image: "/3-techniques/card/19e.jpg" }
                ],
                correct: "B"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/2000-2010.jpg" },
                    { text: "", image: "/3-techniques/card/1990-2000.jpg" },
                    { text: "", image: "/3-techniques/card/2010-2020.jpg" },
                    { text: "", image: "/3-techniques/card/2020-2025.jpg" }
                ],
                correct: "B"
            }
        }
    },








    {
        //Q34
        question: "Quel outil est utilisé pour cette œuvre ?", //souligner outil
        responseDetails: {
            text: "Pour réaliser cette œuvre, Edmond Boissonnet a utilisé la gouache sur papier, une peinture à base d'eau offrant des couleurs intenses et opaques. Il a également travaillé en collage, fixant son dessin sur un deuxième papier pour renforcer l'effet visuel et la composition.",
            media: ""
        },
        media: "/3-techniques/art/projetMosaique.png",
        cartel: [
            { id: "artistName", text: "Boissonnet Edmond" },
            { id: "artName", text: "Projet de mosaïque" },
            { id: "artDate", text: "20ᵉ siècle" },
            { id: "useTechnique", text: "Gouache sur papier collé sur papier" },
            { id: "whereMuseum", text: "En réserve" }
        ],
        hide: ["useTechnique"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/gouache.jpg" },
                    { text: "", image: "/3-techniques/card/ebauchoir.jpg" },
                    { text: "", image: "/3-techniques/card/chanvre.jpg" },
                    { text: "", image: "/3-techniques/card/mirette.jpg" }
                ],
                correct: "A"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/gouache.jpg" },
                    { text: "", image: "/3-techniques/card/platre.jpg" },
                    { text: "", image: "/3-techniques/card/crayon.jpg" },
                    { text: "", image: "/3-techniques/card/sanguine.jpg" }
                ],
                correct: "A"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/gouache.jpg" },
                    { text: "", image: "/3-techniques/card/acrylique.jpg" },
                    { text: "", image: "/3-techniques/card/aquarelle.jpg" },
                    { text: "", image: "/3-techniques/card/peintureHuile.jpg" }
                ],
                correct: "A"
            }
        }
    },






    {
        //Q35
        question: "Quelle est la divinité représentée sur ce tableau?", //souligner outil
        responseDetails: {
            text: "L'œuvre représente le dieu Apollon, figure emblématique de la mythologie grecque et romaine. Associé à la lumière, aux arts, à la musique et à la prophétie, Apollon est souvent représenté sous des traits harmonieux et idéalisés, incarnant la jeunesse et la beauté.",
            media: ""
        },
        media: "/3-techniques/art/apollon.png",
        cartel: [
            { id: "artistName", text: "Lemot François Frédéric baron & Cortot Jean Pierre" },
            { id: "artName", text: "Apollon - Ronde-bosse" },
            { id: "artDate", text: "1812 ; 1827" },
            { id: "useTechnique", text: "Ronde bosse en marbre" },
            { id: "whereMuseum", text: "Exposée" }
        ],
        hide: ["artName"],
        difficulties: {
            easy: {
                choices: [
                    { text: "", image: "/3-techniques/card/Aphrodite.jpg" },
                    { text: "", image: "/3-techniques/card/RosaParks.jpg" },
                    { text: "", image: "/3-techniques/card/MargotRobbieOeuvre.jpg" },
                    { text: "", image: "/3-techniques/card/Apollon.jpg" }
                ],
                correct: "D"
            },
            medium: {
                choices: [
                    { text: "", image: "/3-techniques/card/Aphrodite.jpg" },
                    { text: "", image: "/3-techniques/card/Zeus.jpg" },
                    { text: "", image: "/3-techniques/card/Hades.jpg" },
                    { text: "", image: "/3-techniques/card/Apollon.jpg" }
                ],
                correct: "D"
            },
            hard: {
                choices: [
                    { text: "", image: "/3-techniques/card/Dionysos.jpg" },
                    { text: "", image: "/3-techniques/card/Helios.jpg" },
                    { text: "", image: "/3-techniques/card/Hermes.jpg" },
                    { text: "", image: "/3-techniques/card/Apollon.jpg" }
                ],
                correct: "D"
            }
        }
    },

];
