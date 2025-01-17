import gsap from "gsap";

// Sélection des éléments de la page d'accueil (home)
// Titre principal
const projectTitle = document.querySelector('.project-title');

// Navigation dans la section home
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
const experienceIllustration = document.querySelector('.experience-page .experience-illustartion img');

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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si correcte referemus, existentia corporis necesse est ut sit, exsistat autem id, quod est principium motus, id est calor.',
        illustration: '/1-hub/placeholder.png',
        link: '/experiences/2-reserve/index.html'
    },
    {
        id: 2,
        title: 'Sculpture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si correcte referemus, existentia corporis necesse est ut sit, exsistat autem id, quod est principium motus, id est calor.',
        illustration: '/1-hub/placeholder.png',
        link: '/experiences/4-sculpture/index.html'
    },
    {
        id: 3,
        title: 'Peinture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si correcte referemus, existentia corporis necesse est ut sit, exsistat autem id, quod est principium motus, id est calor.',
        illustration: '/1-hub/placeholder.png',
        link: '/experiences/5-peintures/index.html'
    },
    {
        id: 4,
        title: 'Arts Graphiques',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si correcte referemus, existentia corporis necesse est ut sit, exsistat autem id, quod est principium motus, id est calor.',
        illustration: '/1-hub/placeholder.png',
        link: '/experiences/3-techniques/index.html'
    },
    {
        id: 5,
        title: 'Restauration',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si correcte referemus, existentia corporis necesse est ut sit, exsistat autem id, quod est principium motus, id est calor.',
        illustration: '/1-hub/placeholder.png',
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

    // Crée et joue la timeline pour l'animation
    return gsap.timeline({delay:0.5})
        .set(experienceContent, {display: 'flex'})
        .to(experienceContent,
            {
                opacity:1,
                duration: 0.5,
                ease: "power2.out",
            }
        )
        .fromTo(targetPerso, {
            opacity: 0,
            y:1500,
        },{
            display: 'block',
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
        })
        .fromTo(experienceIllustration,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            },0
        )
        .fromTo(experienceModal,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            }, 0
        )
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
        .to(experienceContent,{
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
        })
        .set(experienceContent,{
            display: 'none',
        })
}

const changeExperience = (experienceID, previousExperienceID) => {
    console.log('change experience');
    

    const targetPerso = document.querySelector(`.experience-page .personnage-container[experience-id="${experienceID}"]`);
    const previousPerso = document.querySelector(`.experience-page .personnage-container[experience-id="${previousExperienceID}"]`);

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

    console.log(targetPerso, previousPerso);
    

    if ( !targetPerso || !previousPerso) {
        console.error(`No elements found for experience ID: ${experienceID}`);
        return;
    }

    return gsap.timeline()
        .to(previousPerso, {
            opacity: 0,
            y: 1500,
            duration: 0.5,
            ease: "power2.out",
        })
        .fromTo(targetPerso, {
            opacity: 0,
            y: 1500,
        },{
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
        },'-=0.5')


}

homeNavItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const newExperienceID = item.getAttribute('experience-id');

        if (newExperienceID === experienceID) return;


        previousExperienceID = experienceID;
        experienceID = newExperienceID;


        if (!isInExperiencePage) {
            leaveHome.play();
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
    .to(projectTitle,{transform: 'translate(-50%, -15vh) scale(0.8)', duration: 0.5})
    .to(homePersonnageContainers,{y: 1500, opacity:0, duration: 0.5, stagger:0.05 },'-=0.5') 


backHome.addEventListener('click', () => {
    leaveExperience(experienceID);
    setTimeout(() => {
        leaveHome.reverse();
    }, 500);

    isInExperiencePage = false;
    experienceID = null;
    previousExperienceID = null;
})


// const enterExperience = gsap.timeline({paused: true})