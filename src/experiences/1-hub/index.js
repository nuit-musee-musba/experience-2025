import gsap from "gsap";
import shuffleTextAnimation from "./utils/ShuffleText";

// Sélection des éléments de la page d'accueil (home)
const projectTitle = document.querySelector('.project-title');

// Navigation dans la section
const homeNav = document.querySelector('.home .nav');
const homeNavItems = document.querySelectorAll('.home .nav li');
const backHome = document.querySelector('.back-home');

// Personnages dans la section home
const homePersonnages = document.querySelectorAll('.home .personnage');
const homePersonnageContainers = document.querySelectorAll('.home .personnage-container');


// Sélection des éléments de la page d'expérience (experience-page)

// Section des personnages
const experiencePersonnages = document.querySelectorAll('.experience-page .personnage');
const experiencePersonnageContainers = document.querySelectorAll('.experience-page .personnage-container');

// Contenu de l'expérience
const experienceContent = document.querySelector('.experience-page .experience-content');

// Illustration de l'expérience
const experienceIllustration = document.querySelector('.experience-page .experience-illustartion');

// Modal d'expérience
const experienceModal = document.querySelector('.experience-page .experience-modal');
const experienceModalTitle = document.querySelector('.experience-page .experience-modal h3');
const experienceModalLine = document.querySelector('.experience-page .experience-modal .line');
const experienceModalText = document.querySelector('.experience-page .experience-modal p');
const experienceModalButton = document.querySelector('.experience-page .experience-modal button a');

const experienceData = [
    {
        id: 1,
        title: 'Résérve',
        description: "Tristan régisseur du Musba fait appel à toi, gardien des merveilles, pour tisser les fils d'une toute nouvelle exposition enchantée. Plonge dans les trésors des réserves, où chaque peinture murmure des histoires oubliées, et laisse ta créativité illuminer la salle. Ta mission : insuffler une magie unique, transformant cet espace en un royaume vibrant qui émerveillera les âmes et éveillera les rêves.",
        illustration: '/1-hub/illustrations/reserve.png',
        link: '/experiences/2-reserve/index.html'
    },
    {
        id: 2,
        title: 'Sculpture',
        description: "Plongez dans l'univers captivant de la sculpture de bronze avec Ernest Meissonier comme guide ! Découvrez chaque étape du processus, de la modélisation en argile au coulage du bronze, et recréez le chef-d'œuvre Le Voyageur. Dans cette expérience ludique et immersive, apprenez l’art complexe de la sculpture de bronze.",
        illustration: '/1-hub/illustrations/sculpture.png',
        link: '/experiences/4-sculpture/index.html'
    },
    {
        id: 3,
        title: 'Peinture',
        description: "Avec Polychromia, plonge dans l’univers fascinant des couleurs à travers divers mouvements artistiques ! Découvre comment la palette choisie par l’artiste influence la signification de l’œuvre, et recolorise certaines parties clés du tableau pour comprendre l’importance des couleurs dans une œuvre. Grâce à des choix interactifs et guidés, tu apprendras à décoder l’art de manière ludique et captivante !",
        illustration: '/1-hub/illustrations/peinture.png',
        link: '/experiences/5-peintures/index.html'
    },
    {
        id: 4,
        title: 'Arts Graphiques',
        description: "Mesdames et Messieurs, vous avez été sélectionnés pour participer au célèbre quiz CARTES & CARTELS ! Que vous veniez seul ou à plusieurs, préparez-vous à affronter une succession de questions sur ces petits écriteaux descriptifs des œuvres : les cartels. Déduction et connaissances seront vos meilleures armes pour parvenir à vous sortir de cette aventure périlleuse.",
        illustration: '/1-hub/illustrations/art-graphiques.png',
        link: '/experiences/3-techniques/index.html'
    },
    {
        id: 5,
        title: 'Restauration',
        description: "Prenez les commandes d’une restauration de tableau et découvrez la beauté de ce métier qui transmet le passé aux générations futures. À travers cette expérience, suivez les conseils du formateur et formez vous avant tout à ce noble métier requérant des notions scientifiques surprenantes. Un métier magique et bien plus exercer que vous ne le pensez.",
        illustration: '/1-hub/illustrations/restauration.png',
        link: '/experiences/6-restaurations/index.html'
    },
    
]





let experienceID
let previousExperienceID
let isInExperiencePage = false;

// Fonction pour créer l'animation enterExperience
const enterExperience = (experienceID) => {
    console.log('enter experience');
    

    const targetPerso = document.querySelector(`.experience-page .personnage-container[experience-id="${experienceID}"]`);
    const targetModalTitle = document.querySelector(`.experience-page .experience-modal h3`);
    const targetModalText = document.querySelector(`.experience-page .experience-modal p`);
    const targetIllustartion = document.querySelector(`.experience-page .experience-illustartion img`);
    const targetBtn = document.querySelector(`.experience-page .experience-modal button a`);

    

    if ( !targetPerso) {
        console.error(`No elements found for experience ID: ${experienceID}`);
        return;
    }

    const targetExperienceData = experienceData.find((exp) => exp.id == experienceID);

    if (!targetExperienceData) {
        console.error(`No data found for experience ID: ${experienceID}`);
        return;
    }

    targetModalTitle.innerText = targetExperienceData.title;
    targetModalText.innerText = targetExperienceData.description;
    targetIllustartion.src = targetExperienceData.illustration;
    targetBtn.href = targetExperienceData.link;

    shuffleTextAnimation(targetModalTitle, targetExperienceData.title, {duration: 0.2, delay: 0.65, steps: 10});


    // Crée et joue la timeline pour l'animation
    return gsap.timeline()
        .set(experienceIllustration, {display: 'flex'})
        .set(experienceModal, {display: 'flex'})
        .set(experienceIllustration, {
            clipPath: "inset(0 0 100% 0)",
        })
        .add(leaveHome.play())
        .fromTo(targetPerso, {
            opacity: 0,
            y:1500,
        },{
            display: 'block',
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
        },0.25)
        .to(projectTitle,{transform: 'translate(-50%, -15vh) scale(0.7)', duration: 0.5},0.15)
        .to(experienceIllustration, {
            clipPath: "inset(0 0 0% 0)", 
            duration: 0.5,
            ease: "power2.inOut",
        },0.25)
        .fromTo(experienceIllustration,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            },0.25
        )
        .fromTo(experienceModal,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            }, 0.65
        )
        .fromTo(targetModalText,{
            opacity: 0,
            y: 50,
        },{
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
        }, 0.65)
        
       
};


const leaveExperience = (experienceID) => { 
    const targetPerso = document.querySelector(`.experience-page .personnage-container[experience-id="${experienceID}"]`);
    
    return gsap.timeline()
        .to(targetPerso,{
            opacity: 0,
            y: 1500,
            duration: 0.5,
            ease: "power2.out",
        })
        .to(experienceIllustration,{
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        },0.15)
        .to(experienceModal,{
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        },0.15)
        .add(leaveHome.reverse(),0.05)
        .set(experienceIllustration,{
            display: 'none',
        })
        .set(experienceModal,{
            display: 'none',
        })
        
}

const changeExperience = (experienceID, previousExperienceID) => {
    console.log('change experience');
    
    const targetPerso = document.querySelector(`.experience-page .personnage-container[experience-id="${experienceID}"]`);
    const previousPerso = document.querySelector(`.experience-page .personnage-container[experience-id="${previousExperienceID}"]`);

    const targetModalTitle = document.querySelector(`.experience-page .experience-modal h3`);
    const targetModalText = document.querySelector(`.experience-page .experience-modal p`);
    const targetIllustartionContainer = document.querySelector(`.experience-page .experience-illustartion`);
    const targetIllustartion = targetIllustartionContainer.querySelector("img");
    const previousIllustartion = document.querySelector(`.experience-page .experience-illustartion img[src="${experienceData.find(exp => exp.id == previousExperienceID)?.illustration}"]`);
    
    const targetBtn = document.querySelector(`.experience-page .experience-modal button a`);
    
    if (!targetPerso || !previousPerso) {
        console.error(`No elements found for experience ID: ${experienceID}`);
        return;
    }

    const targetExperienceData = experienceData.find((exp) => exp.id == experienceID);
    if (!targetExperienceData) {
        console.error(`No data found for experience ID: ${experienceID}`);
        return;
    }

    targetModalTitle.innerText = targetExperienceData.title;
    targetModalText.innerText = targetExperienceData.description;
    targetBtn.href = targetExperienceData.link;

    shuffleTextAnimation(targetModalTitle, targetExperienceData.title, { duration: 0.2,delay:0.65, steps: 10 });


    const maskTimeline = gsap.timeline();
    maskTimeline
        .to(targetIllustartionContainer, {
            clipPath: "inset(0 0 100% 0)", 
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
                previousIllustartion.src = ""; 
                targetIllustartion.src = targetExperienceData.illustration; 
            },
        })
        .set(targetIllustartionContainer, {
            clipPath: "inset(0 0 100% 0)",
        })
        .to(targetIllustartionContainer, {
            clipPath: "inset(0 0 0% 0)", 
            duration: 0.5,
            ease: "power2.inOut",
        });

    return gsap.timeline()
        .add(maskTimeline) 
        .to(previousPerso, {
            opacity: 0,
            y: 1500,
            duration: 0.5,
            ease: "power2.out",
        },0)
        .fromTo(targetPerso, {
            opacity: 0,
            y: 1500,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
        }, '-=0.5')
        .fromTo(experienceModal,{
            opacity: 0,
        },{
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
        }, 0.65)
        .fromTo(targetModalText, {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
        }, "<");
};

homeNavItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const newExperienceID = item.getAttribute('experience-id');

        if (newExperienceID === experienceID) return;


        previousExperienceID = experienceID;
        experienceID = newExperienceID;


        if (!isInExperiencePage) {
            enterExperience(experienceID);
            isInExperiencePage = true;
        } else {
            changeExperience(experienceID, previousExperienceID);
        }
    });
});


const leaveHome = gsap.timeline({
    paused: true
})


leaveHome
    .to(homePersonnageContainers,{y: 1500, opacity:0, duration: 0.5, stagger:0.05 }) 


backHome.addEventListener('click', () => {
    leaveExperience(experienceID);
     

    isInExperiencePage = false;
    experienceID = null;
    previousExperienceID = null;
})


